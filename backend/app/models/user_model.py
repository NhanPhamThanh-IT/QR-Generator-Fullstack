from pydantic import BaseModel, EmailStr

class UserInDB(BaseModel):
    id: str
    email: EmailStr
    hashed_password: str
