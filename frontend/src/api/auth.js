import api from './index';

export const login    = (creds)   => api.post('/token/', creds).then(r => r.data);
export const refresh  = (token)   => api.post('/token/refresh/', { refresh: token }).then(r => r.data);
export const register = (data)    => api.post('/users/register/', data).then(r => r.data);
export const getMe    = ()        => api.get('/users/me/').then(r => r.data);
