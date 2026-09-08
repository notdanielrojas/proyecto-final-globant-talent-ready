# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\e2e.web.spec.ts >> Suite Web E2E - Flujo Completo de Ventas ERP >> 3. Emitir una nueva Factura asociando Cliente y Artículo
- Location: tests\e2e\e2e.web.spec.ts:29:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[name="delivery_address_selector"]')
    - locator resolved to <select disabled name="delivery_address_selector" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - element is not enabled
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - element is not enabled
    - retrying select option action
      - waiting 100ms
    32 × waiting for element to be visible and enabled
       - element is not enabled
     - retrying select option action
       - waiting 500ms

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
          - heading "Crear Factura de Venta" [level=1] [ref=e138]
          - generic [ref=e139]:
            - generic [ref=e140]:
              - generic [ref=e141]:
                - generic [ref=e142]: Pedido Origen
                - generic [ref=e143]:
                  - textbox "Código..." [ref=e145]
                  - generic [ref=e146]:
                    - textbox "Nombre..." [ref=e147]
                    - button "Buscar" [ref=e148]
              - generic [ref=e151]:
                - generic [ref=e152]: Cliente (*)
                - generic [ref=e153]:
                  - textbox "Código..." [ref=e155]: "11840"
                  - generic [ref=e156]:
                    - textbox "Nombre..." [ref=e157]
                    - button "Limpiar" [ref=e158]
                    - button "Buscar" [ref=e161]
              - generic [ref=e164]:
                - generic [ref=e165]: Vendedor
                - generic [ref=e166]:
                  - textbox "Código..." [ref=e168]: "01"
                  - generic [ref=e169]:
                    - textbox "Nombre..." [ref=e170]: VENDEDOR 01
                    - button "Limpiar" [ref=e171]
                    - button "Buscar" [ref=e174]
            - generic [ref=e177]:
              - generic [ref=e178]:
                - generic [ref=e179]: Serie (*)
                - combobox [ref=e180]:
                  - option "A" [selected]
                  - option "B"
                  - option "C"
              - generic [ref=e181]:
                - generic [ref=e182]: Fecha Factura (*)
                - textbox [ref=e183]: 2026-09-08
              - generic [ref=e184]:
                - generic [ref=e185]: Fecha Entrega
                - textbox [active] [ref=e186]: 2027-01-29
            - generic [ref=e187]:
              - generic [ref=e188]:
                - generic [ref=e189]: Comprador
                - generic [ref=e190]:
                  - textbox "Código..." [ref=e192]
                  - generic [ref=e193]:
                    - textbox "Nombre..." [ref=e194]
                    - button "Buscar" [ref=e195]
              - generic [ref=e198]:
                - generic [ref=e199]: Transporte
                - generic [ref=e200]:
                  - textbox "Código..." [ref=e202]
                  - generic [ref=e203]:
                    - textbox "Nombre..." [ref=e204]
                    - button "Buscar" [ref=e205]
              - generic [ref=e208]:
                - generic [ref=e209]: Moneda
                - generic [ref=e210]:
                  - textbox "Código..." [ref=e212]
                  - generic [ref=e213]:
                    - textbox "Nombre..." [ref=e214]
                    - button "Buscar" [ref=e215]
              - generic [ref=e218]:
                - generic [ref=e219]: Tipo de cambio
                - generic [ref=e220]:
                  - textbox [ref=e221]: "1"
                  - generic [ref=e222]:
                    - checkbox "Mostrar valor en dolares" [ref=e223]
                    - generic [ref=e224]: Mostrar valor en dolares
            - generic [ref=e225]:
              - generic [ref=e226]:
                - generic [ref=e227]: Nº Orden Compra
                - textbox [ref=e228]
              - generic [ref=e230]:
                - generic [ref=e231]: Dirección de Entrega *
                - combobox [disabled] [ref=e232]:
                  - option "Selecciona una dirección" [selected]
                  - option "--- Ingresar Otra Dirección ---"
          - generic [ref=e233]:
            - heading "Items de la Factura" [level=3] [ref=e235]
            - table [ref=e237]:
              - rowgroup [ref=e238]:
                - row [ref=e239]:
                  - columnheader "Artículo" [ref=e240]
                  - columnheader "Cant." [ref=e241]
                  - columnheader "Stock" [ref=e242]
                  - columnheader "P. Unit. ($)" [ref=e243]
                  - columnheader "Subtotal" [ref=e244]
                  - columnheader "Utilidad" [ref=e245]
                  - columnheader "Total Línea" [ref=e246]
                  - columnheader "Acc." [ref=e247]
              - rowgroup
            - button "Agregar Ítem" [ref=e248]
          - generic [ref=e251]:
            - generic [ref=e253]:
              - generic [ref=e254]: "Observaciones:"
              - textbox [ref=e255]
            - generic [ref=e257]:
              - heading "Impuestos Globales Aplicados" [level=4] [ref=e258]
              - paragraph [ref=e259]: No hay impuestos globales aplicados.
            - generic [ref=e261]:
              - generic [ref=e262]:
                - generic [ref=e263]: "Subtotal (Items):"
                - generic [ref=e264]: $ 0,00
              - generic [ref=e265]:
                - generic [ref=e266]: "Base Imponible:"
                - generic [ref=e267]: $ 0,00
              - generic [ref=e268]:
                - generic [ref=e269]: "Impuestos (Global):"
                - generic [ref=e270]: + $ 0,00
              - generic [ref=e271]:
                - generic [ref=e272]: "Total Final:"
                - generic [ref=e273]: $ 0,00
          - generic [ref=e274]:
            - button "Cancelar" [ref=e275]
            - button "Guardar Factura" [ref=e276]
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
  11 |   readonly vendedorInput: Locator;
  12 |   readonly addNewItemButton: Locator;
  13 |   readonly guardarFacturaButton: Locator;
  14 |   readonly articleCodeInput: Locator;
  15 | 
  16 |   constructor(page: Page) {
  17 |     this.page = page;
  18 | 
  19 |     this.clienteCodigoInput = page.locator(
  20 |       "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)",
  21 |     );
  22 |     this.deliveryDateInput = page.locator('[name="delivery_date"]');
  23 |     this.deliveryAddressMenu = page.locator('[name="delivery_address_selector"]');
  24 |     this.deliveryAddressInput = page.getByRole("textbox", {
  25 |       name: "Ingrese la nueva dirección de entrega",
  26 |     });
  27 |     this.monedaSelectOption = page.locator(
  28 |       "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)",
  29 |     );
  30 |     this.vendedorInput = page.locator(
  31 |       "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)",
  32 |     );
  33 |     this.addNewItemButton = page.getByRole("button", { name: "Agregar Ítem" });
  34 |     this.articleCodeInput = page.locator("tbody div[class='flex w-full space-x-2 mt-1'] div:nth-child(1) input");
  35 |     this.guardarFacturaButton = page.getByRole("button", { name: "Guardar Factura" });
  36 |   }
  37 | 
  38 |   async fillForm(invoice: InvoiceData): Promise<void> {
  39 |     await this.fillClienteCodigoInput(invoice.clienteCodigo);
  40 |     await this.fillVendedorCodigoInput(invoice.vendedorOption);
  41 |     await this.fillDeliveryDateInput(invoice.deliveryDate);
  42 |     await this.fillDeliveryAddressInput(invoice.deliveryAddress);
  43 |     await this.selectMonedaOption(invoice.monedaOption);
  44 | 
  45 |     const articuloCodigo = invoice.items?.[0]?.codigoArticulo;
  46 |     if (articuloCodigo) {
  47 |       await this.addNewItemButton.click();
  48 |       await this.fillArticleCodeInput(articuloCodigo);
  49 |     }
  50 | 
  51 |     await this.guardarFacturaButton.click();
  52 |   }
  53 | 
  54 |   async fillClienteCodigoInput(clienteCodigo: string): Promise<void> {
  55 |     await this.clienteCodigoInput.fill(clienteCodigo);
  56 |     await this.clienteCodigoInput.press("Enter");
  57 |     await this.page.waitForTimeout(2000);
  58 |   }
  59 | 
  60 |   async fillDeliveryDateInput(deliveryDate?: string): Promise<void> {
  61 |     if (!deliveryDate) return;
  62 |     await this.deliveryDateInput.fill(deliveryDate);
  63 |   }
  64 | 
  65 |   async selectMonedaOption(monedaOption?: string): Promise<void> {
  66 |     if (!monedaOption) return;
  67 |     await this.monedaSelectOption.fill(monedaOption);
  68 |     await this.monedaSelectOption.press("Enter");
  69 |     await this.page.waitForTimeout(2000);
  70 |   }
  71 | 
  72 |   async fillDeliveryAddressInput(deliveryAddress?: string): Promise<void> {
  73 |     if (!deliveryAddress) return;
  74 |     await this.deliveryAddressMenu.waitFor({ state: "visible" });
> 75 |     await this.deliveryAddressMenu.selectOption({
     |                                    ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  76 |       label: "--- Ingresar Otra Dirección ---",
  77 |     });
  78 |     await this.deliveryAddressInput.waitFor({ state: "visible" });
  79 |     await this.deliveryAddressInput.fill(deliveryAddress);
  80 |     await this.deliveryAddressInput.press("Enter");
  81 |   }
  82 | 
  83 |   async fillVendedorCodigoInput(vendedorOption?: string): Promise<void> {
  84 |     if (!vendedorOption) return;
  85 |     await this.vendedorInput.fill(vendedorOption);
  86 |     await this.vendedorInput.press("Enter");
  87 |     await this.page.waitForTimeout(2000);
  88 |   }
  89 | 
  90 |   async fillArticleCodeInput(codigoArticulo: string): Promise<void> {
  91 |     await this.articleCodeInput.fill(codigoArticulo);
  92 |     await this.articleCodeInput.press("Enter");
  93 |     await this.page.waitForTimeout(2000);
  94 |   }
  95 | }
  96 | 
```