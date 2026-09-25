# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\auth.setup.ts >> authenticate
- Location: tests\ui\auth.setup.ts:9:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="email"]')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - img "Logo ERP" [ref=e6]
    - generic [ref=e7]:
      - generic [ref=e8]:
        - generic [ref=e9]: Email
        - textbox "Email" [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e12]: Contraseña
        - textbox "Contraseña" [ref=e13]
      - link "¿Olvidaste tu contraseña?" [ref=e15] [cursor=pointer]:
        - /url: /recuperar-password
      - button "Ingresar" [ref=e17]
  - region "Notifications Alt+T"
```

# Test source

```ts
  1  | // tests/ui/auth.setup.ts
  2  | import { test as setup } from '@playwright/test';
  3  | import fs from 'fs';
  4  | import path from 'path';
  5  | 
  6  | const authDir = path.resolve(process.cwd(), '.auth');
  7  | const authFile = path.join(authDir, 'user.json');
  8  | 
  9  | setup('authenticate', async ({ page }) => {
  10 |   // Garantiza que la carpeta .auth/ exista
  11 |   if (!fs.existsSync(authDir)) {
  12 |     fs.mkdirSync(authDir, { recursive: true });
  13 |   }
  14 | 
  15 |   await page.goto(process.env.BASE_URL!);
> 16 |   await page.fill('input[name="email"]', process.env.USER_ADMIN!);
     |              ^ Error: page.fill: Test timeout of 30000ms exceeded.
  17 |   await page.fill('input[name="password"]', process.env.PASSWORD_ADMIN!);
  18 |   await page.click('button[type="submit"]');
  19 | 
  20 |   await page.waitForURL(/.*dashboard/);
  21 | 
  22 |   // Guardar estado de la sesión
  23 |   await page.context().storageState({ path: authFile });
  24 | });
```