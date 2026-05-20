"""
    Mock de agente: Recibe la intencion del usuario y elabora una
    ChatResponse con la clase correspondiente.
"""

from app.agent.router import user_intenttion
from app.api.schemas.chat_schema import ChatRequest, ChatResponse
from app.rag.pipeline import answer_question

def handle_message(request: ChatRequest) -> ChatResponse:

    intention = user_intenttion(request.message)

    if intention == "greeting":
        return ChatResponse(
            message="¡Hola! Soy el asistente de la Innovathon. Puedo ayudarte con inscripciones, cronograma, requisitos y navegación por la página.",
            sources=[],
            actions=None
        )
    
    if intention == "navegacion":
        return ChatResponse(
            message="Puedes registrarte en la sección de inscripción de la página.",
            sources=[],
            actions={
                "type": "navigate",
                "target": "/registro"
            }
        )

    if intention == "informacion":
        return answer_question(
            question=request.message,
            session_id=request.session_id
        )
    
    return ChatResponse(
        message="Puedo ayudarte con dudas sobre la Innovathon, como inscripción, cronograma, requisitos, premios y navegación por la página.",
        sources=[],
        action=None
    )