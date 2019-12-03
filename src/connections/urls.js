// BASE URL HERE
//let userId = '5dba3a935b3d2f5e04209da5'; /${userId}

export const API_BASE_URL = 'http://localhost:8080';
export const buildUrl = (path = '') => `${API_BASE_URL}/${path}`;
