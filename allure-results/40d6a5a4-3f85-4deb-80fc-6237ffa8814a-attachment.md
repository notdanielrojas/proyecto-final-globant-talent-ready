# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\e2e.api.spec.ts >> Suite API End-To-End >> 4. INVOICE - Issue invoice linking Client and Article
- Location: tests\e2e\e2e.api.spec.ts:58:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 500
```

# Test source

```ts
  1   | import { test, expect } from "../fixtures/fixtures.js";
  2   | import ApiDataFactory from "../factory/api.factory.js";
  3   | 
  4   | test.describe.serial("Suite API End-To-End", () => {
  5   |   let authToken: string;
  6   |   let clientId: number;
  7   |   let customerCode: string;
  8   |   let articleId: number;
  9   |   let articleSku: string;
  10  |   let invoiceId: number;
  11  |   let paymentId: number;
  12  | 
  13  |   test("1. AUTH - Login via AuthApiService", async ({ authApi }) => {
  14  |     const response = await authApi.login(process.env.USER_ADMIN!, process.env.PASSWORD_ADMIN!);
  15  | 
  16  |     expect(response.status()).toBe(200);
  17  |     const body = await response.json();
  18  |     authToken = body.access_token || body.token || body.data?.token;
  19  |     expect(authToken).toBeDefined();
  20  |   });
  21  | 
  22  |   test("2. CLIENTS - Create client via ClientApiService", async ({ clientApi }) => {
  23  |     const payload = ApiDataFactory.createClientPayload();
  24  |     const response = await clientApi.createClient(payload, authToken);
  25  | 
  26  |     expect(response.status()).toBe(201);
  27  |     const body = await response.json();
  28  |     clientId = body.data.id;
  29  |     customerCode = body.data.customer_code;
  30  |     expect(clientId).toBeDefined();
  31  |   });
  32  | 
  33  |   test("2.1 CLIENTS - Update client details via ClientApiService", async ({ clientApi }) => {
  34  |     const updatePayload = ApiDataFactory.createClientPayload();
  35  |     const response = await clientApi.updateClient(clientId, updatePayload, authToken);
  36  | 
  37  |     expect([200, 204]).toContain(response.status());
  38  |   });
  39  | 
  40  |   test("3. ARTICLES - Create product via ArticleApiService", async ({ articleApi }) => {
  41  |     const payload = ApiDataFactory.createArticlePayload();
  42  |     const response = await articleApi.createArticle(payload, authToken);
  43  | 
  44  |     expect(response.status()).toBe(201);
  45  |     const body = await response.json();
  46  |     articleId = body.data.id;
  47  |     articleSku = body.data.sku;
  48  |     expect(articleId).toBeDefined();
  49  |   });
  50  | 
  51  |   test("3.1 ARTICLES - Update product details via ArticleApiService", async ({ articleApi }) => {
  52  |     const updatePayload = ApiDataFactory.createArticlePayload();
  53  |     const response = await articleApi.updateArticle(articleId, updatePayload, authToken);
  54  | 
  55  |     expect([200, 204]).toContain(response.status());
  56  |   });
  57  | 
  58  |   test("4. INVOICE - Issue invoice linking Client and Article", async ({ invoiceApi }) => {
  59  |     const payload = ApiDataFactory.createInvoicePayload(clientId, articleId, articleSku);
  60  |     const response = await invoiceApi.createInvoice(payload, authToken);
  61  | 
  62  |     if (response.status() !== 201) {
  63  |       console.log("Error status:", response.status());
  64  |       console.log("Error body:", await response.text());
  65  |     }
  66  | 
> 67  |     expect(response.status()).toBe(201);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  68  | 
  69  |     const body = await response.json();
  70  |     invoiceId = body.data.id;
  71  | 
  72  |     expect(invoiceId).toBeDefined();
  73  |     expect(body.data.client_id).toBe(clientId);
  74  |   });
  75  | 
  76  |   test("5. PAYMENT - Register payment via PaymentApiService", async ({ paymentApi }) => {
  77  |     const payload = ApiDataFactory.createPaymentPayload(clientId, invoiceId, 30000);
  78  |     const response = await paymentApi.createPayment(payload, authToken);
  79  | 
  80  |     expect([200, 201]).toContain(response.status());
  81  |     const body = await response.json();
  82  | 
  83  |     paymentId = body.data?.id || body.id;
  84  |     expect(paymentId).toBeDefined();
  85  |   });
  86  | 
  87  |   test("6. TEARDOWN - Clean up created entities", async ({ paymentApi, invoiceApi, articleApi, clientApi }) => {
  88  |     if (paymentId) {
  89  |       const res = await paymentApi.deletePayment(paymentId, authToken);
  90  |       expect([200, 204]).toContain(res.status());
  91  |     }
  92  | 
  93  |     if (invoiceId) {
  94  |       const res = await invoiceApi.deleteInvoice(invoiceId, authToken);
  95  |       expect([200, 204]).toContain(res.status());
  96  |     }
  97  | 
  98  |     if (articleId) {
  99  |       const res = await articleApi.deleteArticle(articleId, authToken);
  100 |       expect([200, 204]).toContain(res.status());
  101 |     }
  102 | 
  103 |     if (clientId) {
  104 |       const res = await clientApi.deleteClient(clientId, authToken);
  105 |       expect([200, 204]).toContain(res.status());
  106 |     }
  107 |   });
  108 | });
```