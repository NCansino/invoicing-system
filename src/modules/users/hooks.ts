import { useQuery } from '@tanstack/react-query';

import type { ApiParams, QueryOpt } from '@/shared/types/commons';
import userAPI from './services';
import { type TUser } from './types';

const QUERY_KEY = 'users';

export const useUsers = (params?: ApiParams, options?: QueryOpt<TUser[]>) => {
  return useQuery({
    queryKey: [QUERY_KEY, params],
    queryFn: () => userAPI.getUsers(params).then(res => res.data),
    ...options,
  });
};

export const useUser = (id: string, options?: QueryOpt<TUser>) => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => userAPI.getUserById(id).then(res => res.data),
    ...options,
  });
};
