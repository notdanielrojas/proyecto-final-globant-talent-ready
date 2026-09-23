# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\e2e\e2e.web.spec.ts >> Web E2E Suite - Complete ERP Sales Flow >> 3. Issue a new Invoice linking Client and Article
- Location: tests\ui\e2e\e2e.web.spec.ts:51:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://imcoarca.leonardojose.dev/facturas-de-venta"
Received: "https://imcoarca.leonardojose.dev/facturas-de-venta/nuevo"

Call log:
  - Expect "toHaveURL" with timeout 20000ms
    34 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://imcoarca.leonardojose.dev/facturas-de-venta/nuevo"
  - Test timeout of 30000ms exceeded.

```

```yaml
- complementary:
  - img "Logo"
  - navigation:
    - searchbox "Buscar en el menú"
    - list:
      - listitem:
        - link "Dashboard":
          - /url: /dashboard
          - img
          - text: Dashboard
      - listitem:
        - button "Gestión de Clientes":
          - img
          - text: Gestión de Clientes
          - img
        - list:
          - listitem:
            - link "Prospectos":
              - /url: /leads
              - img
              - text: Prospectos
          - listitem:
            - link "Clientes":
              - /url: /clientes
              - img
              - text: Clientes
          - listitem:
            - link "Facturas de Venta":
              - /url: /facturas-de-venta
              - img
              - text: Facturas de Venta
          - listitem:
            - link "Notas de Crédito":
              - /url: /notas-credito
              - img
              - text: Notas de Crédito
          - listitem:
            - link "Notas Financieras":
              - /url: /notas-financieras
              - img
              - text: Notas Financieras
          - listitem:
            - link "Pedidos de Venta":
              - /url: /pedidos-de-venta
              - img
              - text: Pedidos de Venta
          - listitem:
            - link "Autorizar pedidos":
              - /url: /autorizacion-pedidos
              - img
              - text: Autorizar pedidos
          - listitem:
            - link "Cobranzas":
              - /url: /cobranzas
              - img
              - text: Cobranzas
          - listitem:
            - link "Remitos":
              - /url: /remitos
              - img
              - text: Remitos
          - listitem:
            - link "Vendedores":
              - /url: /vendedores
              - img
              - text: Vendedores
          - listitem:
            - link "Compradores":
              - /url: /compradores
              - img
              - text: Compradores
      - listitem:
        - button "Gestión de Proveedores":
          - img
          - text: Gestión de Proveedores
          - img
      - listitem:
        - button "Inventario":
          - img
          - text: Inventario
          - img
      - listitem:
        - button "Finanzas":
          - img
          - text: Finanzas
          - img
      - listitem:
        - button "Configuración":
          - img
          - text: Configuración
          - img
      - listitem:
        - link "Reportes":
          - /url: /reportes
          - img
          - text: Reportes
  - button "Contraer"
- banner:
  - button "Cerrar Sesión"
- main:
  - heading "Crear Factura de Venta" [level=1]
  - text: Pedido Origen
  - textbox "Código..."
  - textbox "Nombre..."
  - button "Buscar":
    - img
  - text: Cliente (*)
  - textbox "Código...": "00324"
  - textbox "Nombre...": Barrows, Kuphal and Fisher
  - button "Limpiar":
    - img
  - button "Buscar":
    - img
  - text: Vendedor
  - textbox "Código...": "01"
  - textbox "Nombre...": VENDEDOR 01
  - button "Limpiar":
    - img
  - button "Buscar":
    - img
  - text: Serie (*)
  - combobox:
    - option "A" [selected]
    - option "B"
    - option "C"
  - text: Fecha Factura (*)
  - textbox: 2026-09-23
  - text: Fecha Entrega
  - textbox: 2026-11-05
  - text: Comprador
  - textbox "Código..."
  - textbox "Nombre..."
  - button "Buscar":
    - img
  - text: Transporte
  - textbox "Código..."
  - textbox "Nombre..."
  - button "Buscar":
    - img
  - text: Moneda
  - textbox "Código...": "01"
  - textbox "Nombre...": PESOS ARGENTINOS
  - button "Limpiar":
    - img
  - button "Buscar":
    - img
  - text: Tipo de cambio
  - textbox: "1535"
  - checkbox "Mostrar valor en dolares"
  - text: Mostrar valor en dolares Nº Orden Compra
  - textbox
  - text: Dirección de Entrega *
  - combobox:
    - option "Selecciona una dirección"
    - option "--- Ingresar Otra Dirección ---" [selected]
  - textbox "Ingrese la nueva dirección de entrega": 94770 Kling Center
  - heading "Items de la Factura" [level=3]
  - table:
    - rowgroup:
      - row "Artículo Cant. Stock P. Unit. ($) Subtotal Utilidad Total Línea Acc.":
        - columnheader "Artículo"
        - columnheader "Cant."
        - columnheader "Stock"
        - columnheader "P. Unit. ($)"
        - columnheader "Subtotal"
        - columnheader "Utilidad"
        - columnheader "Total Línea"
        - columnheader "Acc."
    - rowgroup:
      - row "1176.3923.0440 Soft Concrete Computer Limpiar Buscar 1 338 682.15 $ 682,15 1,57 % $ 682,15":
        - cell "1176.3923.0440 Soft Concrete Computer Limpiar Buscar":
          - textbox "Código...": 1176.3923.0440
          - textbox "Nombre...": Soft Concrete Computer
          - button "Limpiar":
            - img
          - button "Buscar":
            - img
        - cell "1":
          - paragraph:
            - textbox: "1"
        - cell "338"
        - cell "682.15":
          - textbox: "682.15"
        - cell "$ 682,15"
        - cell "1,57 %"
        - cell "$ 682,15"
        - cell:
          - button "Ver historial de precios":
            - img
          - button "Ver historial de costos":
            - img
          - button "Eliminar ítem":
            - img
  - button "Agregar Ítem":
    - img
    - text: Agregar Ítem
  - text: "Observaciones:"
  - textbox
  - heading "Impuestos Globales Aplicados" [level=4]
  - paragraph: No hay impuestos globales aplicados.
  - text: "Subtotal (Items): $ 682,15 Base Imponible: $ 682,15 Impuestos (Global): + $ 0,00 Total Final: $ 682,15"
  - button "Cancelar"
  - button "Guardar Factura":
    - img
    - text: Guardar Factura
  - heading "Autorización Requerida" [level=3]
  - paragraph: Hay 1 ítem(s) con una utilidad menor al 20%. Se requiere autorización de supervisor.
  - text: Clave de Supervisor
  - textbox "Ingrese la clave..."
  - button "Cancelar"
  - button "Autorizar"
