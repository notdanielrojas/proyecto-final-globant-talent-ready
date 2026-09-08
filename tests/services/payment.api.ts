import { APIRequestContext, APIResponse } from "@playwright/test";

export class PaymentApiService {
  private request: APIRequestContext;
  private baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = process.env.API_URL || "";
  }

  private getHeaders(token: string) {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
  }

  async createPayment(data: any, token: string): Promise<APIResponse> {
    return await this.request.post(`${this.baseUrl}/api/collections`, {
      headers: this.getHeaders(token),
      data,
    });
  }

  async getPaymentById(id: number | string, token: string): Promise<APIResponse> {
    return await this.request.get(`${this.baseUrl}/api/collections/${id}`, {
      headers: this.getHeaders(token),
    });
  }

  async deletePayment(id: number | string, token: string): Promise<APIResponse> {
    return await this.request.delete(`${this.baseUrl}/api/collections/${id}`, {
      headers: this.getHeaders(token),
    });
  }
}
