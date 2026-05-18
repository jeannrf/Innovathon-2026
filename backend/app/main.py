from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes.health import router as health_router
from app.api.routes.chat import router as chat_router

app = FastAPI(
    title="API Innovathon 2026",
    description="API para la Innovathon de Tinkuy Labs.",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(router=health_router, prefix="/api", tags=["Health"])
app.include_router(router=chat_router, prefix="/api", tags=["Chat"])

@app.get("/")
def root():
    return {
        "message": "Innovathon AI Backend está corriendo."
    }