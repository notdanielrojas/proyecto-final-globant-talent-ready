import dotenv from "dotenv";
dotenv.config();

import { test as base, type Page } from "@playwright/test";

import LoginPage from "../pages/LoginPage.js";
import ClientsPage from "../pages/ClientsPage.js";
import ArticlesPage from "../pages/ArticlesPage.js";
import Sidebar from "../pages/components/Sidebar.js";
import InvoicePage from "../pages/InvoicePage.js";
import PaymentPage from "../pages/PaymentPage.js";

import { AuthApiService } from "../services/auth.api.js";
import { ClientApiService } from "../services/client.api.js";
import { ArticleApiService } from "../services/article.api.js";
import { InvoiceApiService } from "../services/invoice.api.js";
import { PaymentApiService } from "../services/payment.api.js";

type AllFixtures = {
  loginPage: LoginPage;
  authenticatedPage: Page;

  clientsPage: ClientsPage;
  articlesPage: ArticlesPage;
  sidebar: Sidebar;
  invoicePage: InvoicePage;
  paymentPage: PaymentPage;

  authApi: AuthApiService;
  clientApi: ClientApiService;
  articleApi: ArticleApiService;
  invoiceApi: InvoiceApiService;
  paymentApi: PaymentApiService;
};

export const test = base.extend<AllFixtures>({
  // Login Page
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await use(loginPage);
  },

  // Authenticated Page
  authenticatedPage: async ({ page, loginPage }, use) => {
    const email = process.env.USER_ADMIN;
    const password = process.env.PASSWORD_ADMIN;

    if (!email || !password) {
      throw new Error("USER_ADMIN and PASSWORD_ADMIN environment variables are required");
    }

    await loginPage.fillForm(email, password);

    await page.waitForURL(/.*dashboard/);

    await use(page);
  },

  // UI Page Objects
  clientsPage: async ({ authenticatedPage }, use) => {
    await use(new ClientsPage(authenticatedPage));
  },

  articlesPage: async ({ authenticatedPage }, use) => {
    await use(new ArticlesPage(authenticatedPage));
  },

  sidebar: async ({ authenticatedPage }, use) => {
    await use(new Sidebar(authenticatedPage));
  },

  invoicePage: async ({ authenticatedPage }, use) => {
    await use(new InvoicePage(authenticatedPage));
  },

  paymentPage: async ({ authenticatedPage }, use) => {
    await use(new PaymentPage(authenticatedPage));
  },

  // API Services
  authApi: async ({ request }, use) => {
    await use(new AuthApiService(request));
  },

  clientApi: async ({ request }, use) => {
    await use(new ClientApiService(request));
  },

  articleApi: async ({ request }, use) => {
    await use(new ArticleApiService(request));
  },

  invoiceApi: async ({ request }, use) => {
    await use(new InvoiceApiService(request));
  },

  paymentApi: async ({ request }, use) => {
    await use(new PaymentApiService(request));
  },
});

export { expect } from "@playwright/test";
