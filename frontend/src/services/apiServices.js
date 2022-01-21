import { publicRequest, userRequest } from './api';

export class ApiServices {
  async getProducts(category) {
    const res = await publicRequest.get(category ? `/products?${category}` : '/products');
    return res;
  }
  
  async getProduct(id) {
    const res = await publicRequest.get(`/products/${id}`);
    return res;
  }
}
