"""
    Generador de respuestas: Mock generador de respuestas por parte del
    bot según el tipo de consulta.
"""
from app.rag.prompts import SYSTEM_PROMPT

def generate_answer(question: str, context: str | None = None) -> str:
    return(
        "Hola! Soy el Agente de Innovathon: Lauch with AI. Ahorita no puedo darte respuestas en base a datos reales."
        f"Más adelante responderé usando documentos reales. Pregunta recibida: {question}"
    )