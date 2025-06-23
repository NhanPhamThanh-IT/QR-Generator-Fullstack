from pydantic import BaseModel, EmailStr

class ContactInDB(BaseModel):
    id: str
    email: EmailStr
    subject: str
    message: str