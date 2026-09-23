import { Locator, Page } from "@playwright/test";
import { PaymentData } from "../factory/payment.factory.js";

export default class PaymentPage {
  readonly page: Page;
  readonly clienteCodigoInput: Locator;
  readonly fechaCobroInput: Locator;
  readonly cuentaInput: Locator;
  readonly agregarMedioDePagoButton: Locator;
  readonly payInvoiceTotalButton: Locator;
  readonly payTotalDebtButton: Locator;
  readonly guardarCobranzaButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.clienteCodigoInput = page.getByRole("textbox", { name: "Código..." });
    this.fechaCobroInput = page.locator('input[type="date"]');
    this.agregarMedioDePagoButton = page.getByRole("button", { name: "Añadir Medio" });
    this.cuentaInput = page.locator(
      "div[class='col-span-12 md:col-span-3'] div[class='flex w-full space-x-2 mt-1'] div:nth-child(1) input",
    );
    this.payInvoiceTotalButton = page.getByTitle("Llenar con saldo pendiente");
    this.payTotalDebtButton = page.getByRole("button", { name: "Completar valor con el faltante respecto al total aplicado" });

    this.guardarCobranzaButton = page.getByRole("button", { name: "Guardar Cobranza" });
  }

  async fillForm(payment: PaymentData): Promise<void> {
    await this.fillClienteCodigoInput(payment.clienteCodigo);
    await this.fillFechaCobroInput(payment.fechaCobro!);
    await this.clickAgregarMedioDePagoButton();
    await this.fillCuentaInput(payment.mediosPago[0].cuentaContable);
    await this.clickPayInvoiceTotalButton();
    await this.clickPayTotalDebtButton();
    await this.clickGuardarCobranzaButton();
  }
  

  async fillClienteCodigoInput(clienteCodigo: string): Promise<void> {
    await this.clienteCodigoInput.fill(clienteCodigo);
    await this.clienteCodigoInput.press("Enter");
    await this.page.waitForTimeout(1500);
  }

  async fillFechaCobroInput(fechaCobro: string): Promise<void> {
    await this.fechaCobroInput.fill(fechaCobro);
  }

  async clickAgregarMedioDePagoButton(): Promise<void> {
    await this.agregarMedioDePagoButton.click();
  }

  async fillCuentaInput(cuentaContable: number): Promise<void> {
    await this.cuentaInput.fill(cuentaContable.toString());
  }

  async clickPayInvoiceTotalButton(): Promise<void> {
    await this.payInvoiceTotalButton.click();
  }

  async clickPayTotalDebtButton(): Promise<void> {
    await this.payTotalDebtButton.click();
  }

  async clickGuardarCobranzaButton(): Promise<void> {
    await this.guardarCobranzaButton.click();
  }
}
