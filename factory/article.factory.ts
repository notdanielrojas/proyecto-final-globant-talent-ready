import { faker } from "@faker-js/faker";

export interface ArticleData {
  sku: string;
  descripcionBreve: string;
  descripcionLarga: string;
  precioVenta: number;
  costo: number;
  stockActual: number;
  lineaOption: string;
  categoriaOption: string;
}

export class ArticleFactory {
  static create(overrides: Partial<ArticleData> = {}): ArticleData {
    const skuFormat = `${faker.string.numeric(4)}.${faker.string.numeric(4)}.${faker.string.numeric(4)}`;
    return {
      sku: skuFormat,
      descripcionBreve: faker.commerce.productName(),
      descripcionLarga: faker.commerce.productDescription(),
      precioVenta: parseFloat(faker.commerce.price({ min: 100, max: 5000 })),
      costo: parseFloat(faker.commerce.price({ min: 10, max: 1000 })),
      stockActual: faker.number.int({ min: 10, max: 500 }),
      categoriaOption: faker.helpers.arrayElement(["CATEGORIA 1"]),
      lineaOption: faker.helpers.arrayElement(["LINEA 1"]),

      ...overrides,
    };
  }
}
