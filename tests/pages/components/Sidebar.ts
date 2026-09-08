import { Locator, Page } from "@playwright/test";

export default class Sidebar {
  readonly page: Page;
  readonly clientManagementMenu: Locator;
  readonly clientsOption: Locator;
  readonly expandDashboard: Locator;
  readonly paymentOption: Locator;
  readonly articlesMenu: Locator;
  readonly articlesOption: Locator;
  readonly createClientOption: Locator;
  readonly createArticleOption: Locator;
  readonly createPaymentOption: Locator;
  readonly invoiceOption: Locator;
  readonly createInvoiceButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.expandDashboard = page.locator("aside a, nav a").first();
    this.clientManagementMenu = page.getByRole("button", { name: "Gestión de Clientes" });
    this.clientsOption = page.getByRole("link", { name: "Clientes" });
    this.createClientOption = page.getByRole("button", { name: "Crear Cliente" });
    this.paymentOption = page.getByRole("link", { name: "Cobranzas" });
    this.articlesMenu = page.getByRole("button", { name: "Inventario" });
    this.articlesOption = page.getByRole("link", { name: "Artículos" });
    this.createArticleOption = page.getByRole("button", { name: "Crear Artículo" });
    this.createPaymentOption = page.getByRole("button", { name: "Crear Cobranza" });
    this.invoiceOption = page.getByRole("link", { name: "Facturas de Venta" });
    this.createInvoiceButton = page.getByRole("button", { name: "Crear Factura" });
  }

  async goToCreateClient() {
    await this.expandDashboard.click();
    await this.clientManagementMenu.click();
    await this.clientsOption.click();
    await this.createClientOption.click();
  }

  async goToCreateInvoice() {
    await this.expandDashboard.click();
    await this.clientManagementMenu.click();
    await this.invoiceOption.click();
    await this.createInvoiceButton.click();
  }

  async goToCreateArticle() {
    await this.expandDashboard.click();
    await this.articlesMenu.click();
    await this.articlesOption.click();
    await this.createArticleOption.click();
  }

  async goToCreatePayment() {
    await this.expandDashboard.click();
    await this.clientManagementMenu.click();
    await this.paymentOption.click()
    await this.createPaymentOption.click();
  }
}
