import { useQuery } from '@tanstack/react-query';
import apiClient from '../api/client';

export const useSocialMedia = () => {
  return useQuery({
    queryKey: ['social-media'],
    queryFn: async () => {
      const response = await apiClient.get('/core/social-media/');
      return response.data;
    },
  });
};
