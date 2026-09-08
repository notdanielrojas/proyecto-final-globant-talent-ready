import { APIRequestContext, APIResponse } from "@playwright/test";

export class AuthApiService {
  private request: APIRequestContext;
  private baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = process.env.API_URL || "";
  }

  async login(email: string, password: string): Promise<APIResponse> {
    return await this.request.post(`${this.baseUrl}/api/login`, {
      data: { email, password },
    });
  }
}