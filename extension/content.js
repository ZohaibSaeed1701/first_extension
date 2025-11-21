// content.js
// Extract PDF text from the page (basic example)
// Note: For real PDFs, consider using pdf.js for robust extraction

function extractPdfText() {
    let text = "";
    // Try to find PDF embed / iframe / text content
    document.querySelectorAll("embed, iframe, object").forEach(el => {
        if(el.src && el.src.endsWith(".pdf")){
            text += `PDF URL: ${el.src}\n`;
        }
    });
    return text || "PDF text extraction not implemented for this page.";
}

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.action === "get_pdf_text"){
        const pdfText = extractPdfText();
        sendResponse({pdfText: pdfText});
    }
});
