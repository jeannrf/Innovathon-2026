"""
    Pipeline de respuesta del bot: Responderá únicamente a las consultas que
    sean del tipo "informativas".
"""
from app.api.schemas.chat_schema import ChatResponse
from app.rag.generator import generate_answer
            
def answer_question(question: str, session_id: str | None = None) -> ChatResponse:
    answer = generate_answer(question)

    return ChatResponse(
        message=answer,
        sources=[],
        actions=None
    )