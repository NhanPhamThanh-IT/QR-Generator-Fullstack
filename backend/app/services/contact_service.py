from app.db.session import db, Collections

async def create_contact(email: str, subject: str, message: str):
    contact = {
        "email": email,
        "subject": subject,
        "message": message,
    }
    result = await db[Collections.contact_collection].insert_one(contact)
    return str(result.inserted_id)