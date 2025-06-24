import API from '../../../api/axiosInstance';

/**
 * Create a new QR code history record in the backend.
 * @param {Object} entry - QR history data (matches backend schema, except user_email)
 * @returns {Promise<Object>} - API response
 */
export async function createQRHistory(entry) {
  const response = await API.post('/qr-history/create', entry);
  return response.data;
}

/**
 * Fetch all QR code history records for the current user from the backend.
 * @returns {Promise<Array>} - List of QR history records
 */
export async function fetchQRHistory() {
  const response = await API.get('/qr-history/list');
  return response.data.history;
} 