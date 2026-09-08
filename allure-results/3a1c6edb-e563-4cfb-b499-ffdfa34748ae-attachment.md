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
Error: expect(page).toHaveURL(expected) failed

Expected: "https://imcoarca.leonardojose.dev/facturas/nuevo"
Received: "https://imcoarca.leonardojose.dev/facturas-de-venta/nuevo"

Call log:
  - Expect "toHaveURL" with timeout 20000ms
    14 × locator resolved to <html lang="en">…</html>
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
  - textbox "Código...": "00057"
  - textbox "Nombre...": Goyette - Welch
  - button "Limpiar":
    - img
  - button "Buscar":
    - img
  - text: Vendedor
  - textbox "Código..."
  - textbox "Nombre..."
  - button "Buscar":
    - img
  - text: Serie (*)
  - combobox:
    - option "A" [selected]
    - option "B"
    - option "C"
  - text: Fecha Factura (*)
  - textbox: 2026-09-05
  - text: Fecha Entrega
  - textbox: 2026-09-15
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
  - textbox: "1530"
  - checkbox "Mostrar valor en dolares"
  - text: Mostrar valor en dolares Nº Orden Compra
  - textbox
  - text: Dirección de Entrega *
  - combobox:
    - option "Selecciona una dirección"
    - option "--- Ingresar Otra Dirección ---" [selected]
  - textbox "Ingrese la nueva dirección de entrega": Suite 418 37083 Gust Crest Bayerstead Florida 85787
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
      - row "1377.2052.2165 Sleek Aluminum Table Limpiar Buscar 1 459 1761.15 $ 1.761,15 391,82 % $ 1.761,15":
        - cell "1377.2052.2165 Sleek Aluminum Table Limpiar Buscar":
          - textbox "Código...": 1377.2052.2165
          - textbox "Nombre...": Sleek Aluminum Table
          - button "Limpiar":
            - img
          - button "Buscar":
            - img
        - cell "1":
          - paragraph:
            - textbox: "1"
        - cell "459"
        - cell "1761.15":
          - textbox: "1761.15"
        - cell "$ 1.761,15"
        - cell "391,82 %"
        - cell "$ 1.761,15"
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
  - text: "Subtotal (Items): $ 1.761,15 Base Imponible: $ 1.761,15 Impuestos (Global): + $ 0,00 Total Final: $ 1.761,15"
  - button "Cancelar"
  - button "Guardar Factura":
    - img
    - text: Guardar Factura
- region "Notifications Alt+T":
  - alert:
    - img
    - text: Cliente, Vendedor y Moneda son obligatorios.
    - button "close"
    - progressbar "notification timer"
```

# Test source

```ts
  1  | import { test, expect } from "./fixture/fixtures.js";
  2  | import { InvoiceData, InvoiceFactory } from "./factory/invoice.factory.js";
  3  | 
  4  | test.describe("Invoice Management Test Suite", () => {
  5  |   test("User should be able to create a new invoice successfully", async ({ invoicePage, sidebar }) => {
  6  |     const invoiceData: InvoiceData = InvoiceFactory.create();
  7  |     await sidebar.goToCreateInvoice();
  8  |     await invoicePage.fillForm(invoiceData);
> 9  |     await expect(invoicePage.page).toHaveURL(process.env.INVOICE_URL!, {
     |                                    ^ Error: expect(page).toHaveURL(expected) failed
  10 |       timeout: 20000,
  11 |     });
  12 |   });
  13 | });
```