- region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { test, expect } from "../../../fixtures/fixtures.js";
  2  | import { ClientFactory } from "../../../factory/client.factory.js";
  3  | import { ArticleFactory } from "../../../factory/article.factory.js";
  4  | import { InvoiceFactory } from "../../../factory/invoice.factory.js";
  5  | import { PaymentFactory } from "../../../factory/payment.factory.js";
  6  | 
  7  | test.describe.serial("Web E2E Suite - Complete ERP Sales Flow", () => {
  8  |   let createdClientCode: string;
  9  |   let createdArticleCode: string;
  10 | 
  11 |   test("1. Create a new Client", async ({ clientsPage, sidebar, page }) => {
  12 |     const clientData = ClientFactory.create();
  13 | 
  14 |     await sidebar.goToCreateClient();
  15 | 
  16 |     const responsePromise = page.waitForResponse(
  17 |       (res) => res.request().method() === "POST" && (res.status() === 200 || res.status() === 201),
  18 |     );
  19 | 
  20 |     await clientsPage.fillForm(clientData);
  21 | 
  22 |     const response = await responsePromise;
  23 |     const body = await response.json();
  24 | 
  25 |     createdClientCode = body.data?.customer_code;
  26 | 
  27 |     await expect(clientsPage.page).toHaveURL(process.env.CLIENT_URL!, {
  28 |       timeout: 20000,
  29 |     });
  30 |   });
  31 | 
  32 |   test("2. Create a new Article", async ({ articlesPage, sidebar, page }) => {
  33 |     const articleData = ArticleFactory.create();
  34 | 
  35 |     await sidebar.goToCreateArticle();
  36 | 
  37 |     const responsePromise = page.waitForResponse(
  38 |       (res) => res.request().method() === "POST" && (res.status() === 200 || res.status() === 201),
  39 |     );
  40 | 
  41 |     await articlesPage.fillForm(articleData);
  42 | 
  43 |     const response = await responsePromise;
  44 |     const body = await response.json();
  45 | 
  46 |     createdArticleCode = body.data?.sku || body.data?.product_code;
  47 | 
  48 |     await expect(page).toHaveURL(process.env.ARTICLE_URL!, { timeout: 20000 });
  49 |   });
  50 | 
  51 |   test("3. Issue a new Invoice linking Client and Article", async ({ invoicePage, sidebar, page }) => {
  52 |     const invoiceData = InvoiceFactory.create({
  53 |       clienteCodigo: createdClientCode,
  54 |       items: [
  55 |         {
  56 |           codigoArticulo: createdArticleCode,
  57 |           cantidad: 1,
  58 |         },
  59 |       ],
  60 |     });
  61 | 
  62 |     await sidebar.goToCreateInvoice();
  63 |     await invoicePage.fillForm(invoiceData);
  64 | 
> 65 |     await expect(page).toHaveURL(process.env.INVOICE_URL!, {
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  66 |       timeout: 20000,
  67 |     });
  68 |   });
  69 | 
  70 |   test("4. Register a new Payment", async ({ paymentPage, sidebar, page }) => {
  71 |     const paymentData = PaymentFactory.create({
  72 |       clienteCodigo: createdClientCode,
  73 |     });
  74 | 
  75 |     await sidebar.goToCreatePayment();
  76 |     await paymentPage.fillForm(paymentData);
  77 | 
  78 |     await expect(page).toHaveURL(process.env.PAYMENT_URL!, {
  79 |       timeout: 20000,
  80 |     });
  81 |   });
  82 | });
```