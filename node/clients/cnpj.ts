import { ExternalClient } from "@vtex/api";
import type { IOContext } from "@vtex/api";

export default class Cnpj extends ExternalClient {
  constructor(ctx: IOContext) {
    super('https://receitaws.com.br/v1/', ctx);
  }

  async searchCnpj(cnpj: string): Promise<unknown> {
    return this.http.get(`cnpj/${cnpj}`);
  }
}
