# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createPayment.spec.ts >> Módulo de Cobranzas >> Debe registrar una cobranza exitosamente usando datos generados por Factory
- Location: tests\createPayment.spec.ts:5:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('select').first()

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
            - link "Dashboard" [ref=e12]:
              - /url: /dashboard
          - listitem [ref=e16]:
            - generic [ref=e17]:
              - button "Gestión de Clientes" [ref=e18] [cursor=pointer]
              - list [ref=e24]:
                - listitem [ref=e25]:
                  - link "Prospectos" [ref=e26]:
                    - /url: /leads
                - listitem [ref=e31]:
                  - link "Clientes" [ref=e32]:
                    - /url: /clientes
                - listitem [ref=e37]:
                  - link "Facturas de Venta" [ref=e38]:
                    - /url: /facturas-de-venta
                - listitem [ref=e43]:
                  - link "Notas de Crédito" [ref=e44]:
                    - /url: /notas-credito
                - listitem [ref=e49]:
                  - link "Notas Financieras" [ref=e50]:
                    - /url: /notas-financieras
                - listitem [ref=e55]:
                  - link "Pedidos de Venta" [ref=e56]:
                    - /url: /pedidos-de-venta
                - listitem [ref=e61]:
                  - link "Autorizar pedidos" [ref=e62]:
                    - /url: /autorizacion-pedidos
                - listitem [ref=e67]:
                  - link "Cobranzas" [ref=e68]:
                    - /url: /cobranzas
                - listitem [ref=e73]:
                  - link "Remitos" [ref=e74]:
                    - /url: /remitos
                - listitem [ref=e79]:
                  - link "Vendedores" [ref=e80]:
                    - /url: /vendedores
                - listitem [ref=e85]:
                  - link "Compradores" [ref=e86]:
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
            - link "Reportes" [ref=e124]:
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
            - generic [ref=e153]:
              - generic [ref=e154]: Fecha de Cobro
              - textbox "Fecha de Cobro" [active] [ref=e155]: 2026-09-05
          - generic [ref=e156]:
            - heading "Facturas Pendientes de Cobro" [level=3] [ref=e157]
            - table [ref=e159]:
              - rowgroup [ref=e160]:
                - row [ref=e161]:
                  - columnheader "Factura" [ref=e162]
                  - columnheader "Fecha" [ref=e163]
                  - columnheader "Total" [ref=e164]
                  - columnheader "Saldo" [ref=e165]
                  - columnheader "Monto a Aplicar" [ref=e166]
              - rowgroup [ref=e167]:
                - row [ref=e168]:
                  - cell "Este cliente no tiene facturas pendientes." [ref=e169]
          - generic [ref=e171]:
            - heading "Medios de Pago" [level=3] [ref=e172]
            - button "Añadir Medio" [ref=e173]
          - generic [ref=e176]:
            - generic [ref=e177]:
              - heading "Descuentos y Retenciones" [level=2] [ref=e178]
              - paragraph [ref=e179]: El cliente no tiene retenciones configuradas o aplicables.
            - generic [ref=e180]:
              - heading "Resumen" [level=2] [ref=e181]
              - generic [ref=e182]:
                - generic [ref=e183]: "Importe Bruto:"
                - generic [ref=e184]: $ 0,00
              - generic [ref=e185]:
                - generic [ref=e186]: "Retenciones:"
                - generic [ref=e187]: "- $ 0,00"
              - generic [ref=e188]:
                - generic [ref=e189]: "Neto a Cobrar:"
                - generic [ref=e190]: $ 0,00
              - generic [ref=e191]:
                - generic [ref=e192]: "TOTAL COBRADO:"
                - generic [ref=e193]: $ 0,00
          - generic [ref=e194]:
            - button "Cancelar" [ref=e195]
            - button "Guardar Cobranza" [ref=e196]
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
  8  |   readonly medioPagoSelect: Locator;
  9  |   readonly cuentaInput: Locator;
  10 |   readonly montoInput: Locator;
  11 |   readonly guardarCobranzaButton: Locator;
  12 |   readonly agregarMedioDePagoButton: Locator;
  13 | 
  14 |   constructor(page: Page) {
  15 |     this.page = page;
  16 |     this.clienteCodigoInput = page.getByRole("textbox", { name: "Código..." });
  17 |     this.fechaCobroInput = page.locator('input[type="date"]');
  18 |     this.agregarMedioDePagoButton = page.locator(
  19 |       "//button[normalize-space()='Añadir Medio']//*[name()='svg']"
  20 |     );
  21 |     this.medioPagoSelect = page.locator("select").first();
  22 |     this.cuentaInput = page.locator(
  23 |       "div[class='col-span-12 md:col-span-3'] div[class='flex w-full space-x-2 mt-1'] div:nth-child(1)"
  24 |     );
  25 |     this.montoInput = page.getByRole("textbox", { name: "0.00" });
  26 |     this.guardarCobranzaButton = page.getByRole("button", { name: "Guardar Cobranza" });
  27 |   }
  28 | 
  29 |   async fillForm(payment: PaymentData): Promise<void> {
  30 |     await this.clienteCodigoInput.fill(payment.clienteCodigo);
  31 |     await this.clienteCodigoInput.press("Enter");
  32 |     await this.page.waitForTimeout(1500);
  33 |     await this.fechaCobroInput.fill(payment.fechaCobro!);
> 34 |     await this.medioPagoSelect.selectOption({ label: payment.mediosPago[0].medioOption });
     |                                ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  35 |     await this.cuentaInput.fill(payment.mediosPago[0].cuentaContable.toString());
  36 |     await this.montoInput.fill(payment.mediosPago[0].monto.toString());
  37 |     await this.guardarCobranzaButton.click();
  38 |   }
  39 | }
```