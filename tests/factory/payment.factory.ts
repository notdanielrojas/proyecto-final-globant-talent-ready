import { faker } from "@faker-js/faker";

export interface PaymentMethodItem {
  medioOption: string;
  cuentaCodigo?: string;
  cuentaContable: number;
  /* monto: number; */
}

export interface PaymentData {
  clienteCodigo: string;
  fechaCobro?: string;
  mediosPago: PaymentMethodItem[];
}

export class PaymentFactory {
  static create(overrides: Partial<PaymentData> = {}): PaymentData {
    return {
      clienteCodigo: "00057",
      fechaCobro: faker.date.recent().toISOString().split("T")[0],
      mediosPago: [
        {
          medioOption: "Efectivo",
          cuentaContable: 100100
          /* monto: faker.number.int({ min: 10000, max: 500000 }), */
        },
      ],
      ...overrides,
    };
  }
}