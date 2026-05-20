"""
    Mock de información: Clasifica la intención que tiene el usuario y la
    información que este desea saber.
"""

def user_intenttion(message: str) -> str:

    text = message.lower().strip()

    greetings = [
        "hola",
        "buenas",
        "hey",
        "qué tal",
        "que tal",
    ]

    navigation_words = [
        "inscribo",
        "inscripción",
        "inscripcion",
        "registro",
        "registrarme",
        "postular",
        "formulario",
    ]

    informational_words = [
        "cuándo",
        "cuando",
        "dónde",
        "donde",
        "qué",
        "que",
        "requisitos",
        "cronograma",
        "premios",
        "equipos",
        "mentores",
        "jurado",
    ]

    if any(word in text for word in greetings):
        return "greetings"
    
    if any(word in text for word in navigation_words):
        return "navegación"
    
    if any(word in text for word in informational_words):
        return "informacion"