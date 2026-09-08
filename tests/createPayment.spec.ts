import { test, expect } from "./fixtures/fixtures.js";
import { PaymentFactory } from "./factory/payment.factory.js";

test.describe("Payment module tests", () => {
  test("User must successfully register a payment", async ({ sidebar, paymentPage, page }) => {
    await sidebar.goToCreatePayment();

    const paymentData = PaymentFactory.create();

    await paymentPage.fillForm(paymentData);

    await expect(page).toHaveURL(process.env.PAYMENT_URL!, {
      timeout: 20000,
    });
  });
});
