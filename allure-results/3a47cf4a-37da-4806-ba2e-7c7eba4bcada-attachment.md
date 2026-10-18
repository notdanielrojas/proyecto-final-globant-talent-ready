# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\e2e\e2e.api.spec.ts >> Suite API End-To-End >> 1. AUTH - Login via AuthApiService
- Location: tests\api\e2e\e2e.api.spec.ts:13:3

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
  9  |     this.apiBaseUrl = process.env.API_BASE_URL!;
  10 |   }
  11 | 
  12 |   async login(email?: string, password?: string): Promise<APIResponse> {
  13 |     const userEmail = email || process.env.USER_ADMIN;
  14 |     const userPassword = password || process.env.PASSWORD_ADMIN;
  15 | 
> 16 |     return await this.request.post(`${this.apiBaseUrl}/api/login`, {
     |                               ^ TypeError: apiRequestContext.post: Invalid URL
  17 |       data: {
  18 |         email: userEmail,
  19 |         password: userPassword,
  20 |       },
  21 |       headers: {
  22 |         "Accept": "application/json",
  23 |         "Content-Type": "application/json",
  24 |       },
  25 |     });
  26 |   }
  27 | }
```