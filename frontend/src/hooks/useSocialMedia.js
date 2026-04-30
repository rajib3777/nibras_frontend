import { useQuery } from '@tanstack/react-query';
import { getSiteSettings } from '../api/core';

export const useSocialMedia = () => {
  return useQuery({
    queryKey: ['social-media'],
    queryFn: async () => {
      const settings = await getSiteSettings();
      return {
        facebook: settings.facebook,
        instagram: settings.instagram,
        youtube: settings.youtube,
        whatsapp: settings.whatsapp,
      };
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};
