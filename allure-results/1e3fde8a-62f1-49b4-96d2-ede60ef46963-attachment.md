# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createPayment.spec.ts >> Módulo de Cobranzas >> User must verify and interact with the newly created payment in the table
- Location: tests\createPayment.spec.ts:21:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('td').filter({ hasText: 'Goyette - Welch' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('td').filter({ hasText: 'Goyette - Welch' })

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
  - heading "Listado de Cobranzas" [level=1]
  - button "Crear Cobranza"
  - text: Desde
  - textbox "Desde": 2026-09-01
  - text: Hasta
  - textbox "Hasta": 2026-09-05
  - text: Buscar
  - textbox "Buscar":
    - /placeholder: Buscar...
    - text: "00057"
  - button "Buscar":
    - img
    - text: Buscar
  - img
  - heading "No hay cobranzas" [level=3]
  - paragraph: Empieza por crear el primer registro.
- region "Notifications Alt+T":
  - img
  - text: Cobranza guardada con éxito!
  - button "close"
  - progressbar "notification timer"
```

# Test source

```ts
  1  | import { test, expect } from "./fixtures/fixtures.js";
  2  | import { PaymentFactory } from "./factory/payment.factory.js";
  3  | 
  4  | test.describe("Módulo de Cobranzas", () => {
  5  |   test("User must successfully register a payment", async ({
  6  |     sidebar,
  7  |     paymentPage,
  8  |     page,
  9  |   }) => {
  10 |     await sidebar.goToCreatePayment();
  11 | 
  12 |     const paymentData = PaymentFactory.create();
  13 | 
  14 |     await paymentPage.fillForm(paymentData);
  15 | 
  16 |     await expect(page).toHaveURL(process.env.PAYMENT_URL!, {
  17 |       timeout: 20000,
  18 |     });
  19 |   });
  20 | 
  21 |   test("User must verify and interact with the newly created payment in the table", async ({
  22 |     sidebar,
  23 |     paymentPage,
  24 |     page,
  25 |   }) => {
  26 |     // 1. Generar dataset dinámico con Factory
  27 |     const paymentData = PaymentFactory.create();
  28 | 
  29 |     // 2. Crear la cobranza
  30 |     await sidebar.goToCreatePayment();
  31 |     await paymentPage.fillForm(paymentData);
  32 | 
  33 |     // 3. Confirmar que se redirigió al listado de cobranzas
  34 |     await expect(page).toHaveURL(process.env.PAYMENT_URL!, {
  35 |       timeout: 20000,
  36 |     });
  37 | 
  38 |     // 4. Filtrar en la tabla usando el código de cliente dinámico
  39 |     const buscarInput = page.getByRole("textbox", { name: "Buscar" });
  40 |     await buscarInput.fill(paymentData.clienteCodigo);
  41 |     await page.getByRole("button", { name: "Buscar" }).click();
  42 | 
  43 |     // 5. Localizar la fila específica asociada a los datos generados
  44 |     const filaCobranza = page.locator('td').filter({ hasText: 'Goyette - Welch' })
  45 | 
  46 |     // 6. Asertar que la fila exista en la tabla
> 47 |     await expect(filaCobranza).toBeVisible();
     |                                ^ Error: expect(locator).toBeVisible() failed
  48 | 
  49 |     // 7. Hacer clic en la fila o en la acción correspondiente
  50 |     await filaCobranza.click();
  51 |   });
  52 | });
```