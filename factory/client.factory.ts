import { faker } from "@faker-js/faker";

export interface ClientData {
  cuit: string;
  razonSocial: string;
  email: string;
  telefono: string;
  domicilio: string;
  localidad: string;
}

function generateValidCUIT(): string {
  const type = faker.helpers.arrayElement(["20", "27", "30"]);
  const number = faker.string.numeric(8);
  const base = `${type}${number}`;

  const multipliers = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < 10; i++) {
    sum += parseInt(base[i], 10) * multipliers[i];
  }

  const mod = sum % 11;
  let verifier = 11 - mod;

  if (verifier === 11) verifier = 0;
  if (verifier === 10) verifier = 9;

  return `${type}-${number}-${verifier}`;
}

export class ClientFactory {
  static create(overrides: Partial<ClientData> = {}): ClientData {
    return {
      cuit: generateValidCUIT(),
      razonSocial: faker.company.name(),
      email: faker.internet.email({ provider: "gmail.com" }),
      telefono: "1144445555",
      domicilio: faker.location.streetAddress(),
      localidad: "SANTIAGO",
      ...overrides,
    };
  }
}