# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\e2e.web.spec.ts >> Suite Web E2E - Flujo Completo de Ventas ERP >> 1. Crear un nuevo Cliente
- Location: tests\e2e\e2e.web.spec.ts:11:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://imcoarca.leonardojose.dev/clientes/nuevo"
Received: "https://imcoarca.leonardojose.dev/clientes"

Call log:
  - Expect "toHaveURL" with timeout 20000ms
    42 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://imcoarca.leonardojose.dev/clientes"
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
  - heading "Listado de Clientes" [level=1]
  - button "Crear Cliente"
  - text: Buscar
  - textbox "Buscar":
    - /placeholder: Buscar...
  - button "Buscar":
    - img
    - text: Buscar
  - table:
    - rowgroup:
      - row "Código Cliente Nombre o Razón Social CUIT Teléfono Email Persona de Contacto Rubro Zona Ley Exportación TDF Acciones":
        - columnheader "Código Cliente":
          - button "Código Cliente":
            - text: Código Cliente
            - img
        - columnheader "Nombre o Razón Social":
          - button "Nombre o Razón Social":
            - text: Nombre o Razón Social
            - img
        - columnheader "CUIT":
          - button "CUIT":
            - text: CUIT
            - img
        - columnheader "Teléfono":
          - button "Teléfono":
            - text: Teléfono
            - img
        - columnheader "Email":
          - button "Email":
            - text: Email
            - img
        - columnheader "Persona de Contacto":
          - button "Persona de Contacto":
            - text: Persona de Contacto
            - img
        - columnheader "Rubro":
          - button "Rubro":
            - text: Rubro
            - img
        - columnheader "Zona":
          - button "Zona":
            - text: Zona
            - img
        - columnheader "Ley Exportación TDF":
          - button "Ley Exportación TDF":
            - text: Ley Exportación TDF
            - img
        - columnheader "Acciones"
    - rowgroup:
      - row "00001 Cliente QA Editado 804790273 34-20268959-2 - - - - - No":
        - cell "00001"
        - cell "Cliente QA Editado 804790273"
        - cell "34-20268959-2"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "No"
        - cell:
          - button "Editar":
            - img
          - button "Eliminar":
            - img
      - row "00002 Cliente Automatizacion TAE 30-99999999-5 - - - - - No":
        - cell "00002"
        - cell "Cliente Automatizacion TAE"
        - cell "30-99999999-5"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "No"
        - cell:
          - button "Editar":
            - img
          - button "Eliminar":
            - img
      - row "00003 Cliente API Bruno TAE Actualizado desde Bruno 30-88888888-4 - - - - - No":
        - cell "00003"
        - cell "Cliente API Bruno TAE Actualizado desde Bruno"
        - cell "30-88888888-4"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "No"
        - cell:
          - button "Editar":
            - img
          - button "Eliminar":
            - img
      - row "00004 Cliente Prueba TAE 20123456789 +56912345678 cliente.prueba@testing.com - - - No":
        - cell "00004"
        - cell "Cliente Prueba TAE"
        - cell "20123456789"
        - cell "+56912345678"
        - cell "cliente.prueba@testing.com"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "No"
        - cell:
          - button "Editar":
            - img
          - button "Eliminar":
            - img
      - row "00006 Cliente Prueba TAE 20123456789 +56912345678 cliente.prueba@testing.com - - - No":
        - cell "00006"
        - cell "Cliente Prueba TAE"
        - cell "20123456789"
        - cell "+56912345678"
        - cell "cliente.prueba@testing.com"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "No"
        - cell:
          - button "Editar":
            - img
          - button "Eliminar":
            - img
      - row "00007 Cliente Prueba 1788092374004 20123456789 +56912345678 cliente_1788092374004@testing.com - - - No":
        - cell "00007"
        - cell "Cliente Prueba 1788092374004"
        - cell "20123456789"
        - cell "+56912345678"
        - cell "cliente_1788092374004@testing.com"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "No"
        - cell:
          - button "Editar":
            - img
          - button "Eliminar":
            - img
      - row "00008 Cliente Prueba 1788092378870 20123456789 +56912345678 cliente_1788092378870@testing.com - - - No":
        - cell "00008"
        - cell "Cliente Prueba 1788092378870"
        - cell "20123456789"
        - cell "+56912345678"
        - cell "cliente_1788092378870@testing.com"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "No"
        - cell:
          - button "Editar":
            - img
          - button "Eliminar":
            - img
      - row "00009 Cliente Prueba 1788092383109 20123456789 +56912345678 cliente_1788092383109@testing.com - - - No":
        - cell "00009"
        - cell "Cliente Prueba 1788092383109"
        - cell "20123456789"
        - cell "+56912345678"
        - cell "cliente_1788092383109@testing.com"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "No"
        - cell:
          - button "Editar":
            - img
          - button "Eliminar":
            - img
      - row "00010 Cliente Test UI 1788094329470 20300000001 +56912345678 cliente_1788094330398@testing.com - - - No":
        - cell "00010"
        - cell "Cliente Test UI 1788094329470"
        - cell "20300000001"
        - cell "+56912345678"
        - cell "cliente_1788094330398@testing.com"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "No"
        - cell:
          - button "Editar":
            - img
          - button "Eliminar":
            - img
      - row "00011 Cliente Test UI 1788094493852 20300000001 +56912345678 cliente_1788094494795@testing.com - - - No":
        - cell "00011"
        - cell "Cliente Test UI 1788094493852"
        - cell "20300000001"
        - cell "+56912345678"
        - cell "cliente_1788094494795@testing.com"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "No"
        - cell:
          - button "Editar":
            - img
          - button "Eliminar":
            - img
      - row "00012 Cliente Test UI 1788094664283 20300000001 +56912345678 cliente_1788094665209@testing.com - - - No":
        - cell "00012"
        - cell "Cliente Test UI 1788094664283"
        - cell "20300000001"
        - cell "+56912345678"
        - cell "cliente_1788094665209@testing.com"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "No"
        - cell:
          - button "Editar":
            - img
          - button "Eliminar":
            - img
      - row "00013 Cliente E2E Playwright 1788118629269 20-43599888-8 - - - - - No":
        - cell "00013"
        - cell "Cliente E2E Playwright 1788118629269"
        - cell "20-43599888-8"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "No"
        - cell:
          - button "Editar":
            - img
          - button "Eliminar":
            - img
      - row "00014 Cliente E2E Playwright 1788118755271 20-88811667-3 - - - - - No":
        - cell "00014"
        - cell "Cliente E2E Playwright 1788118755271"
        - cell "20-88811667-3"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "No"
        - cell:
          - button "Editar":
            - img
          - button "Eliminar":
            - img
      - row "00015 Cliente E2E Playwright 1788119060150 20-10239118-8 - - - - - No":
        - cell "00015"
        - cell "Cliente E2E Playwright 1788119060150"
        - cell "20-10239118-8"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "No"
        - cell:
          - button "Editar":
            - img
          - button "Eliminar":
            - img
      - row "00017 Cliente E2E Playwright 1788120269551 20-61532314-5 - - - - - No":
        - cell "00017"
        - cell "Cliente E2E Playwright 1788120269551"
        - cell "20-61532314-5"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "-"
        - cell "No"
        - cell:
          - button "Editar":
            - img
          - button "Eliminar":
            - img
  - navigation "Pagination":
    - paragraph: Mostrando 1 a 15 de 148 resultados
    - button [disabled]:
      - img
    - button "1"
    - button "2"
    - button "3"
    - button "4"
    - button "5"
    - button "6"
    - button "7"
    - button "8"
    - button "9"
    - button "10"
    - button:
      - img
