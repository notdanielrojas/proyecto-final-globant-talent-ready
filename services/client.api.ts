import { APIRequestContext, APIResponse } from "@playwright/test";

export class ClientApiService {
  private request: APIRequestContext;
  private baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = process.env.API_BASE_URL || process.env.BASE_URL || "";
  }

  private getHeaders(token: string) {
    return {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    };
  }

  async createClient(data: any, token: string): Promise<APIResponse> {
    return await this.request.post(`${this.baseUrl}/api/clients`, {
      headers: this.getHeaders(token),
      data,
    });
  }

  async getClientById(id: number | string, token: string): Promise<APIResponse> {
    return await this.request.get(`${this.baseUrl}/api/clients/${id}`, {
      headers: this.getHeaders(token),
    });
  }

  async updateClient(id: number | string, data: any, token: string): Promise<APIResponse> {
    return await this.request.put(`${this.baseUrl}/api/clients/${id}`, {
      headers: this.getHeaders(token),
      data,
    });
  }

  async deleteClient(id: number | string, token: string): Promise<APIResponse> {
    return await this.request.delete(`${this.baseUrl}/api/clients/${id}`, {
      headers: this.getHeaders(token),
    });
  }
}