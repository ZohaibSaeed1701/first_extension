const BASE_URL = import.meta.env.VITE_BACKEND_URL;
// Ye automatically .env se URL lega

export const askQuestion = async (file, question) => {
  const formData = new FormData();
  formData.append("pdf", file);
  formData.append("question", question);

  const res = await fetch(`${BASE_URL}/ask-question`, {
    method: "POST",
    body: formData
  });

  if (!res.ok) {
    throw new Error("Failed to fetch answer");
  }

  return await res.json();
};
