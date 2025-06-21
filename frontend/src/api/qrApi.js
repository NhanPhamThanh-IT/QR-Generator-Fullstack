export async function generateQrCode(text) {
  const res = await fetch("http://localhost:8000/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ text }),
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.detail || "Error generating QR code");
  }
  const data = await res.json();
  return data.qr_code;
} 