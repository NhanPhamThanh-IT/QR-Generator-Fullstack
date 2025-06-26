from fastapi import APIRouter
from pydantic import BaseModel
import qrcode
from io import BytesIO
import base64
from typing import Optional
from PIL import Image
import sys

router = APIRouter()

class QRRequest(BaseModel):
    data: str
    qr_color: str = "#000000"
    bg_color: str = "#ffffff"
    size: int = 200
    logo: Optional[str] = None  # base64 string (data URL or raw)
    # Extend with more fields as needed

@router.post("/generate")
async def generate_qr(req: QRRequest):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=max(1, req.size // 40),
        border=4,
    )
    qr.add_data(req.data)
    qr.make(fit=True)
    img = qr.make_image(fill_color=req.qr_color, back_color=req.bg_color).convert("RGB")
    img = img.resize((req.size, req.size), Image.LANCZOS)

    # Overlay logo if provided
    if req.logo:
        try:
            # Remove data URL prefix if present
            if req.logo.startswith('data:image'):
                logo_data = req.logo.split(',')[1]
            else:
                logo_data = req.logo
            logo_bytes = base64.b64decode(logo_data)
            logo_img = Image.open(BytesIO(logo_bytes)).convert("RGBA")
            # Resize logo to fit in the center (e.g., 20-25% of QR size)
            logo_size = req.size // 4
            logo_img = logo_img.resize((logo_size, logo_size), Image.LANCZOS)
            # Center position
            pos = ((img.size[0] - logo_size) // 2, (img.size[1] - logo_size) // 2)
            img.paste(logo_img, pos, mask=logo_img)
        except Exception as e:
            print(f"Logo overlay failed: {e}", file=sys.stderr)

    buffered = BytesIO()
    img.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode()
    return {"image": f"data:image/png;base64,{img_str}"} 