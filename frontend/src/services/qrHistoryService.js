import API from '../api/axiosInstance';

/**
 * Fetch all QR code history records for the current user from the backend.
 * @returns {Promise<Array>} - List of QR history records
 */
export async function getQRHistory() {
    const response = await API.get('/qr-history/list');
    return response.data.history;
}