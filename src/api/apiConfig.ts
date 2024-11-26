import {
  useQuery,
  useMutation,
  QueryKey,
  UseQueryOptions,
  UseMutationOptions,
} from '@tanstack/react-query';
import queryClient from './queryClient';
import {AxiosError} from 'axios';

export const useApiGet = <TQueryFnData = unknown, TError = AxiosError>(
  queryKey: QueryKey,
  queryFn: () => Promise<TQueryFnData>,
  options?: Omit<UseQueryOptions<TQueryFnData, TError>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery<TQueryFnData, TError>({
    queryKey,
    queryFn,
    ...options,
  });
};

export const useApiSend = <
  TData = unknown,
  TError = AxiosError,
  TVariables = void,
>(
  fn: (variables: TVariables) => Promise<TData>,
  onSuccess?: (data: TData) => void,
  onError?: (error: TError) => void,
  invalidateKey?: QueryKey[],
  options?: Omit<UseMutationOptions<TData, TError, TVariables>, 'mutationFn'>,
) => {
  return useMutation<TData, TError, TVariables>({
    mutationFn: fn,
    onSuccess: data => {
      if (invalidateKey) {
        invalidateKey.forEach(key => {
          queryClient.invalidateQueries({queryKey: key});
        });
      }
      onSuccess && onSuccess(data);
    },
    onError: onError,
    retry: 2,
    ...options,
  });
};
