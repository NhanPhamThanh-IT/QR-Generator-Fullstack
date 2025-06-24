from pydantic import BaseModel
from typing import Optional

class QRHistoryCreate(BaseModel):
    """
    Schema for creating a QR code history record.
    All fields are required except logo.
    """
    data_type: str  # Type of data encoded (e.g., text, url, email)
    input: str  # The actual data encoded in the QR code
    qr_color: str  # Foreground color of the QR code
    bg_color: str  # Background color of the QR code
    size: int  # Size of the QR code in pixels
    corner_radius: int  # Corner radius for QR code styling
    logo: Optional[str] = None  # Optional logo image (base64 or URL)
    output_format: str  # Output format (e.g., png, svg)
    timestamp: str  # ISO timestamp of creation 