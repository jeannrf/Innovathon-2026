"""
    Este archivo sirve para detallar el cuerpo de las preguntas y respuestas
    que se tendrán con el modelo.
"""

from pydantic import BaseModel #Libreria para serializar datos y verificar si es correcto su tipo
from typing import List, Dict, Any, Optional

#Clase para las preguntas
class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = None #Campo no obligatorio

#Clase para las respuestas
class ChatResponse(BaseModel):
    message: str
    sources: List[Dict[str, Any]] = []
    actions: Optional[Dict[str, Any]] = None #Campo no obligatorio