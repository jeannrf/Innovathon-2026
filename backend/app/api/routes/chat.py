"""
    Petición POST para poder procesar un mensaje
"""

from fastapi import APIRouter
#Import de las clases declaradas en chat_schemas.py
from app.api.schemas.chat_schema import ChatRequest, ChatResponse

router = APIRouter()

#Petición POST
@router.post("/chat")
def ChatAnswer(request: ChatRequest):
    return ChatResponse(
        message=f"Mensaje recibido: {request.message}",
        sources=[],
        actions=None
    )