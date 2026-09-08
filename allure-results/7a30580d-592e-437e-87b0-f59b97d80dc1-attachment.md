# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\e2e.api.spec.ts >> Suite API End-To-End >> 5. PAYMENT - Register payment via PaymentApiService
- Location: tests\e2e\e2e.api.spec.ts:59:3

# Error details

```
TypeError: apiRequestContext.post: Invalid URL
```

# Test source

```ts
  1  | import { APIRequestContext, APIResponse } from "@playwright/test";
  2  | 
  3  | export class PaymentApiService {
  4  |   private request: APIRequestContext;
  5  |   private baseUrl: string;
  6  | 
  7  |   constructor(request: APIRequestContext) {
  8  |     this.request = request;
  9  |     this.baseUrl = process.env.API_URL || "";
  10 |   }
  11 | 
  12 |   private getHeaders(token: string) {
  13 |     return {
  14 |       "Content-Type": "application/json",
  15 |       Accept: "application/json",
  16 |       Authorization: `Bearer ${token}`,
  17 |     };
  18 |   }
  19 | 
  20 |   async createPayment(data: any, token: string): Promise<APIResponse> {
> 21 |     return await this.request.post(`${this.baseUrl}/api/collections`, {
     |                               ^ TypeError: apiRequestContext.post: Invalid URL
  22 |       headers: this.getHeaders(token),
  23 |       data,
  24 |     });
  25 |   }
  26 | 
  27 |   async getPaymentById(id: number | string, token: string): Promise<APIResponse> {
  28 |     return await this.request.get(`${this.baseUrl}/api/collections/${id}`, {
  29 |       headers: this.getHeaders(token),
  30 |     });
  31 |   }
  32 | 
  33 |   async deletePayment(id: number | string, token: string): Promise<APIResponse> {
  34 |     return await this.request.delete(`${this.baseUrl}/api/collections/${id}`, {
  35 |       headers: this.getHeaders(token),
  36 |     });
  37 |   }
  38 | }
  39 | 
```