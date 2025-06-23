from pydantic import BaseModel

class ContactCreate(BaseModel):
    subject: str
    message: str