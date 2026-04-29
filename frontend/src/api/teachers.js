import api from './index';

export const getTeachers      = (p)  => api.get('/users/teachers/', { params: p }).then(r => r.data);
export const getTeacherDetail = (id) => api.get(`/users/teachers/${id}/`).then(r => r.data);
