from fastapi import APIRouter, Depends
from app.api.deps import get_current_user
from app.schemas.user_schema import UserOut

router = APIRouter()

@router.get("/me", response_model=UserOut)
async def get_me(current_user = Depends(get_current_user)):
    return {"id": current_user.id, "email": current_user.email}
