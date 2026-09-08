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
Error: strict mode violation: locator('td').filter({ hasText: 'Goyette - Welch' }) resolved to 7 elements:
    1) <td class="px-3 py-4 text-sm text-gray-500 border-b border-gray-200 whitespace-nowrap">Goyette - Welch</td> aka getByRole('cell', { name: 'Goyette - Welch' }).first()
    2) <td class="px-3 py-4 text-sm text-gray-500 border-b border-gray-200 whitespace-nowrap">Goyette - Welch</td> aka getByRole('cell', { name: 'Goyette - Welch' }).nth(1)
    ...

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('td').filter({ hasText: 'Goyette - Welch' })

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
          - generic [ref=e138]:
            - heading "Listado de Cobranzas" [level=1] [ref=e140]
            - button "Crear Cobranza" [ref=e142]
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
                  - text: "00057"
                - button "Buscar" [active] [ref=e155]
          - table [ref=e163]:
            - rowgroup [ref=e164]:
              - row [ref=e165]:
                - columnheader [ref=e166]:
                  - button "ID" [ref=e167]
                - columnheader [ref=e171]:
                  - button "Nº Recibo" [ref=e172]
                - columnheader [ref=e176]:
                  - button "Fecha" [ref=e177]
                - columnheader [ref=e181]:
                  - button "Cliente" [ref=e182]
                - columnheader [ref=e186]:
                  - button "Monto Total" [ref=e187]
                - columnheader [ref=e191]:
                  - button "Estado" [ref=e192]
                - columnheader "Acciones" [ref=e196]
            - rowgroup [ref=e197]:
              - row [ref=e198] [cursor=pointer]:
                - cell "300407" [ref=e199]
                - cell "16" [ref=e200]
                - cell "05/09/2026" [ref=e201]
                - cell "Goyette - Welch" [ref=e202]
                - cell "$ 274.252,00" [ref=e203]
                - cell "Activa" [ref=e204]
                - cell [ref=e206]:
                  - generic [ref=e207]:
                    - button "Editar" [ref=e208]
                    - button "Eliminar" [ref=e211]
              - row [ref=e214] [cursor=pointer]:
                - cell "300408" [ref=e215]
                - cell "17" [ref=e216]
                - cell "05/09/2026" [ref=e217]
                - cell "Goyette - Welch" [ref=e218]
                - cell "$ 162.723,00" [ref=e219]
                - cell "Activa" [ref=e220]
                - cell [ref=e222]:
                  - generic [ref=e223]:
                    - button "Editar" [ref=e224]
                    - button "Eliminar" [ref=e227]
              - row [ref=e230] [cursor=pointer]:
                - cell "300409" [ref=e231]
                - cell "18" [ref=e232]
                - cell "05/09/2026" [ref=e233]
                - cell "Goyette - Welch" [ref=e234]
                - cell "$ 453.890,00" [ref=e235]
                - cell "Activa" [ref=e236]
                - cell [ref=e238]:
                  - generic [ref=e239]:
                    - button "Editar" [ref=e240]
                    - button "Eliminar" [ref=e243]
              - row [ref=e246] [cursor=pointer]:
                - cell "300410" [ref=e247]
                - cell "19" [ref=e248]
                - cell "05/09/2026" [ref=e249]
                - cell "Goyette - Welch" [ref=e250]
                - cell "$ 48.241,00" [ref=e251]
                - cell "Activa" [ref=e252]
                - cell [ref=e254]:
                  - generic [ref=e255]:
                    - button "Editar" [ref=e256]
                    - button "Eliminar" [ref=e259]
              - row [ref=e262] [cursor=pointer]:
                - cell "300411" [ref=e263]
                - cell "20" [ref=e264]
                - cell "05/09/2026" [ref=e265]
                - cell "Goyette - Welch" [ref=e266]
                - cell "$ 333.013,00" [ref=e267]
                - cell "Activa" [ref=e268]
                - cell [ref=e270]:
                  - generic [ref=e271]:
                    - button "Editar" [ref=e272]
                    - button "Eliminar" [ref=e275]
              - row [ref=e278] [cursor=pointer]:
                - cell "300412" [ref=e279]
                - cell "21" [ref=e280]
                - cell "05/09/2026" [ref=e281]
                - cell "Goyette - Welch" [ref=e282]
                - cell "$ 426.936,00" [ref=e283]
                - cell "Activa" [ref=e284]
                - cell [ref=e286]:
                  - generic [ref=e287]:
                    - button "Editar" [ref=e288]
                    - button "Eliminar" [ref=e291]
              - row [ref=e294] [cursor=pointer]:
                - cell "300413" [ref=e295]
                - cell "22" [ref=e296]
                - cell "05/09/2026" [ref=e297]
                - cell "Goyette - Welch" [ref=e298]
                - cell "$ 8.262,00" [ref=e299]
                - cell "Activa" [ref=e300]
                - cell [ref=e302]:
                  - generic [ref=e303]:
                    - button "Editar" [ref=e304]
                    - button "Eliminar" [ref=e307]
  - region "Notifications Alt+T":
    - generic [ref=e310]:
      - alert [ref=e311] [cursor=pointer]:
        - text: "Cliente encontrado: Goyette - Welch"
        - button "close" [ref=e315]
        - progressbar "notification timer" [ref=e320]
      - alert [ref=e321] [cursor=pointer]:
        - text: Cobranza guardada con éxito!
        - button "close" [ref=e325]
        - progressbar "notification timer" [ref=e330]
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