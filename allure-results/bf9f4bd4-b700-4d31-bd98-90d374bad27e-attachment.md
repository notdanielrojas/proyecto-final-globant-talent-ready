# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\e2e.web.spec.ts >> Suite Web E2E - Flujo Completo de Ventas ERP >> 4. Registrar una nueva Cobranza
- Location: tests\e2e\e2e.web.spec.ts:39:3

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByTitle('Llenar con saldo pendiente')

```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | import { PaymentData } from "../factory/payment.factory.js";
  3  | 
  4  | export default class PaymentPage {
  5  |   readonly page: Page;
  6  |   readonly clienteCodigoInput: Locator;
  7  |   readonly fechaCobroInput: Locator;
  8  |   readonly cuentaInput: Locator;
  9  |   readonly agregarMedioDePagoButton: Locator;
  10 |   readonly payInvoiceTotalButton: Locator;
  11 |   readonly payTotalDebtButton: Locator;
  12 |   readonly guardarCobranzaButton: Locator;
  13 | 
  14 |   constructor(page: Page) {
  15 |     this.page = page;
  16 |     this.clienteCodigoInput = page.getByRole("textbox", { name: "Código..." });
  17 |     this.fechaCobroInput = page.locator('input[type="date"]');
  18 |     this.agregarMedioDePagoButton = page.getByRole("button", { name: "Añadir Medio" });
  19 |     this.cuentaInput = page.locator(
  20 |       "div[class='col-span-12 md:col-span-3'] div[class='flex w-full space-x-2 mt-1'] div:nth-child(1) input",
  21 |     );
  22 |     this.payInvoiceTotalButton = page.getByTitle("Llenar con saldo pendiente");
  23 |     this.payTotalDebtButton = page.getByRole("button", { name: "Completar valor con el faltante respecto al total aplicado" });
  24 | 
  25 |     this.guardarCobranzaButton = page.getByRole("button", { name: "Guardar Cobranza" });
  26 |   }
  27 | 
  28 |   async fillForm(payment: PaymentData): Promise<void> {
  29 |     await this.fillClienteCodigoInput(payment.clienteCodigo);
  30 |     await this.fillFechaCobroInput(payment.fechaCobro!);
  31 |     await this.clickAgregarMedioDePagoButton();
  32 |     await this.fillCuentaInput(payment.mediosPago[0].cuentaContable);
  33 |     await this.clickPayInvoiceTotalButton();
  34 |     await this.clickPayTotalDebtButton();
  35 |     await this.clickGuardarCobranzaButton();
  36 |   }
  37 |   
  38 | 
  39 |   async fillClienteCodigoInput(clienteCodigo: string): Promise<void> {
  40 |     await this.clienteCodigoInput.fill(clienteCodigo);
  41 |     await this.clienteCodigoInput.press("Enter");
  42 |     await this.page.waitForTimeout(1500);
  43 |   }
  44 | 
  45 |   async fillFechaCobroInput(fechaCobro: string): Promise<void> {
  46 |     await this.fechaCobroInput.fill(fechaCobro);
  47 |   }
  48 | 
  49 |   async clickAgregarMedioDePagoButton(): Promise<void> {
  50 |     await this.agregarMedioDePagoButton.click();
  51 |   }
  52 | 
  53 |   async fillCuentaInput(cuentaContable: number): Promise<void> {
  54 |     await this.cuentaInput.fill(cuentaContable.toString());
  55 |   }
  56 | 
  57 |   async clickPayInvoiceTotalButton(): Promise<void> {
> 58 |     await this.payInvoiceTotalButton.click();
     |                                      ^ Error: locator.click: Test ended.
  59 |   }
  60 | 
  61 |   async clickPayTotalDebtButton(): Promise<void> {
  62 |     await this.payTotalDebtButton.click();
  63 |   }
  64 | 
  65 |   async clickGuardarCobranzaButton(): Promise<void> {
  66 |     await this.guardarCobranzaButton.click();
  67 |   }
  68 | }
  69 | 
```