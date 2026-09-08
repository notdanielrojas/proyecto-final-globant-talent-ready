# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createClient.spec.ts >> Client Management Test Suite >> User should be able to create a new client successfully
- Location: tests\createClient.spec.ts:5:3

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link') resolved to 2 elements:
    1) <a href="/dashboard" aria-current="page" class="flex items-center p-2 rounded-md transition-colors duration-200 justify-center bg-indigo-600">…</a> aka getByRole('link').first()
    2) <a href="/reportes" class="flex items-center p-2 rounded-md transition-colors duration-200 justify-center hover:bg-gray-700">…</a> aka getByRole('link').nth(1)

Call log:
  - waiting for getByRole('link')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - complementary [ref=e4]:
      - img "Logo" [ref=e6]
      - navigation [ref=e7]:
        - button "Buscar en el menú" [ref=e9] [cursor=pointer]
        - list [ref=e12]:
          - listitem [ref=e13]:
            - link [ref=e14]:
              - /url: /dashboard
          - listitem [ref=e17]:
            - button [ref=e19] [cursor=pointer]
          - listitem [ref=e22]:
            - button [ref=e24] [cursor=pointer]
          - listitem [ref=e27]:
            - button [ref=e29] [cursor=pointer]
          - listitem [ref=e32]:
            - button [ref=e34] [cursor=pointer]
          - listitem [ref=e37]:
            - button [ref=e39] [cursor=pointer]
          - listitem [ref=e42]:
            - link [ref=e43]:
              - /url: /reportes
      - button [ref=e47]
    - generic [ref=e50]:
      - banner [ref=e51]:
        - button "Cerrar Sesión" [ref=e52]
      - main [ref=e53]:
        - generic [ref=e54]:
          - heading "Dashboard" [level=1] [ref=e55]
          - paragraph [ref=e56]: Bienvenido al sistema ERP.
          - generic [ref=e57]:
            - generic [ref=e58]:
              - heading "Cotización Dólar (Venta)" [level=2] [ref=e59]
              - paragraph [ref=e60]: Cargando...
            - generic [ref=e61]:
              - button [ref=e62] [cursor=pointer]:
                - heading "Total Saldo Clientes" [level=2] [ref=e63]
                - paragraph [ref=e64]: Cargando...
              - button [ref=e65] [cursor=pointer]:
                - heading "Total Saldo Proveedores" [level=2] [ref=e66]
                - paragraph [ref=e67]: Cargando...
  - region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class Sidebar {
  4  |   readonly page: Page;
  5  |   readonly clientManagementMenu: Locator;
  6  |   readonly clientsOption: Locator;
  7  |   readonly expandDashboard: Locator;
  8  |   readonly billingMenu: Locator;
  9  |   readonly billingOption: Locator;
  10 |   readonly articlesMenu: Locator;
  11 |   readonly articlesOption: Locator;
  12 |   readonly createClienteOption: Locator;
  13 |   readonly createArticleOption: Locator;
  14 |   readonly createBillingOption: Locator;
  15 |   readonly salesInvoicesOption: Locator;
  16 | 
  17 |   constructor(page: Page) {
  18 |     this.page = page;
  19 |     this.expandDashboard = page.getByRole("link");
  20 |     this.clientManagementMenu = page.getByRole("button", { name: "Gestión de Clientes" });
  21 |     this.clientsOption = page.getByRole("link", { name: "Clientes" });
  22 |     this.billingMenu = page.getByRole("link", { name: "Cobranzas" });
  23 |     this.billingOption = page.getByRole("link", { name: "Cobranzas" });
  24 |     this.articlesMenu = page.getByRole("button", { name: "Inventario" });
  25 |     this.articlesOption = page.getByRole("link", { name: "Artículos" });
  26 |     this.createClienteOption = page.getByRole("button", { name: "Crear Cliente" });
  27 |     this.createArticleOption = page.getByRole("button", { name: "Crear Artículo" });
  28 |     this.createBillingOption = page.getByRole("button", { name: "Crear Cobranza" });
  29 |     this.salesInvoicesOption = page.getByRole('link', { name: 'Facturas de Venta' })
  30 |   }
  31 | 
  32 |   async goToCreateClient() {
> 33 |     await this.expandDashboard.click();
     |                                ^ Error: locator.click: Error: strict mode violation: getByRole('link') resolved to 2 elements:
  34 |     await this.clientManagementMenu.click();
  35 |     await this.clientsOption.click();
  36 |   }
  37 | 
  38 |   async goToCreateSaleInvoice() {
  39 |     await this.expandDashboard.click();
  40 |     await this.billingMenu.click();
  41 |     await this.salesInvoicesOption.click();
  42 |   }
  43 | 
  44 |   async goToCreateArticle() {
  45 |     await this.expandDashboard.click();
  46 |     await this.articlesMenu.click();
  47 |     await this.articlesOption.click();
  48 |   }
  49 | 
  50 |   async goToCreateBilling() {
  51 |     await this.expandDashboard.click();
  52 |     await this.billingMenu.click();
  53 |     await this.billingOption.click();
  54 |   }
  55 | }
  56 | 
```