"""
    health.py solo sirve para comprobar el estado de la ruta.
"""

from fastapi import APIRouter

router = APIRouter() #Clase que subdivide las rutas, creadora de endopoints

@router.get("/health") #Un get para un JSON sencillo
def chequeo_api():
    return{
        "status": "ok",
        "service": "Innovathon AI Backend"
    }

