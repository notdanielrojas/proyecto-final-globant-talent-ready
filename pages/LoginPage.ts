import { Locator, Page } from '@playwright/test';

export default class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly passwordRecoveryMessage: Locator;
  readonly validCredentialsMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Email' })
    this.passwordInput = page.getByLabel("Contraseña", { exact: true });
    this.loginButton = page.getByRole("button", { name: "Ingresar" });
    this.forgotPasswordLink = page.getByRole("link", { name: "¿Olvidaste tu contraseña?" });
    this.passwordRecoveryMessage = page.getByText('Si existe una cuenta con ese email, recibirás un correo con las instrucciones.', { exact: true });
    this.validCredentialsMessage = page.getByText('Las credenciales proporcionadas son incorrectas.', { exact: true });
  }

  async navigate() {
    const url = process.env.BASE_URL || 'https://imcoarca.leonardojose.dev/login';
    await this.page.goto(url);
  }

  async fillForm(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLoginButton();
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async forgetPassword() {
    await this.forgotPasswordLink.click();
  }

  async getEmailValidationMessage() {
    return await this.emailInput.evaluate((element: HTMLInputElement) => element.validationMessage);
  }
}