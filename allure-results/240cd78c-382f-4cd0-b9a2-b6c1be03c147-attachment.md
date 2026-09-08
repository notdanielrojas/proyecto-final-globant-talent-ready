# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createPayment.spec.ts >> Módulo de Cobranzas >> Debe registrar una cobranza exitosamente usando datos generados por Factory
- Location: tests\createPayment.spec.ts:5:3

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - generic [ref=f1e4]:
    - generic:
      - img "Logo ERP"
    - generic [ref=f1e5]:
      - generic [ref=f1e6]:
        - generic [ref=f1e7]: Email
        - textbox "Email" [ref=f1e8]
      - generic [ref=f1e9]:
        - generic [ref=f1e10]: Contraseña
        - textbox "Contraseña" [ref=f1e11]
      - link "¿Olvidaste tu contraseña?" [ref=f1e13]:
        - /url: /recuperar-password
      - button "Ingresar" [ref=f1e15]
  - region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | import dotenv from "dotenv";
  3  | 
  4  | dotenv.config();
  5  | 
  6  | const BASE_URL: string = process.env.BASE_URL!;
  7  | 
  8  | export default class LoginPage {
  9  |   readonly page: Page;
  10 |   readonly emailInput: Locator;
  11 |   readonly passwordInput: Locator;
  12 |   readonly loginButton: Locator;
  13 |   readonly forgotPasswordLink: Locator;
  14 |   readonly passwordRecoveryMessage: Locator;
  15 |   readonly invalidCredentialsMessage: Locator;
  16 | 
  17 |   constructor(page: Page) {
  18 |     this.page = page;
  19 |     this.emailInput = page.getByRole("textbox", { name: "Email" });
  20 |     this.passwordInput = page.getByLabel("Contraseña", { exact: true });
  21 |     this.loginButton = page.getByRole("button", { name: "Ingresar" });
  22 |     this.forgotPasswordLink = page.getByRole("link", {
  23 |       name: "¿Olvidaste tu contraseña?",
  24 |     });
  25 |     this.passwordRecoveryMessage = page.getByText("Si existe una cuenta con ese email, recibirás un correo con las instrucciones.", {
  26 |       exact: true,
  27 |     });
  28 |     this.invalidCredentialsMessage = page.getByText("Las credenciales proporcionadas son incorrectas.", { exact: true });
  29 |   }
  30 | 
  31 |   async navigate(): Promise<void> {
  32 |     await this.page.goto(BASE_URL);
  33 |     await this.emailInput.waitFor({ state: "visible" });
  34 |   }
  35 | 
  36 |   async fillForm(email: string, password: string): Promise<void> {
> 37 |     await this.emailInput.fill(email);
     |                           ^ Error: locator.fill: value: expected string, got undefined
  38 |     await this.passwordInput.fill(password);
  39 |     await this.loginButton.click();
  40 |   }
  41 | 
  42 |   async forgetPassword(): Promise<void> {
  43 |     await this.forgotPasswordLink.click();
  44 |   }
  45 | 
  46 |   async getEmailValidationMessage(): Promise<string> {
  47 |     return await this.emailInput.evaluate((element: HTMLInputElement) => element.validationMessage);
  48 |   }
  49 | }
  50 | 
```