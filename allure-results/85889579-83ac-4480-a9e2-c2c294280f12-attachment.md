# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\e2e.api.spec.ts >> Suite API End-To-End >> 1. AUTH - Login via AuthApiService
- Location: tests\e2e\e2e.api.spec.ts:13:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import { test, expect } from "../fixtures/fixtures.js";
  2  | import ApiDataFactory from "../factory/api.factory.js";
  3  | 
  4  | test.describe.serial("Suite API End-To-End", () => {
  5  |   let authToken: string;
  6  |   let clientId: number;
  7  |   let customerCode: string;
  8  |   let articleId: number;
  9  |   let articleSku: string;
  10 |   let invoiceId: number;
  11 |   let paymentId: number;
  12 | 
  13 |   test("1. AUTH - Login via AuthApiService", async ({ authApi }) => {
  14 |     const response = await authApi.login(process.env.USER_ADMIN || "tae@testing.com", process.env.PASSWORD_ADMIN || "Tae@2026");
  15 | 
> 16 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  17 |     const body = await response.json();
  18 |     authToken = body.access_token;
  19 |   });
  20 | 
  21 |   test("2. CLIENTS - Create client via ClientApiService", async ({ clientApi }) => {
  22 |     const payload = ApiDataFactory.createClientPayload();
  23 |     const response = await clientApi.createClient(payload, authToken);
  24 | 
  25 |     expect(response.status()).toBe(201);
  26 |     const body = await response.json();
  27 |     clientId = body.data.id;
  28 |     customerCode = body.data.customer_code;
  29 |   });
  30 | 
  31 |   test("3. ARTICLES - Create product via ArticleApiService", async ({ articleApi }) => {
  32 |     const payload = ApiDataFactory.createArticlePayload();
  33 |     const response = await articleApi.createArticle(payload, authToken);
  34 | 
  35 |     expect(response.status()).toBe(201);
  36 |     const body = await response.json();
  37 |     articleId = body.data.id;
  38 |     articleSku = body.data.sku;
  39 |   });
  40 | 
  41 |   test("4. INVOICE - Issue invoice linking Client and Article", async ({ invoiceApi }) => {
  42 |     const payload = ApiDataFactory.createInvoicePayload(clientId, articleId, articleSku);
  43 |     const response = await invoiceApi.createInvoice(payload, authToken);
  44 | 
  45 |     if (response.status() !== 201) {
  46 |       console.log("Error status:", response.status());
  47 |       console.log("Error body:", await response.text());
  48 |     }
  49 | 
  50 |     expect(response.status()).toBe(201);
  51 | 
  52 |     const body = await response.json();
  53 |     invoiceId = body.data.id;
  54 | 
  55 |     expect(invoiceId).toBeDefined();
  56 |     expect(body.data.client_id).toBe(clientId);
  57 |   });
  58 | 
  59 |   test("5. PAYMENT - Register payment via PaymentApiService", async ({ paymentApi }) => {
  60 |     const payload = ApiDataFactory.createPaymentPayload(clientId, invoiceId, 30000);
  61 |     const response = await paymentApi.createPayment(payload, authToken);
  62 | 
  63 |     expect([200, 201]).toContain(response.status());
  64 |     const body = await response.json();
  65 | 
  66 |     paymentId = body.data?.id || body.id;
  67 |     expect(paymentId).toBeDefined();
  68 |   });
  69 | 
  70 |   test("6. TEARDOWN - Clean up created entities", async ({ paymentApi, invoiceApi, articleApi, clientApi }) => {
  71 |     if (paymentId) {
  72 |       const res = await paymentApi.deletePayment(paymentId, authToken);
  73 |       expect([200, 204]).toContain(res.status());
  74 |     }
  75 | 
  76 |     if (invoiceId) {
  77 |       const res = await invoiceApi.deleteInvoice(invoiceId, authToken);
  78 |       expect([200, 204]).toContain(res.status());
  79 |     }
  80 | 
  81 |     if (articleId) {
  82 |       const res = await articleApi.deleteArticle(articleId, authToken);
  83 |       expect([200, 204]).toContain(res.status());
  84 |     }
  85 | 
  86 |     if (clientId) {
  87 |       const res = await clientApi.deleteClient(clientId, authToken);
  88 |       expect([200, 204]).toContain(res.status());
  89 |     }
  90 |   });
  91 | });
  92 | 
```