import { type QueryKey, type UseQueryOptions } from '@tanstack/react-query';

export type ApiResponse<T> = {
  data: T;
};

export type ApiParams = {
  page: number;
  per_page: number;
};

export type QueryOpt<T> = Omit<UseQueryOptions<T, unknown, T, QueryKey>, 'initialData'>;

export type TChildren = {
  children: React.ReactNode;
};