- region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { test, expect } from "../fixtures/fixtures.js";
  2  | import { ClientFactory } from "../factory/client.factory.js";
  3  | import { ArticleFactory } from "../factory/article.factory.js";
  4  | import { InvoiceFactory } from "../factory/invoice.factory.js";
  5  | import { PaymentFactory } from "../factory/payment.factory.js";
  6  | 
  7  | test.describe.serial("Suite Web E2E - Flujo Completo de Ventas ERP", () => {
  8  |   let createdClientCode: string;
  9  |   let createdArticleCode: string;
  10 | 
  11 |   test("1. Crear un nuevo Cliente", async ({ clientsPage, sidebar, page }) => {
  12 |     const clientData = ClientFactory.create();
  13 | 
  14 |     await sidebar.goToCreateClient();
  15 | 
  16 |     // 1. Iniciar la escucha del POST de creación de cliente antes de enviar el formulario
  17 |     const responsePromise = page.waitForResponse(
  18 |       (res) => res.request().method() === "POST" && (res.status() === 200 || res.status() === 201),
  19 |     );
  20 | 
  21 |     // 2. Enviar el formulario
  22 |     await clientsPage.fillForm(clientData);
  23 | 
  24 |     // 3. Capturar la respuesta JSON y extraer 'customer_code' desde data
  25 |     const response = await responsePromise;
  26 |     const body = await response.json();
  27 | 
  28 |     // Rescatar 'customer_code' dinámico (ej: "00177")
  29 |     createdClientCode = body.data?.customer_code;
  30 | 
> 31 |     await expect(clientsPage.page).toHaveURL(process.env.CLIENT_URL!, {
     |                                    ^ Error: expect(page).toHaveURL(expected) failed
  32 |       timeout: 20000,
  33 |     });
  34 |   });
  35 | 
  36 |   test("2. Crear un nuevo Artículo", async ({ articlesPage, sidebar, page }) => {
  37 |     const articleData = ArticleFactory.create();
  38 | 
  39 |     await sidebar.goToCreateArticle();
  40 | 
  41 |     const responsePromise = page.waitForResponse(
  42 |       (res) => res.request().method() === "POST" && (res.status() === 200 || res.status() === 201),
  43 |     );
  44 | 
  45 |     await articlesPage.fillForm(articleData);
  46 | 
  47 |     const response = await responsePromise;
  48 |     const body = await response.json();
  49 | 
  50 |     // Extraer el código del artículo devuelto por el backend
  51 |     createdArticleCode = body.data?.product_code || body.data?.code || body.data?.id;
  52 | 
  53 |     await expect(page).toHaveURL(process.env.ARTICLE_URL!, { timeout: 20000 });
  54 |   });
  55 | 
  56 |   test("3. Emitir una nueva Factura asociando Cliente y Artículo", async ({ invoicePage, sidebar, page }) => {
  57 |     const invoiceData = InvoiceFactory.create({
  58 |       clienteCodigo: createdClientCode,
  59 |       items: [
  60 |         {
  61 |           codigoArticulo: createdArticleCode,
  62 |           cantidad: 1, // <--- Agregar la cantidad requerida por la interfaz
  63 |         },
  64 |       ],
  65 |     });
  66 | 
  67 |     await sidebar.goToCreateInvoice();
  68 |     await invoicePage.fillForm(invoiceData);
  69 | 
  70 |     await expect(page).toHaveURL(process.env.INVOICE_URL!, {
  71 |       timeout: 20000,
  72 |     });
  73 |   });
  74 | 
  75 |   test("4. Registrar una nueva Cobranza", async ({ paymentPage, sidebar, page }) => {
  76 |     const paymentData = PaymentFactory.create({
  77 |       clienteCodigo: createdClientCode, // Recibe "00177"
  78 |     });
  79 | 
  80 |     await sidebar.goToCreatePayment();
  81 |     await paymentPage.fillForm(paymentData);
  82 | 
  83 |     await expect(page).toHaveURL(process.env.PAYMENT_URL!, {
  84 |       timeout: 20000,
  85 |     });
  86 |   });
  87 | });
  88 | 
```