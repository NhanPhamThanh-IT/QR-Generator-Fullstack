import API from '../api/axiosInstance';

/**
 * Create a new QR code history record in the backend.
 * @param {Object} entry - QR history data (matches backend schema, except user_email)
 * @returns {Promise<Object>} - API response
 */
export async function createQR(entry) {
  const response = await API.post('/qr-history/create', entry);
  return response.data;
}

export const generateQR = async (payload) => {
  const res = await API.post('/qr/generate', payload);
  return res.data.image;
};