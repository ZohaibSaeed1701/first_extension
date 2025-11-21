from groq import Groq
from app.core.config import GROQ_API_KEY

client = Groq(api_key=GROQ_API_KEY)

def ask_groq(question: str, context_text: str):
    """
    Sends question and context to Groq GPT model and returns answer
    """
    completion = client.chat.completions.create(
        model="openai/gpt-oss-120b",
        messages=[
            {"role": "user", "content": f"{context_text}\n\nQuestion: {question}"}
        ],
        temperature=1,
        max_completion_tokens=8192,
        top_p=1,
        reasoning_effort="medium",
        stream=False,  # Step 1 simple: no streaming yet
        stop=None
    )

    return completion.choices[0].message.content
