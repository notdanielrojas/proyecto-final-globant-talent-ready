import { Locator, Page } from "@playwright/test";
import { InvoiceData } from "../factory/invoice.factory.js";

export default class InvoicePage {
  readonly page: Page;
  readonly clienteCodigoInput: Locator;
  readonly deliveryDateInput: Locator;
  readonly monedaSelectOption: Locator;
  readonly deliveryAddressMenu: Locator;
  readonly deliveryAddressInput: Locator;
  readonly vendedorInput: Locator;
  readonly addNewItemButton: Locator;
  readonly guardarFacturaButton: Locator;
  readonly articleCodeInput: Locator;

  constructor(page: Page) {
    this.page = page;

    this.clienteCodigoInput = page.locator(
      "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)"
    );
    this.deliveryDateInput = page.locator('[name="delivery_date"]');
    this.deliveryAddressMenu = page.locator('[name="delivery_address_selector"]');
    this.deliveryAddressInput = page.getByRole("textbox", {
      name: "Ingrese la nueva dirección de entrega",
    });
    this.monedaSelectOption = page.locator(
      "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)"
    );
    this.vendedorInput = page.locator(
      "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)"
    );
    this.addNewItemButton = page.getByRole("button", { name: "Agregar Ítem" });
    this.articleCodeInput = page.locator(
      "tbody div[class='flex w-full space-x-2 mt-1'] div:nth-child(1) input"
    );
    this.guardarFacturaButton = page.getByRole("button", { name: "Guardar Factura" });
  }

  async fillForm(invoice: InvoiceData): Promise<void> {
    await this.fillClienteCodigoInput(invoice.clienteCodigo);
    await this.fillVendedorCodigoInput(invoice.vendedorOption);
    await this.fillDeliveryDateInput(invoice.deliveryDate);
    await this.fillDeliveryAddressInput(invoice.deliveryAddress);
    await this.selectMonedaOption(invoice.monedaOption);

    const articuloCodigo = invoice.items?.[0]?.codigoArticulo;
    if (articuloCodigo) {
      await this.addNewItemButton.click();
      await this.fillArticleCodeInput(articuloCodigo);
    }

    await this.guardarFacturaButton.click();
  }

  async fillClienteCodigoInput(clienteCodigo: string): Promise<void> {
    const responsePromise = this.page
      .waitForResponse(
        (res) => res.url().includes("/api/") && res.status() === 200,
        { timeout: 10000 }
      )
      .catch(() => {});

    await this.clienteCodigoInput.fill(clienteCodigo);
    await this.clienteCodigoInput.press("Enter");
    await responsePromise;
    await this.page.waitForTimeout(1000);
  }

  async fillDeliveryDateInput(deliveryDate?: string): Promise<void> {
    if (!deliveryDate) return;
    await this.deliveryDateInput.fill(deliveryDate);
  }

  async selectMonedaOption(monedaOption?: string): Promise<void> {
    if (!monedaOption) return;
    await this.monedaSelectOption.fill(monedaOption);
    await this.monedaSelectOption.press("Enter");
    await this.page.waitForTimeout(1000);
  }

  async fillDeliveryAddressInput(deliveryAddress?: string): Promise<void> {
    if (!deliveryAddress) return;

    // Esperar a que el selector esté habilitado en la UI (después de cargar el cliente)
    await this.deliveryAddressMenu.waitFor({ state: "visible" });
    await this.page.waitForFunction(
      (selector) => {
        const el = document.querySelector(selector) as HTMLSelectElement;
        return el && !el.disabled;
      },
      '[name="delivery_address_selector"]',
      { timeout: 10000 }
    ).catch(() => {});

    await this.deliveryAddressMenu.selectOption({
      label: "--- Ingresar Otra Dirección ---",
    });

    await this.deliveryAddressInput.waitFor({ state: "visible" });
    await this.deliveryAddressInput.fill(deliveryAddress);
    await this.deliveryAddressInput.press("Enter");
  }

  async fillVendedorCodigoInput(vendedorOption?: string): Promise<void> {
    if (!vendedorOption) return;
    await this.vendedorInput.fill(vendedorOption);
    await this.vendedorInput.press("Enter");
    await this.page.waitForTimeout(1000);
  }

  async fillArticleCodeInput(codigoArticulo: string): Promise<void> {
    const responsePromise = this.page
      .waitForResponse(
        (res) => res.url().includes("/api/") && res.status() === 200,
        { timeout: 10000 }
      )
      .catch(() => {});

    await this.articleCodeInput.fill(codigoArticulo);
    await this.articleCodeInput.press("Enter");
    await responsePromise;
  }
}