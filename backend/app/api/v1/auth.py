from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from app.schemas.user_schema import UserCreate, Token
from app.services.user_service import create_user, authenticate_user, get_user_by_email
from app.core.jwt import create_access_token
from app.api.deps.auth import get_current_user
from app.api.deps.roles import require_role

router = APIRouter()

@router.post("/register", response_model=Token)
async def register(user: UserCreate):
    existing_user = await get_user_by_email(user.email)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    await create_user(user.name, user.email, user.password, role="user")
    token = create_access_token(data={"sub": user.email, "role": "user"})
    return {"access_token": token, "token_type": "bearer"}

@router.post("/login", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = await authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid credentials")
    token = create_access_token(data={"sub": user["email"], "role": user["role"]})
    return {"access_token": token, "token_type": "bearer"}

@router.post("/logout")
async def logout():
    return {"message": "Logged out successfully"}

@router.get("/profile")
async def get_profile(user=Depends(get_current_user)):
    return {"email": user["email"], "role": user["role"]}

@router.get("/admin/profile")
async def admin_profile(user=Depends(require_role(["admin"]))):
    return {"message": f"Welcome Admin {user['email']}"}
