import api from './index';

export const submitDonation = (data) => api.post('/finance/donate/', data).then(r => r.data);
export const getMyPayments  = ()     => api.get('/finance/payments/').then(r => r.data);
