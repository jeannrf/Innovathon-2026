from pathlib import Path

folders = [
    "backend/app/api/routes",
    "backend/app/api/schemas",
    "backend/app/rag",
    "backend/app/agent",
    "backend/app/services",
    "backend/app/db/repositories",
    "backend/app/core",
    "backend/app/utils",
    "backend/data/raw",
    "backend/data/processed",
    "backend/data/indexes",
    "backend/scripts",
    "backend/tests",
]

files = [
    "backend/app/main.py",
    "backend/app/config.py",
    "backend/app/dependencies.py",
    "backend/app/exceptions.py",

    "backend/app/api/routes/chat.py",
    "backend/app/api/routes/health.py",
    "backend/app/api/routes/feedback.py",
    "backend/app/api/schemas/chat_schema.py",
    "backend/app/api/schemas/feedback_schema.py",

    "backend/app/rag/ingest.py",
    "backend/app/rag/chunker.py",
    "backend/app/rag/embedder.py",
    "backend/app/rag/retriever.py",
    "backend/app/rag/reranker.py",
    "backend/app/rag/generator.py",
    "backend/app/rag/pipeline.py",
    "backend/app/rag/prompts.py",

    "backend/app/agent/agent.py",
    "backend/app/agent/tools.py",
    "backend/app/agent/router.py",
    "backend/app/agent/memory.py",

    "backend/app/services/llm_service.py",
    "backend/app/services/embedding_service.py",
    "backend/app/services/vector_store_service.py",
    "backend/app/services/document_service.py",

    "backend/app/db/database.py",
    "backend/app/db/models.py",
    "backend/app/db/repositories/chat_repository.py",
    "backend/app/db/repositories/feedback_repository.py",

    "backend/app/core/logging.py",
    "backend/app/core/security.py",
    "backend/app/core/constants.py",

    "backend/app/utils/text_cleaning.py",
    "backend/app/utils/file_loader.py",
    "backend/app/utils/validators.py",

    "backend/scripts/run_ingest.py",
    "backend/scripts/seed_data.py",
    "backend/scripts/reset_vector_db.py",

    "backend/tests/test_chat.py",
    "backend/tests/test_retriever.py",
    "backend/tests/test_chunker.py",

    "backend/.env",
    "backend/.env.example",
    "backend/requirements.txt",
    "backend/pyproject.toml",
    "backend/Dockerfile",
    "backend/docker-compose.yml",
    "backend/README.md",
]

for folder in folders:
    Path(folder).mkdir(parents=True, exist_ok=True)

for file in files:
    Path(file).touch(exist_ok=True)

print("Estructura backend creada correctamente. ")