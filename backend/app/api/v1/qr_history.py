from fastapi import APIRouter, HTTPException, status, Depends
from app.schemas.qr_history_schema import QRHistoryCreate
from app.services.qr_history_service import (
    create_qr_history,
    get_qr_history_by_user,
    clear_qr_history_by_user,
    delete_qr_history_by_id
)
from app.api.deps.auth import get_current_user
from typing import Any, Dict

router = APIRouter()

@router.post("/create", status_code=status.HTTP_201_CREATED)
async def create_history(
    qr_history: QRHistoryCreate,
    current_user: dict = Depends(get_current_user)
) -> Dict[str, Any]:
    """
    Create a new QR code history record for the current user.
    Returns a success message and the new record's ID.
    """
    try:
        qr_id = await create_qr_history(
            user_email=current_user["email"],
            data_type=qr_history.data_type,
            input=qr_history.input,
            qr_color=qr_history.qr_color,
            bg_color=qr_history.bg_color,
            size=qr_history.size,
            corner_radius=qr_history.corner_radius,
            logo=qr_history.logo,
            output_format=qr_history.output_format,
            timestamp=qr_history.timestamp
        )
        return {"message": "QR history created successfully", "id": qr_id}
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))

@router.get("/list", response_model=Dict[str, Any])
async def list_history(current_user: dict = Depends(get_current_user)) -> Dict[str, Any]:
    """
    Get all QR code history records for the current user.
    Returns a list of history records.
    """
    try:
        history = await get_qr_history_by_user(current_user["email"])
        return {"history": history}
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))
    
@router.delete("/clear-history", status_code=status.HTTP_204_NO_CONTENT)
async def clear_history(current_user: dict = Depends(get_current_user)) -> None:
    """
    Clear all QR code history records for the current user.
    Returns a 204 No Content response on success.
    """
    try:
        deleted_count = await clear_qr_history_by_user(current_user["email"])
        if deleted_count == 0:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No history found to clear")
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))
    
@router.delete("/delete/{qr_id}", status_code=status.HTTP_200_OK)
async def delete_history(
    qr_id: str,
) -> None:
    """
    Delete a specific QR code history record by ID for the current user.
    Returns a 200 OK response on success.
    """
    try:
        deleted_count = await delete_qr_history_by_id(qr_id)
        if deleted_count == 0:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="QR history not found")
        return { "message": "QR history deleted successfully" }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))