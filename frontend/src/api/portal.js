import api from './index';

export const getMyAttendance = () => api.get('/portal/attendance/').then(r => r.data);
export const getMyResults    = () => api.get('/portal/results/').then(r => r.data);
