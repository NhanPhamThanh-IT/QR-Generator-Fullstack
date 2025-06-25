from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1 import auth, contact, qr_history

app = FastAPI(title="Reusable FastAPI Auth App")

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/v1/auth", tags=["Auth"])
app.include_router(contact.router, prefix="/api/v1/contact", tags=["Contact"])
app.include_router(qr_history.router, prefix="/api/v1/qr-history", tags=["QRHistory"])