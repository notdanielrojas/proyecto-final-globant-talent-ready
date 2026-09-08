import { faker } from "@faker-js/faker";

export default class ApiDataFactory {
  static createClientPayload() {
    return {
      name: faker.person.fullName(),
      cuit: `27-${faker.string.numeric(8)}-6`,
      email: faker.internet.email(),
      phone: "123123123",
      city: "Santiago",
      estado: "Activo",
      startdate: "2026-09-07",
      collection_portal_username: "tae@testing.com",
      collection_portal_password: "Tae@2026",
    };
  }

  static createArticlePayload() {
    return {
      sku: `2026.${faker.string.numeric(4)}.${faker.string.numeric(4)}`,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      line: "37",
      category: "53",
      cost_price: 5000,
      sale_price: 10000,
      stock_quantity: 100,
      is_active: true,
      taxes: [1],
      unit: "",
    };
  }

  static createInvoicePayload(clientId: number, productId: number, productCode: string) {
    const quantity = 3;
    const unitPrice = 10000;
    const costPrice = 5000;
    const totalAmount = quantity * unitPrice;

    return {
      id: 0,
      invoice_number: "",
      status: "1",
      series: "A",
      invoice_date: "2026-09-07",
      delivery_date: "2026-09-09",
      delivery_address: faker.location.streetAddress(),
      client_id: Number(clientId),

      currency_id: 1,
      exchange_rate: 1530,
      salesperson_id: 26,

      buyer_id: null,
      transport_id: null,
      sales_order_id: null,
      notes: null,
      discount_amount: 0,
      has_item_level_taxes: false,
      show_currency_equivalence: false,
      total_amount: totalAmount,
      taxes: [],

      items: [
        {
          id: 0,
          line_number: 1,
          product_id: Number(productId),
          product_code: String(productCode),
          product_name: "Handmade Bamboo Bacon",
          quantity: quantity,
          unit_price: unitPrice,
          cost_price: costPrice,
          base_sales_price: unitPrice,
          base_cost_price: costPrice,
          commission_percentage: 0,
          discount_amount: 0,
          pending_quantity: 0,
          stock_quantity: 100,
          taxes: [],
        },
      ],
    };
  }

  static createPaymentPayload(clientId: number, invoiceId: number, amount: number = 30000) {
    const today = new Date().toISOString().split("T")[0];

    return {
      client_id: Number(clientId),
      collection_date: today,
      payment_date: today,
      currency_id: 1,
      discount: 0,
      discount_amount: 0,
      gross_amount: amount,
      total_amount: amount,
      applied_credit_notes: [],
      applied_financial_notes: [],
      taxes: [],

      applied_invoices: [
        {
          sales_invoice_id: Number(invoiceId),
          amount_applied: amount,
        },
      ],

      items: [
        {
          payment_method_code: "EFE",
          bank_id: null,
          chart_account_id: null,
          check_number: null,
          check_date: null,
          value: amount,
        },
      ],
    };
  }
}
