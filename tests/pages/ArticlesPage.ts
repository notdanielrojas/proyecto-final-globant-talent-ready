import { Locator, Page } from "@playwright/test";
import { ArticleData } from "../factory/article.factory.js";

export default class ArticlesPage {
  readonly page: Page;
  readonly skuInput: Locator;
  readonly descripcionBreveInput: Locator;
  readonly lineaInput: Locator;
  readonly precioVentaInput: Locator;
  readonly categoriaInput: Locator;
  readonly costoInput: Locator;
  readonly stockActualInput: Locator;
  readonly guardarCambiosButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.skuInput = page.getByRole("textbox", { name: "Código (SKU) *" });
    this.descripcionBreveInput = page.getByRole("textbox", { name: "Nombre / Descripción Breve *" });
    this.lineaInput = page.getByRole("combobox", { name: "Línea *" });
    this.precioVentaInput = page.getByRole("textbox", { name: "Precio de Venta" });
    this.categoriaInput = page.getByRole("combobox", { name: "Categoría *" });
    this.costoInput = page.getByRole("textbox", { name: "Costo" });
    this.stockActualInput = page.getByRole("textbox", { name: "Stock Actual" });
    this.guardarCambiosButton = page.getByRole("button", { name: "Guardar Cambios" });
  }

  async selectCategoriaOption(option: string): Promise<void> {
    await this.categoriaInput.selectOption({ label: option });
  }

  async selectLineaOption(option: string): Promise<void> {
    await this.lineaInput.selectOption({ label: option });
  }

  async fillForm(article: ArticleData): Promise<void> {
    await this.fillSkuInput(article.sku);
    await this.fillDescripcionBreveInput(article.descripcionBreve);
    await this.selectLineaOption(article.lineaOption);
    await this.fillPrecioVentaInput(article.precioVenta);
    await this.selectCategoriaOption(article.categoriaOption);
    await this.fillCostoInput(article.costo);
    await this.fillStockActualInput(article.stockActual);
    await this.guardarCambios();
  }

  async fillSkuInput(sku: string): Promise<void> {
    await this.skuInput.fill(sku);
  }

  async fillDescripcionBreveInput(descripcionBreve: string): Promise<void> {
    await this.descripcionBreveInput.fill(descripcionBreve);
  }

  async fillPrecioVentaInput(precioVenta: number): Promise<void> {
    await this.precioVentaInput.fill(precioVenta.toString());
  }
  async fillCostoInput(costo: number): Promise<void> {
    await this.costoInput.fill(costo.toString());
  }

  async fillStockActualInput(stockActual: number): Promise<void> {
    await this.stockActualInput.fill(stockActual.toString());
  }

  async guardarCambios(): Promise<void> {
    await this.guardarCambiosButton.click();
  }
}