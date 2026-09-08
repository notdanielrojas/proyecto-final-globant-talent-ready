import { APIRequestContext, APIResponse } from "@playwright/test";

export class InvoiceApiService {
  private request: APIRequestContext;
  private baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = process.env.API_URL || "https://back-imcoarca.leonardojose.dev";
  }

  private getHeaders(token: string) {
    return {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    };
  }

  async createInvoice(data: any, token: string): Promise<APIResponse> {
    return await this.request.post(`${this.baseUrl}/api/sales-invoices`, {
      headers: this.getHeaders(token),
      data,
    });
  }

  async getInvoiceById(id: number | string, token: string): Promise<APIResponse> {
    return await this.request.get(`${this.baseUrl}/api/sales-invoices/${id}`, {
      headers: this.getHeaders(token),
    });
  }

  async updateInvoice(id: number | string, data: any, token: string): Promise<APIResponse> {
    return await this.request.put(`${this.baseUrl}/api/sales-invoices/${id}`, {
      headers: this.getHeaders(token),
      data,
    });
  }

  async deleteInvoice(id: number | string, token: string): Promise<APIResponse> {
    return await this.request.delete(`${this.baseUrl}/api/sales-invoices/${id}`, {
      headers: this.getHeaders(token),
    });
  }
}