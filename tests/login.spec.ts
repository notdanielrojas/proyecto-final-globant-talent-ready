import { test, expect } from './fixtures/fixtures.js';
import { faker } from '@faker-js/faker';

test.describe('Login Test Suite', () => {
  test("User login with valid credentials", async ({ page, loginPage }) => {
    const email = process.env.USER_ADMIN!;

    const password = process.env.PASSWORD_ADMIN!;
    
    await loginPage.fillForm(email, password);
    
    await expect(page).toHaveURL(/.*dashboard/); 
  });

  test('User should not be able to login with empty fields', async ({ loginPage }) => {
    await loginPage.clickLoginButton();

    const validationMessage = await loginPage.getEmailValidationMessage();

    expect(validationMessage).toMatch(/fill out this field/i);

  });

  test('User should not be able to login with invalid credentials', async ({ page, loginPage }) => {
    const randomEmail = faker.internet.email();

    const randomPassword = faker.internet.password();

    await loginPage.fillForm(randomEmail, randomPassword);

    const validateCredentialsMessage = await loginPage.validCredentialsMessage.textContent();

    expect(validateCredentialsMessage).toBe('Las credenciales proporcionadas son incorrectas.');

  });

  test('User should be redirected correctly when clicking "¿Olvidaste tu contraseña?"', async ({ page, loginPage }) => {
    await loginPage.forgetPassword();
     
    await expect(page).toHaveURL(/.*recuperar-password/); 
  });

});
