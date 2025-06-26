import API from '../api/axiosInstance';

/**
 * Fetch all QR code history records for the current user from the backend.
 * @returns {Promise<Array>} - List of QR history records
 */
export async function getQRHistory() {
    const response = await API.get('/qr-history/list');
    return response.data.history;
}

/**
 * Fetch a specific QR code history record by ID.
 * @param {string} id - The ID of the QR history record to fetch
 * @returns {Promise<Object>} - The QR history record
 * */
export async function deleteQRHistoryByID(id) {
    const response = await API.delete(`/qr-history/delete/${id}`);
    return response.data;
}

/**
 *  Delete a specific QR code history record by ID.
 *  @returns {Promise<Object>} - API response
 */
export async function clearQRHistory() {
    const response = await API.delete('/qr-history/clear-history');
    return response.data;
}