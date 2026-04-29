import api from './index';

export const getNews       = (p)    => api.get('/news/articles/', { params: p }).then(r => r.data);
export const getNewsDetail = (slug) => api.get(`/news/articles/${slug}/`).then(r => r.data);
export const getEvents     = (p)    => api.get('/news/events/', { params: p }).then(r => r.data);
export const getNotices    = (p)    => api.get('/news/notices/', { params: p }).then(r => r.data);
export const getCategories = ()     => api.get('/news/categories/').then(r => r.data);
