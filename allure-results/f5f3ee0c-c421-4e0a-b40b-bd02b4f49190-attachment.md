# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Test Suite >> User should not be able to login with empty fields
- Location: tests\login.spec.ts:16:3

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "fill out this field."
Received string:    "Fill out this field"
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - img "Logo ERP" [ref=e6]
    - generic [ref=e7]:
      - generic [ref=e8]:
        - generic [ref=e9]: Email
        - textbox "Email" [active] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e12]: Contraseña
        - textbox "Contraseña" [ref=e13]
      - link "¿Olvidaste tu contraseña?" [ref=e15]:
        - /url: /recuperar-password
      - button "Ingresar" [ref=e17]
  - region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { test, expect } from './fixture/fixtures.js';
  2  | import { faker } from '@faker-js/faker';
  3  | 
  4  | test.describe('Login Test Suite', () => {
  5  | 
  6  |   test("User login with valid credentials", async ({ page, loginPage }) => {
  7  |     const email = process.env.USER_ADMIN!;
  8  | 
  9  |     const password = process.env.PASSWORD_ADMIN!;
  10 |     
  11 |     await loginPage.fillForm(email, password);
  12 |     
  13 |     await expect(page).toHaveURL(/.*dashboard/); 
  14 |   });
  15 | 
  16 |   test('User should not be able to login with empty fields', async ({ loginPage }) => {
  17 |     await loginPage.clickLoginButton();
  18 | 
  19 |     const validationMessage = await loginPage.getEmailValidationMessage();
  20 | 
> 21 |     expect(validationMessage).toContain('fill out this field.');
     |                               ^ Error: expect(received).toContain(expected) // indexOf
  22 | 
  23 |   });
  24 | 
  25 |   test('User should not be able to login with invalid credentials', async ({ page, loginPage }) => {
  26 |     const randomEmail = faker.internet.email();
  27 | 
  28 |     const randomPassword = faker.internet.password();
  29 | 
  30 |     await loginPage.fillForm(randomEmail, randomPassword);
  31 | 
  32 |     const validateCredentialsMessage = await loginPage.validCredentialsMessage.textContent();
  33 | 
  34 |     expect(validateCredentialsMessage).toBe('Las credenciales proporcionadas son incorrectas.');
  35 | 
  36 |   });
  37 | 
  38 |   test('User should be redirected correctly when clicking "¿Olvidaste tu contraseña?"', async ({ page, loginPage }) => {
  39 |     await loginPage.forgetPassword();
  40 |      
  41 |     await expect(page).toHaveURL(/.*recuperar-password/); 
  42 |   });
  43 | 
  44 | });
  45 | 
```