def chunk_text(text: str, chunk_size: int = 500, chunk_overlap: int = 100):
    if not text:
        return []
    
    chunks = []
    start = 0
    
    while start < len(chunks):
        end = start + chunk_size
        chunk = text[start:end].strip()

        if chunk:
            chunks.append(chunk)
        
        start += chunk_size - chunk_overlap
        return chunks