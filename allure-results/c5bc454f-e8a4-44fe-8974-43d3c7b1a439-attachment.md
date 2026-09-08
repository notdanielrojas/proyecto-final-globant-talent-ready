# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createInvoice.spec.ts >> Invoice Management Test Suite >> User should be able to create a new invoice successfully
- Location: tests\createInvoice.spec.ts:5:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//div//div//div//div//div//div[1]//div[2]//div[1]//div[1]//input[1]')

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
          - generic [ref=e138]:
            - heading "Listado de Facturas de Venta" [level=1] [ref=e140]
            - button "Crear Factura de Venta" [ref=e142]
          - generic [ref=e144]:
            - generic [ref=e145]:
              - generic [ref=e146]: Desde
              - textbox "Desde" [ref=e147]: 2026-09-01
            - generic [ref=e148]:
              - generic [ref=e149]: Hasta
              - textbox "Hasta" [ref=e150]: 2026-09-05
            - generic [ref=e151]:
              - generic [ref=e152]: Buscar
              - generic [ref=e153]:
                - textbox "Buscar" [ref=e154]:
                  - /placeholder: Buscar...
                - button "Buscar" [ref=e155]
          - table [ref=e163]:
            - rowgroup [ref=e164]:
              - row [ref=e165]:
                - columnheader [ref=e166]:
                  - button "Nº Factura" [ref=e167]
                - columnheader [ref=e171]:
                  - button "Fecha" [ref=e172]
                - columnheader [ref=e176]:
                  - button "Cliente" [ref=e177]
                - columnheader [ref=e181]:
                  - button "Pedido Orig." [ref=e182]
                - columnheader [ref=e186]:
                  - button "Total" [ref=e187]
                - columnheader [ref=e191]:
                  - button "Estado" [ref=e192]
                - columnheader "Acciones" [ref=e196]
            - rowgroup [ref=e197]:
              - row [ref=e198] [cursor=pointer]:
                - cell "A-00000-00000247" [ref=e199]
                - cell "05/09/2026" [ref=e200]
                - cell "Goyette - Welch" [ref=e201]
                - cell "-" [ref=e202]
                - cell "$ 1.761,15" [ref=e203]
                - cell "Pendiente" [ref=e204]
                - cell [ref=e206]:
                  - generic [ref=e207]:
                    - button "Editar" [ref=e208]
                    - button "Eliminar" [ref=e211]
              - row [ref=e214] [cursor=pointer]:
                - cell "A-00000-00000246" [ref=e215]
                - cell "02/09/2026" [ref=e216]
                - cell "Cliente Automatizacion TAE" [ref=e217]
                - cell "-" [ref=e218]
                - cell "$ 100,00" [ref=e219]
                - cell "Pendiente" [ref=e220]
                - cell [ref=e222]:
                  - generic [ref=e223]:
                    - button "Editar" [ref=e224]
                    - button "Eliminar" [ref=e227]
  - region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | import { InvoiceData } from "../factory/invoice.factory.js";
  3  | 
  4  | export default class InvoicePage {
  5  |   readonly page: Page;
  6  |   readonly clienteCodigoInput: Locator;
  7  |   readonly deliveryDateInput: Locator;
  8  |   readonly monedaSelectOption: Locator;
  9  |   readonly deliveryAddressMenu: Locator;
  10 |   readonly deliveryAddressInput: Locator;
  11 |   readonly searchArticleButton: Locator;
  12 |   readonly searchArticleCodeInput: Locator;
  13 |   readonly searchArticleCodeButton: Locator;
  14 |   readonly selectArticleResult: Locator;
  15 |   readonly guardarFacturaButton: Locator;
  16 | 
  17 |   constructor(page: Page) {
  18 |     this.page = page;
  19 |     this.clienteCodigoInput = page.locator("//div//div//div//div//div//div[1]//div[2]//div[1]//div[1]//input[1]");
  20 |     this.deliveryDateInput = page.locator('[name="delivery_date"]');
  21 |     this.monedaSelectOption = page.locator(
  22 |       "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)",
  23 |     );
  24 |     this.searchArticleButton = page.locator("td[class='px-3 py-2 whitespace-nowrap'] button[aria-label='Buscar']");
  25 |     this.searchArticleCodeInput = page.getByRole("textbox", { name: "Buscar por nombre, código..." });
  26 |     this.searchArticleCodeButton = page.locator("//button[@type='submit']");
  27 |     this.selectArticleResult = page.getByRole("cell", { name: "1377.2052.2165" });
  28 |     this.guardarFacturaButton = page.getByRole("button", { name: "Guardar Factura" });
  29 |     this.deliveryAddressMenu = page.locator('[name="delivery_address_selector"]');
  30 |     this.deliveryAddressInput = page.getByRole("textbox", { name: "Ingrese la nueva dirección de entrega" });
  31 |   }
  32 | 
  33 |   async fillForm(invoice: InvoiceData): Promise<void> {
  34 |     await this.fillClienteCodigoInput(invoice.clienteCodigo);
  35 |     await this.fillDeliveryDateInput(invoice.deliveryDate);
  36 |     await this.fillDeliveryAddressInput(invoice.deliveryAddress);
  37 |     await this.selectMonedaOption(invoice.monedaOption);
  38 |     await this.searchArticle(invoice.items[0].codigoArticulo);
  39 |     await this.guardarFactura();
  40 |   }
  41 | 
  42 |   async fillClienteCodigoInput(clienteCodigo: string): Promise<void> {
> 43 |     await this.clienteCodigoInput.fill(clienteCodigo);
     |                                   ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  44 |     await this.clienteCodigoInput.press("Enter");
  45 |     await this.page.waitForTimeout(2000);
  46 |   }
  47 | 
  48 |   async fillDeliveryDateInput(deliveryDate?: string): Promise<void> {
  49 |     if (deliveryDate) {
  50 |       await this.deliveryDateInput.fill(deliveryDate);
  51 |     }
  52 |   }
  53 | 
  54 |   async selectMonedaOption(monedaOption?: string): Promise<void> {
  55 |     if (!monedaOption) {
  56 |       return;
  57 |     }
  58 | 
  59 |     await this.monedaSelectOption.fill(monedaOption);
  60 |     await this.monedaSelectOption.press("Enter");
  61 |     await this.page.waitForTimeout(2000);
  62 |   }
  63 | 
  64 |   async fillDeliveryAddressInput(deliveryAddress?: string): Promise<void> {
  65 |     if (deliveryAddress) {
  66 |       await this.selectDeliveryAddressOption();
  67 |       await this.selectDeliveryAddressInput(deliveryAddress);
  68 |     }
  69 |   }
  70 | 
  71 |   async selectDeliveryAddressOption(): Promise<void> {
  72 |     await this.deliveryAddressMenu.click();
  73 |   }
  74 | 
  75 |   async selectDeliveryAddressInput(deliveryAddress: string): Promise<void> {
  76 |     await this.deliveryAddressInput.fill(deliveryAddress);
  77 |     await this.deliveryAddressInput.press("Enter");
  78 |     await this.page.waitForTimeout(2000);
  79 |   }
  80 | 
  81 |   async searchArticle(codigoArticulo: string): Promise<void> {
  82 |     await this.searchArticleButton.click();
  83 |     await this.searchArticleCodeInput.fill(codigoArticulo);
  84 |     await this.searchArticleCodeButton.click();
  85 |     await this.selectArticleResult.click();
  86 |   }
  87 | 
  88 |   async guardarFactura(): Promise<void> {
  89 |     await this.guardarFacturaButton.click();
  90 |   }
  91 | }
  92 | 
```