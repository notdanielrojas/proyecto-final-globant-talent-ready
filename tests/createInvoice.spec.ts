import { test, expect } from "./fixtures/fixtures.js";
import { InvoiceData, InvoiceFactory } from "./factory/invoice.factory.js";

test.describe("Invoice Management Test Suite", () => {
  test("User should be able to create a new invoice successfully", async ({ invoicePage, sidebar }) => {
    const invoiceData: InvoiceData = InvoiceFactory.create();
    await sidebar.goToCreateInvoice();
    await invoicePage.fillForm(invoiceData);
    await expect(invoicePage.page).toHaveURL(process.env.INVOICE_URL!, {
      timeout: 20000,
    });
  });
});