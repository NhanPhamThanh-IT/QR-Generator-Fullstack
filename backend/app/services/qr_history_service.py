from bson import ObjectId
from app.db.session import db, Collections

async def create_qr_history(user_email: str, data_type: str, input: str, qr_color: str, bg_color: str, size: int, corner_radius: int, logo: str, output_format: str, timestamp: str):
    """
    Insert a new QR code history record for a user.
    """
    qr_history = {
        "user_email": user_email,
        "data_type": data_type,
        "input": input,
        "qr_color": qr_color,
        "bg_color": bg_color,
        "size": size,
        "corner_radius": corner_radius,
        "logo": logo,
        "output_format": output_format,
        "timestamp": timestamp,
    }
    result = await db[Collections.qr_history_collection].insert_one(qr_history)
    return str(result.inserted_id)

async def get_qr_history_by_user(user_email: str):
    """
    Retrieve all QR code history records for a user, sorted by timestamp (descending).
    Converts MongoDB ObjectId to string and removes internal fields for clean API response.
    """
    cursor = db[Collections.qr_history_collection].find({"user_email": user_email}).sort("timestamp", -1)
    history_list = []
    async for document in cursor:
        document["id"] = str(document["_id"])
        document.pop("_id", None)
        history_list.append(document)
    return history_list 

async def clear_qr_history_by_user(user_email: str):
    """
    Clear all QR code history records for a user.
    """
    result = await db[Collections.qr_history_collection].delete_many({"user_email": user_email})
    return result.deleted_count

async def delete_qr_history_by_id(qr_id: str) -> int:
    """
    Delete a specific QR code history record by ID for a user.

    Args:
        qr_id (str): The string representation of the QR code document's ObjectId.

    Returns:
        int: Number of documents deleted (0 or 1).
    """
    try:
        object_id = ObjectId(qr_id)
    except Exception as e:
        return 0

    result = await db[Collections.qr_history_collection].delete_one({"_id": object_id})
    return result.deleted_count