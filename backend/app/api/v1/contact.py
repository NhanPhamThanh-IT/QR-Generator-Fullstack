from fastapi import APIRouter, HTTPException, status, Depends
from app.schemas.contact_schema import ContactCreate
from app.services.contact_service import create_contact
from app.api.deps.auth import get_current_user

router = APIRouter()

@router.post("/create", status_code=status.HTTP_201_CREATED)
async def contact(
    contact: ContactCreate,
    current_user: dict = Depends(get_current_user)
):
    """
    Create a new contact message using email from the token.
    """
    try:
        contact_id = await create_contact(
            email=current_user["email"],
            subject=contact.subject,
            message=contact.message
        )
        return {"message": "Contact message created successfully", "id": contact_id}
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))
