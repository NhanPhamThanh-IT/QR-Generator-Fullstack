from fastapi import APIRouter, HTTPException, Response, Request, Depends
from pydantic import BaseModel, EmailStr
from .qr_generator import generate_qr_code
from .auth import (
    create_user, authenticate_user, create_access_token, get_current_user
)
from .db import db
from datetime import timedelta, datetime

router = APIRouter()

class QRRequest(BaseModel):
    text: str

class UserCreate(BaseModel):
    username: str
    password: str
    email: EmailStr

class UserOut(BaseModel):
    username: str
    email: EmailStr
    created_at: datetime

class LoginRequest(BaseModel):
    username: str
    password: str

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str
    created_at: datetime = None

@router.post("/auth/signup", response_model=UserOut)
async def signup(user: UserCreate):
    created = await create_user(user.username, user.password, user.email)
    if created:
        return {
            "username": created["username"],
            "email": created["email"],
            "created_at": created["created_at"]
        }
    raise HTTPException(status_code=400, detail="User already exists")

@router.post("/auth/login")
async def login(login_req: LoginRequest, response: Response):
    user = await authenticate_user(login_req.username, login_req.password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    access_token = create_access_token({"sub": user["username"]})
    response.set_cookie(key="access_token", value=access_token, httponly=True, max_age=60*60*24)
    return {"msg": "Login successful"}

@router.post("/auth/logout")
async def logout(response: Response):
    response.delete_cookie("access_token")
    return {"msg": "Logged out"}

@router.get("/auth/me", response_model=UserOut)
async def me(user=Depends(get_current_user)):
    return {
        "username": user["username"],
        "email": user.get("email"),
        "created_at": user.get("created_at")
    }

@router.post("/generate")
async def generate_qr(qr_request: QRRequest, user=Depends(get_current_user)):
    try:
        img_base64 = generate_qr_code(qr_request.text)
        return {"qr_code": img_base64}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/contact")
async def contact(form: ContactForm):
    form.created_at = datetime.utcnow()
    await db["contacts"].insert_one(form.dict())
    return {"msg": "Liên hệ của bạn đã được gửi!"} 