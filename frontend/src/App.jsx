import React, { useState } from "react";
import FileUploader from "./components/FileUploader";
import QuestionInput from "./components/QuestionInput";
import AnswerDisplay from "./components/AnswerDisplay";
import { askQuestion } from "./services/api";
import "./styles/app.css";

const App = () => {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!file || !question) {
      alert("Please upload a PDF and type a question.");
      return;
    }

    setLoading(true);
    setAnswer("Processing...");

    try {
      const data = await askQuestion(file, question);
      setAnswer(data.answer);
    } catch (err) {
      setAnswer("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: "300px", padding: "10px", fontFamily: "Arial, sans-serif" }}>
      <h2>PDF QA</h2>
      <FileUploader file={file} setFile={setFile} />
      <QuestionInput question={question} setQuestion={setQuestion} />
      <button onClick={handleAsk} style={{ width: "100%", padding: "8px" }}>
        {loading ? "Processing..." : "Ask"}
      </button>
      <AnswerDisplay answer={answer} />
    </div>
  );
};

export default App;
