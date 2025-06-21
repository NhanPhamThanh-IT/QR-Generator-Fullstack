from dotenv import load_dotenv
load_dotenv()
from motor.motor_asyncio import AsyncIOMotorClient
import os

MONGODB_URL = os.environ.get("MONGODB_URI")
DB_NAME = os.environ.get("MONGODB_DB")

client = AsyncIOMotorClient(MONGODB_URL)
db = client[DB_NAME]

def get_user_collection():
    return db["users"] 