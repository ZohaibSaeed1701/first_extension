document.getElementById("askBtn").addEventListener("click", async () => {
    const question = document.getElementById("question").value;
    const answerDiv = document.getElementById("answer");
    answerDiv.innerText = "Processing...";

    // Get PDF text from content.js
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {action: "get_pdf_text"}, async (response) => {
            const pdfText = response.pdfText;

            // Send to backend FastAPI
            try {
                const formData = new FormData();
                // Create a fake Blob if you only have URL/text for demo
                const blob = new Blob([pdfText], {type: "application/pdf"});
                formData.append("pdf", blob, "file.pdf");
                formData.append("question", question);

                const res = await fetch("http://localhost:8000/api/ask-question", {
                    method: "POST",
                    body: formData
                });

                const data = await res.json();
                answerDiv.innerText = data.answer || "No answer returned";
            } catch (err) {
                answerDiv.innerText = "Error: " + err.message;
            }
        });
    });
});
