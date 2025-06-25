from app.db.session import db, Collections
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

async def get_user_by_email(email: str):
    return await db[Collections.user_collection].find_one({"email": email})

async def create_user(name: str, email: str, password: str, role: str = "user"):
    hashed_password = pwd_context.hash(password)
    user = {"name": name, "email": email, "hashed_password": hashed_password, "role": role}
    await db[Collections.user_collection].insert_one(user)

async def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

async def authenticate_user(email: str, password: str):
    user = await get_user_by_email(email)
    if not user:
        return False
    if not await verify_password(password, user["hashed_password"]):
        return False
    return user
