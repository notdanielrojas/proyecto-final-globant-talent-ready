import { APIRequestContext, APIResponse } from "@playwright/test";

export class AuthApiService {
  private request: APIRequestContext;
  private apiBaseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.apiBaseUrl = process.env.API_URL || "https://back-imcoorca.leonardojose.dev";
  }

  async login(email?: string, password?: string): Promise<APIResponse> {
    const userEmail = email || process.env.USER_ADMIN;
    const userPassword = password || process.env.PASSWORD_ADMIN;

    return await this.request.post(`${this.apiBaseUrl}/api/login`, {
      data: {
        email: userEmail,
        password: userPassword,
      },
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    });
  }
}