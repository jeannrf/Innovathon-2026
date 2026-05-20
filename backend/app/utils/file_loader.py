from pathlib import Path

def load_document(doc_path: Path) -> str:
    if not doc_path.exists():
        raise FileNotFoundError("No se encontró la ruta archivo. ")
    
    return doc_path.read_text(encodign=utf-8)

def load_documents_folder(folder_path: str) -> list[dict]:
    folder = Path(folder_path)

    if not folder.exists():
        raise FileNotFoundError("No se encontró la ruta del folder. ")
    
    content = []
    allowed_extensions = [".md", ".pdf"]

    for doc in folder.iterdir():
        if doc.is_file() and doc.suffix.lower() in allowed_extensions:
            text = load_document(doc)
            content.append({
                "text": text,
                "metadata": {
                    "source": doc.name,
                    "path": str(doc)
                }
           })
    
    return content