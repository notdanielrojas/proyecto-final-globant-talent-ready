# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\e2e.api.spec.ts >> Suite API End-To-End >> 1. AUTH - Login via AuthApiService
- Location: tests\e2e\e2e.api.spec.ts:13:3

# Error details

```
TypeError: apiRequestContext.post: Invalid URL
```

# Test source

```ts
  1  | import { APIRequestContext, APIResponse } from "@playwright/test";
  2  | 
  3  | export class AuthApiService {
  4  |   private request: APIRequestContext;
  5  |   private apiBaseUrl: string;
  6  | 
  7  |   constructor(request: APIRequestContext) {
  8  |     this.request = request;
  9  |     // Toma dinámicamente la URL de la API declarada en el .env
  10 |     this.apiBaseUrl = process.env.API_URL!;
  11 |   }
  12 | 
  13 |   async login(email?: string, password?: string): Promise<APIResponse> {
  14 |     const userEmail = email || process.env.USER_ADMIN;
  15 |     const userPassword = password || process.env.PASSWORD_ADMIN;
  16 | 
> 17 |     return await this.request.post(`${this.apiBaseUrl}/api/login`, {
     |                               ^ TypeError: apiRequestContext.post: Invalid URL
  18 |       data: {
  19 |         email: userEmail,
  20 |         password: userPassword,
  21 |       },
  22 |       headers: {
  23 |         "Accept": "application/json",
  24 |         "Content-Type": "application/json",
  25 |       },
  26 |     });
  27 |   }
  28 | }
```