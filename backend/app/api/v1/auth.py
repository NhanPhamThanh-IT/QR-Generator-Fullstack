from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from app.schemas.user_schema import UserCreate, Token
from app.services.user_service import create_user, authenticate_user
from app.core.jwt import create_access_token

router = APIRouter()

@router.post("/register", response_model=Token)
async def register(user: UserCreate):
    existing_user = await authenticate_user(user.email, user.password)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    await create_user(user.email, user.password)
    token = create_access_token(data={"sub": user.email})
    return {"access_token": token, "token_type": "bearer"}

@router.post("/login", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = await authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    token = create_access_token(data={"sub": user.email})
    return {"access_token": token, "token_type": "bearer"}

@router.post("/logout")
async def logout():
    return {"message": "Logged out successfully"}