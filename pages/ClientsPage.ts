import { Locator, Page } from "@playwright/test";
import { ClientData } from "../factory/client.factory.js";

export default class ClientsPage {
  readonly page: Page;
  readonly cuitInput: Locator;
  readonly razonSocialInput: Locator;
  readonly emailInput: Locator;
  readonly telefonoInput: Locator;
  readonly domicilioInput: Locator;
  readonly localidadInput: Locator;
  readonly guardarCambiosButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cuitInput = page.getByRole("textbox", { name: "CUIT *" });
    this.razonSocialInput = page.getByRole("textbox", { name: "Nombre o Razón Social *" });
    this.emailInput = page.locator('input[name="email"]');
    this.telefonoInput = page.getByPlaceholder("Ej: 11-4444-5555");
    this.domicilioInput = page.getByRole("textbox", { name: "Domicilio Fiscal" });
    this.localidadInput = page.getByLabel("Localidad", { exact: true });
    this.guardarCambiosButton = page.getByRole("button", { name: "Guardar Cambios" });
  }

  async fillForm(client: ClientData): Promise<void> {
    await this.fillCuitInput(client.cuit);
    await this.fillRazonSocialInput(client.razonSocial);
    await this.fillEmailInput(client.email);
    await this.fillTelefonoInput(client.telefono);
    await this.fillDomicilioInput(client.domicilio);
    await this.fillLocalidadInput(client.localidad);
    await this.guardarCambios();
  }

  async fillCuitInput(cuit: string): Promise<void> {
    await this.cuitInput.fill(cuit);
  }
  async fillRazonSocialInput(razonSocial: string): Promise<void> {
    await this.razonSocialInput.fill(razonSocial);
  }

  async fillEmailInput(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async fillTelefonoInput(telefono: string): Promise<void> {
    await this.telefonoInput.fill(telefono);
  }

  async fillDomicilioInput(domicilio: string): Promise<void> {
    await this.domicilioInput.fill(domicilio);
  }

  async fillLocalidadInput(localidad: string): Promise<void> {
    await this.localidadInput.fill(localidad);
  }

  async guardarCambios(): Promise<void> {
    await this.guardarCambiosButton.click();
  }
}