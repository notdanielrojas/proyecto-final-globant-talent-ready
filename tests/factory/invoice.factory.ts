import { faker } from "@faker-js/faker";

export interface InvoiceItem {
  codigoArticulo: string;
  cantidad: number;
}

export interface InvoiceData {
  clienteCodigo: string;
  serieOption: string;
  deliveryDate?: string;
  deliveryAddress?: string;
  monedaOption?: string;
  vendedorOption?: string;
  items: InvoiceItem[];
  observaciones?: string;
}

export class InvoiceFactory {
  static create(overrides: Partial<InvoiceData> = {}): InvoiceData {
    return {
      clienteCodigo: "00057",
      serieOption: faker.helpers.arrayElement(["A", "B"]),
      deliveryDate: faker.date.future().toISOString().split("T")[0],
      deliveryAddress: faker.location.streetAddress(),
      monedaOption: "01",
      vendedorOption: "01",
      items: [
        {
          codigoArticulo: "1377.2052.2165",
          cantidad: faker.number.int({ min: 1, max: 10 }),
        },
      ],
      observaciones: faker.lorem.sentence(),
      ...overrides,
    };
  }
}