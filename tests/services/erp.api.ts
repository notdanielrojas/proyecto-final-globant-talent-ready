import { APIRequestContext, APIResponse } from "@playwright/test";

export class ErpApiService {
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

  async login(email: string, password: string): Promise<APIResponse> {
    return await this.request.post(`${this.baseUrl}/api/login`, {
      data: { email, password },
    });
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

  async createArticle(data: any, token: string): Promise<APIResponse> {
    return await this.request.post(`${this.baseUrl}/api/products`, {
      headers: this.getHeaders(token),
      data,
    });
  }

  async getArticleById(id: number | string, token: string): Promise<APIResponse> {
    return await this.request.get(`${this.baseUrl}/api/products/${id}`, {
      headers: this.getHeaders(token),
    });
  }

  async updateArticle(id: number | string, data: any, token: string): Promise<APIResponse> {
    return await this.request.put(`${this.baseUrl}/api/products/${id}`, {
      headers: this.getHeaders(token),
      data,
    });
  }

  async deleteArticle(id: number | string, token: string): Promise<APIResponse> {
    return await this.request.delete(`${this.baseUrl}/api/products/${id}`, {
      headers: this.getHeaders(token),
    });
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

  async deleteInvoice(id: number | string, token: string): Promise<APIResponse> {
    return await this.request.delete(`${this.baseUrl}/api/sales-invoices/${id}`, {
      headers: this.getHeaders(token),
    });
  }

  async createPayment(data: any, token: string): Promise<APIResponse> {
    return await this.request.post(`${this.baseUrl}/api/cobranzas`, {
      headers: this.getHeaders(token),
      data,
    });
  }

  async getPaymentById(id: number | string, token: string): Promise<APIResponse> {
    return await this.request.get(`${this.baseUrl}/api/cobranzas/${id}`, {
      headers: this.getHeaders(token),
    });
  }

  async deletePayment(id: number | string, token: string): Promise<APIResponse> {
    return await this.request.delete(`${this.baseUrl}/api/cobranzas/${id}`, {
      headers: this.getHeaders(token),
    });
  }
}