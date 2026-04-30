import { useQuery } from '@tanstack/react-query';
import { getSiteSettings } from '../api/core';

export const useSocialMedia = () => {
  return useQuery({
    queryKey: ['social-media'],
    queryFn: async () => {
      const settings = await getSiteSettings();
      return [
        { id: 1, platform: 'facebook', url: settings.facebook },
        { id: 2, platform: 'instagram', url: settings.instagram },
        { id: 3, platform: 'youtube', url: settings.youtube },
      ].filter(link => link.url);
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};
