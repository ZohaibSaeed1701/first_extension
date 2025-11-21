from fastapi import APIRouter, UploadFile, Form
from app.utils.pdf_parser import extract_pdf_text
from app.core.ai_client import ask_groq

router = APIRouter()

@router.post("/ask-question")
async def ask_question(pdf: UploadFile, question: str = Form(...)):
    # Save uploaded PDF temporarily
    file_location = f"/tmp/{pdf.filename}"
    with open(file_location, "wb") as f:
        f.write(await pdf.read())
    
    # Extract PDF text
    pdf_text = extract_pdf_text(file_location)
    
    # Ask Groq
    answer = ask_groq(question=question, context_text=pdf_text)
    
    return {"answer": answer}
