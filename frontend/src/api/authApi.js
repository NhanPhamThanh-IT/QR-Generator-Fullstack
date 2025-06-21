export async function signup(username, password, email) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, email }),
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.detail || "Đăng ký thất bại");
  }
  return await res.json();
}

export async function login(username, password) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.detail || "Đăng nhập thất bại");
  }
  return await res.json();
}

export async function getMe() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
    credentials: "include",
  });
  if (!res.ok) return null;
  return await res.json();
}

export async function logout() {
  await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
} 