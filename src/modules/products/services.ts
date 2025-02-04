import { type AxiosResponse } from 'axios';

import { type ApiParams } from '@/shared/types/commons';
import api from '@/shared/utils/api';
import ServerAccess from '@/shared/utils/server-access';
import type { TProduct } from './types';

class ProductAPI extends ServerAccess {
  constructor() {
    super({
      RESOURCE_PATH: '/products',
    });
  }

  createProduct(newProduct: TProduct): Promise<AxiosResponse<TProduct>> {
    return this.server.post('', newProduct);
  }

  getProducts(params?: ApiParams): Promise<AxiosResponse<TProduct[]>> {
    return this.server.get('', { params });
  }

  getProductById(id: string) {
    return this.server.get(`/${id}`);
  }

  updateProduct(id: string, product: Partial<TProduct>) {
    return this.server.put(`/${id}`, product);
  }

  deleteProduct(id: string) {
    return api.delete(`/${id}`);
  }
}

const productAPI = new ProductAPI();

export default productAPI;
