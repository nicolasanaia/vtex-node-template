import { IOClients } from '@vtex/api'
import { Catalog } from '@vtex/clients';

import Status from './status'
import Cnpj from './cnpj'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status);
  }

  public get cnpj() {
    return this.getOrSet('cnpj', Cnpj);
  }

  public get catalog() {
    return this.getOrSet('catalog', Catalog);
  }
}
