import API from "../api/axiosInstance.js";

/** * Send a contact message to the backend.
 * @param {Object} data - Contact form data (subject, message, etc.)
 * @returns {Promise<Object>} - API response
 */
export const sendContactMessage = async (data) => {
    const response = await API.post('/contact/create', data);
    return response.data;
}