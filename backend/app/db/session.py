from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import settings

client = AsyncIOMotorClient(settings.MONGODB_URL)
db = client[settings.MONGODB_DB]

class Collections:
    user_collection = settings.USER_COLLECTION
    contact_collection = settings.CONTACT_COLLECTION
    qr_history_collection = settings.QR_HISTORY_COLLECTION
