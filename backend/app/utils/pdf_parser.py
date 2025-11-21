import PyPDF2

def extract_pdf_text(pdf_path: str):
    """
    Extracts text from all pages of a PDF file
    """
    text = ""
    with open(pdf_path, "rb") as f:
        reader = PyPDF2.PdfReader(f)
        for page in reader.pages:
            text += page.extract_text() + "\n"
    return text
