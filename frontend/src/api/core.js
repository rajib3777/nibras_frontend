import api from './index';

export const getSliders    = ()       => api.get('/core/sliders/').then(r => r.data);
export const getTestimonials = ()    => api.get('/core/testimonials/').then(r => r.data);
export const getStatistics  = ()     => api.get('/core/statistics/').then(r => r.data);
export const getGallery     = (p)    => api.get('/core/gallery/', { params: p }).then(r => r.data);
export const getSiteSettings = ()   => api.get('/core/settings/').then(r => r.data);
export const getPage        = (slug) => api.get(`/core/pages/${slug}/`).then(r => r.data);
