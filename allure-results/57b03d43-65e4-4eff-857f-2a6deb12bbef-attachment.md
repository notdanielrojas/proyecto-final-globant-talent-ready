# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createPayment.spec.ts >> Payment module tests >> User must successfully register a payment
- Location: tests\createPayment.spec.ts:5:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTitle('Llenar con saldo pendiente')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - complementary [ref=e4]:
      - img "Logo" [ref=e6]
      - navigation [ref=e7]:
        - searchbox "Buscar en el menú" [ref=e9]
        - list [ref=e10]:
          - listitem [ref=e11]:
            - link "Dashboard" [ref=e12] [cursor=pointer]:
              - /url: /dashboard
          - listitem [ref=e16]:
            - generic [ref=e17]:
              - button "Gestión de Clientes" [ref=e18] [cursor=pointer]
              - list [ref=e24]:
                - listitem [ref=e25]:
                  - link "Prospectos" [ref=e26] [cursor=pointer]:
                    - /url: /leads
                - listitem [ref=e31]:
                  - link "Clientes" [ref=e32] [cursor=pointer]:
                    - /url: /clientes
                - listitem [ref=e37]:
                  - link "Facturas de Venta" [ref=e38] [cursor=pointer]:
                    - /url: /facturas-de-venta
                - listitem [ref=e43]:
                  - link "Notas de Crédito" [ref=e44] [cursor=pointer]:
                    - /url: /notas-credito
                - listitem [ref=e49]:
                  - link "Notas Financieras" [ref=e50] [cursor=pointer]:
                    - /url: /notas-financieras
                - listitem [ref=e55]:
                  - link "Pedidos de Venta" [ref=e56] [cursor=pointer]:
                    - /url: /pedidos-de-venta
                - listitem [ref=e61]:
                  - link "Autorizar pedidos" [ref=e62] [cursor=pointer]:
                    - /url: /autorizacion-pedidos
                - listitem [ref=e67]:
                  - link "Cobranzas" [ref=e68] [cursor=pointer]:
                    - /url: /cobranzas
                - listitem [ref=e73]:
                  - link "Remitos" [ref=e74] [cursor=pointer]:
                    - /url: /remitos
                - listitem [ref=e79]:
                  - link "Vendedores" [ref=e80] [cursor=pointer]:
                    - /url: /vendedores
                - listitem [ref=e85]:
                  - link "Compradores" [ref=e86] [cursor=pointer]:
                    - /url: /compradores
          - listitem [ref=e91]:
            - button "Gestión de Proveedores" [ref=e93] [cursor=pointer]
          - listitem [ref=e99]:
            - button "Inventario" [ref=e101] [cursor=pointer]
          - listitem [ref=e107]:
            - button "Finanzas" [ref=e109] [cursor=pointer]
          - listitem [ref=e115]:
            - button "Configuración" [ref=e117] [cursor=pointer]
          - listitem [ref=e123]:
            - link "Reportes" [ref=e124] [cursor=pointer]:
              - /url: /reportes
      - button "Contraer" [ref=e129]
    - generic [ref=e133]:
      - banner [ref=e134]:
        - button "Cerrar Sesión" [ref=e135]
      - main [ref=e136]:
        - generic [ref=e137]:
          - heading "Crear Cobranza" [level=2] [ref=e138]
          - generic [ref=e139]:
            - generic [ref=e140]:
              - generic [ref=e141]: Cliente
              - generic [ref=e142]:
                - textbox "Código..." [ref=e144]: "00057"
                - generic [ref=e145]:
                  - textbox "Nombre..." [ref=e146]: Goyette - Welch
                  - button "Limpiar" [ref=e147]
                  - button "Buscar" [ref=e150]
              - paragraph [ref=e153]: "Saldo anticipado disponible: $ 5.927.008,00"
            - generic [ref=e154]:
              - generic [ref=e155]: Fecha de Cobro
              - textbox "Fecha de Cobro" [ref=e156]: 2026-09-07
          - generic [ref=e157]:
            - heading "Facturas Pendientes de Cobro" [level=3] [ref=e158]
            - table [ref=e160]:
              - rowgroup [ref=e161]:
                - row [ref=e162]:
                  - columnheader "Factura" [ref=e163]
                  - columnheader "Fecha" [ref=e164]
                  - columnheader "Total" [ref=e165]
                  - columnheader "Saldo" [ref=e166]
                  - columnheader "Monto a Aplicar" [ref=e167]
              - rowgroup [ref=e168]:
                - row [ref=e169]:
                  - cell "Este cliente no tiene facturas pendientes." [ref=e170]
          - generic [ref=e171]:
            - generic [ref=e172]:
              - heading "Medios de Pago" [level=3] [ref=e173]
              - button "Añadir Medio" [ref=e174]
            - generic [ref=e177]:
              - generic [ref=e178]:
                - text: Medio
                - combobox "Medio" [ref=e179]:
                  - option "Efectivo" [selected]
                  - option "Cheque"
                  - option "Transferencia"
                  - option "Documento"
                  - option "Retención"
                  - option "Ajuste"
                  - option "Saldo Anticipado ($ 5.927.008,00)"
              - generic [ref=e180]:
                - text: Cuenta
                - generic [ref=e181]:
                  - textbox "Código..." [active] [ref=e183]: "100100"
                  - generic [ref=e184]:
                    - textbox "Nombre..." [ref=e185]
                    - button "Limpiar" [ref=e186]
                    - button "Buscar" [ref=e189]
              - generic [ref=e195]:
                - text: Valor
                - generic [ref=e196]:
                  - textbox "0.00" [ref=e197]
                  - button "Completar valor con el faltante respecto al total aplicado" [disabled]
                  - button "Eliminar ítem" [ref=e198]
            - generic [ref=e201]:
              - generic [ref=e202]: "Total Medios de Pago:"
              - generic [ref=e203]: $ 0,00
          - generic [ref=e204]:
            - generic [ref=e205]:
              - heading "Descuentos y Retenciones" [level=2] [ref=e206]
              - paragraph [ref=e207]: El cliente no tiene retenciones configuradas o aplicables.
            - generic [ref=e208]:
              - heading "Resumen" [level=2] [ref=e209]
              - generic [ref=e210]:
                - generic [ref=e211]: "Importe Bruto:"
                - generic [ref=e212]: $ 0,00
              - generic [ref=e213]:
                - generic [ref=e214]: "Retenciones:"
                - generic [ref=e215]: "- $ 0,00"
              - generic [ref=e216]:
                - generic [ref=e217]: "Neto a Cobrar:"
                - generic [ref=e218]: $ 0,00
              - generic [ref=e219]:
                - generic [ref=e220]: "TOTAL COBRADO:"
                - generic [ref=e221]: $ 0,00
          - generic [ref=e222]:
            - button "Cancelar" [ref=e223]
            - button "Guardar Cobranza" [ref=e224]
  - region "Notifications Alt+T"
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
  38 |   async fillClienteCodigoInput(clienteCodigo: string): Promise<void> {
  39 |     await this.clienteCodigoInput.fill(clienteCodigo);
  40 |     await this.clienteCodigoInput.press("Enter");
  41 |     await this.page.waitForTimeout(1500);
  42 |   }
  43 | 
  44 |   async fillFechaCobroInput(fechaCobro: string): Promise<void> {
  45 |     await this.fechaCobroInput.fill(fechaCobro);
  46 |   }
  47 | 
  48 |   async clickAgregarMedioDePagoButton(): Promise<void> {
  49 |     await this.agregarMedioDePagoButton.click();
  50 |   }
  51 | 
  52 |   async fillCuentaInput(cuentaContable: number): Promise<void> {
  53 |     await this.cuentaInput.fill(cuentaContable.toString());
  54 |   }
  55 | 
  56 |   async clickPayInvoiceTotalButton(): Promise<void> {
> 57 |     await this.payInvoiceTotalButton.click();
     |                                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  58 |   }
  59 | 
  60 |   async clickPayTotalDebtButton(): Promise<void> {
  61 |     await this.payTotalDebtButton.click();
  62 |   }
  63 | 
  64 |   async clickGuardarCobranzaButton(): Promise<void> {
  65 |     await this.guardarCobranzaButton.click();
  66 |   }
  67 | }
  68 | 
```