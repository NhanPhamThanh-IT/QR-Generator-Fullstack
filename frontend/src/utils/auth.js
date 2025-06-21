export function isAuthenticated() {
  // Đơn giản: kiểm tra có cookie tên access_token không
  return document.cookie.split(';').some(c => c.trim().startsWith('access_token='));
} 