import { test, expect } from "../fixtures/fixtures.js";
import { ClientFactory } from "../factory/client.factory.js";
import { ArticleFactory } from "../factory/article.factory.js";
import { InvoiceFactory } from "../factory/invoice.factory.js";
import { PaymentFactory } from "../factory/payment.factory.js";

test.describe.serial("Web E2E Suite - Complete ERP Sales Flow", () => {
  let createdClientCode: string;
  let createdArticleCode: string;

  test("1. Create a new Client", async ({ clientsPage, sidebar, page }) => {
    const clientData = ClientFactory.create();

    await sidebar.goToCreateClient();

    const responsePromise = page.waitForResponse(
      (res) => res.request().method() === "POST" && (res.status() === 200 || res.status() === 201),
    );

    await clientsPage.fillForm(clientData);

    const response = await responsePromise;
    const body = await response.json();

    createdClientCode = body.data?.customer_code;

    await expect(clientsPage.page).toHaveURL(process.env.CLIENT_URL!, {
      timeout: 20000,
    });
  });

  test("2. Create a new Article", async ({ articlesPage, sidebar, page }) => {
    const articleData = ArticleFactory.create();

    await sidebar.goToCreateArticle();

    const responsePromise = page.waitForResponse(
      (res) => res.request().method() === "POST" && (res.status() === 200 || res.status() === 201),
    );

    await articlesPage.fillForm(articleData);

    const response = await responsePromise;
    const body = await response.json();

    createdArticleCode = body.data?.sku || body.data?.product_code;

    await expect(page).toHaveURL(process.env.ARTICLE_URL!, { timeout: 20000 });
  });

  test("3. Issue a new Invoice linking Client and Article", async ({ invoicePage, sidebar, page }) => {
    const invoiceData = InvoiceFactory.create({
      clienteCodigo: createdClientCode,
      items: [
        {
          codigoArticulo: createdArticleCode,
          cantidad: 1,
        },
      ],
    });

    await sidebar.goToCreateInvoice();
    await invoicePage.fillForm(invoiceData);

    await expect(page).toHaveURL(process.env.INVOICE_URL!, {
      timeout: 20000,
    });
  });

  test("4. Register a new Payment", async ({ paymentPage, sidebar, page }) => {
    const paymentData = PaymentFactory.create({
      clienteCodigo: createdClientCode,
    });

    await sidebar.goToCreatePayment();
    await paymentPage.fillForm(paymentData);

    await expect(page).toHaveURL(process.env.PAYMENT_URL!, {
      timeout: 20000,
    });
  });
});