import { test, expect } from "../fixtures/fixtures.js";
import ApiDataFactory from "../factory/api.factory.js";

test.describe.serial("Suite API End-To-End", () => {
  let authToken: string;
  let clientId: number;
  let customerCode: string;
  let articleId: number;
  let articleSku: string;
  let invoiceId: number;
  let paymentId: number;

  test("1. AUTH - Login via AuthApiService", async ({ authApi }) => {
    const response = await authApi.login(process.env.USER_ADMIN!, process.env.PASSWORD_ADMIN!);

    expect(response.status()).toBe(200);
    const body = await response.json();
    authToken = body.access_token || body.token || body.data?.token;
    expect(authToken).toBeDefined();
  });

  test("2. CLIENTS - Create client via ClientApiService", async ({ clientApi }) => {
    const payload = ApiDataFactory.createClientPayload();
    const response = await clientApi.createClient(payload, authToken);

    expect(response.status()).toBe(201);
    const body = await response.json();
    clientId = body.data.id;
    customerCode = body.data.customer_code;
    expect(clientId).toBeDefined();
  });

  test("2.1 CLIENTS - Update client details via ClientApiService", async ({ clientApi }) => {
    const updatePayload = ApiDataFactory.createClientPayload();
    const response = await clientApi.updateClient(clientId, updatePayload, authToken);

    expect([200, 204]).toContain(response.status());
  });

  test("3. ARTICLES - Create product via ArticleApiService", async ({ articleApi }) => {
    const payload = ApiDataFactory.createArticlePayload();
    const response = await articleApi.createArticle(payload, authToken);

    expect(response.status()).toBe(201);
    const body = await response.json();
    articleId = body.data.id;
    articleSku = body.data.sku;
    expect(articleId).toBeDefined();
  });

  test("3.1 ARTICLES - Update product details via ArticleApiService", async ({ articleApi }) => {
    const updatePayload = ApiDataFactory.createArticlePayload();
    const response = await articleApi.updateArticle(articleId, updatePayload, authToken);

    expect([200, 204]).toContain(response.status());
  });

  test("4. INVOICE - Issue invoice linking Client and Article", async ({ invoiceApi }) => {
    const payload = ApiDataFactory.createInvoicePayload(clientId, articleId, articleSku);
    const response = await invoiceApi.createInvoice(payload, authToken);

    if (response.status() !== 201) {
      console.log("Error status:", response.status());
      console.log("Error body:", await response.text());
    }

    expect(response.status()).toBe(201);

    const body = await response.json();
    invoiceId = body.data.id;

    expect(invoiceId).toBeDefined();
    expect(body.data.client_id).toBe(clientId);
  });

  test("5. PAYMENT - Register payment via PaymentApiService", async ({ paymentApi }) => {
    const payload = ApiDataFactory.createPaymentPayload(clientId, invoiceId, 30000);
    const response = await paymentApi.createPayment(payload, authToken);

    expect([200, 201]).toContain(response.status());
    const body = await response.json();

    paymentId = body.data?.id || body.id;
    expect(paymentId).toBeDefined();
  });

  test("6. TEARDOWN - Clean up created entities", async ({ paymentApi, invoiceApi, articleApi, clientApi }) => {
    if (paymentId) {
      const res = await paymentApi.deletePayment(paymentId, authToken);
      expect([200, 204]).toContain(res.status());
    }

    if (invoiceId) {
      const res = await invoiceApi.deleteInvoice(invoiceId, authToken);
      expect([200, 204]).toContain(res.status());
    }

    if (articleId) {
      const res = await articleApi.deleteArticle(articleId, authToken);
      expect([200, 204]).toContain(res.status());
    }

    if (clientId) {
      const res = await clientApi.deleteClient(clientId, authToken);
      expect([200, 204]).toContain(res.status());
    }
  });
});