import { useQuery } from '@tanstack/react-query';

import type { ApiParams, QueryOpt } from '@/shared/types/commons';
import productAPI from './services';
import type { TProduct } from './types';

const QUERY_KEY = 'users';

export const useProducts = (params?: ApiParams, options?: QueryOpt<TProduct[]>) => {
  return useQuery({
    queryKey: [QUERY_KEY, params],
    queryFn: () => productAPI.getProducts(params).then(res => res.data),
    ...options,
  });
};
