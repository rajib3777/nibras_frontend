import api from './index';

export const getPrograms      = (p)    => api.get('/programs/', { params: p }).then(r => r.data);
export const getProgramDetail = (slug) => api.get(`/programs/${slug}/`).then(r => r.data);
export const submitAdmission  = (data) => api.post('/programs/admissions/apply/', data).then(r => r.data);
