import { APIRequestContext, APIResponse } from "@playwright/test";

export class ArticleApiService {
  private request: APIRequestContext;
  private baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = process.env.API_URL || "";
  }

  private getHeaders(token: string) {
    return {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    };
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
}