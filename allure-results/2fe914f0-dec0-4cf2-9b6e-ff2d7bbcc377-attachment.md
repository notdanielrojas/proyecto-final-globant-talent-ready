# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\e2e.api.spec.ts >> Suite API End-To-End >> 1. AUTH - Login via AuthApiService
- Location: tests\e2e\e2e.api.spec.ts:13:3

# Error details

```
Error: apiRequestContext.post: getaddrinfo ENOTFOUND back-imcoorca.leonardojose.dev
Call log:
  - → POST https://back-imcoorca.leonardojose.dev/api/login
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.7922.34 Safari/537.36
    - accept: application/json
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
    - content-length: 49

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
  9  |     this.apiBaseUrl = process.env.API_BASE_URL || "https://back-imcoorca.leonardojose.dev";
  10 |   }
  11 | 
  12 |   async login(email?: string, password?: string): Promise<APIResponse> {
  13 |     const userEmail = email || process.env.USER_ADMIN;
  14 |     const userPassword = password || process.env.PASSWORD_ADMIN;
  15 | 
  16 |     // Llama directamente al backend: https://back-imcoorca.leonardojose.dev/api/login
> 17 |     return await this.request.post(`${this.apiBaseUrl}/api/login`, {
     |                               ^ Error: apiRequestContext.post: getaddrinfo ENOTFOUND back-imcoorca.leonardojose.dev
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