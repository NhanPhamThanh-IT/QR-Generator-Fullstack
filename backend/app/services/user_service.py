from app.db.session import db, Collections
from app.core.security import hash_password, verify_password
from app.models.user_model import UserInDB

async def get_user_by_email(email: str):
    user = await db[Collections.user_collection].find_one({"email": email})
    if user:
        return UserInDB(id=str(user["_id"]), email=user["email"], hashed_password=user["hashed_password"])
    return None

async def create_user(email: str, password: str):
    hashed_pw = hash_password(password)
    user = {"email": email, "hashed_password": hashed_pw}
    result = await db[Collections.user_collection].insert_one(user)
    return str(result.inserted_id)

async def authenticate_user(email: str, password: str):
    user = await get_user_by_email(email)
    if user and verify_password(password, user.hashed_password):
        return user
    return None
