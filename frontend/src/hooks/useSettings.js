import { useQuery } from '@tanstack/react-query';
import { getSiteSettings } from '../api/core';

export const useSettings = () => {
  return useQuery({
    queryKey: ['site-settings'],
    queryFn: getSiteSettings,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};
