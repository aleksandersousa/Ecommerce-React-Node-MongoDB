import api from './api';

export class ApiServices {
  async getProducts(category) {
    const res = await api.get(category ? `/products?${category}` : '/products');
    return res;
  }
}
