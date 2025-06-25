from pydantic import BaseModel, EmailStr

class UserInDB(BaseModel):
    id: str
    name: str
    email: EmailStr
    hashed_password: str
    role: str
