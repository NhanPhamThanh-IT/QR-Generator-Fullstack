import API from '../../../api/axiosInstance';

export async function saveToBackend(entry) {
  // entry must match backend QRHistoryCreate schema
  const res = await API.post('/qr-history/create', entry);
  return res.data;
}

export async function fetchBackendHistory() {
  const res = await API.get('/qr-history/list');
  return res.data.history;
} 