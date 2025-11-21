import React from "react";

const QuestionInput = ({ question, setQuestion }) => {
  return (
    <textarea
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      placeholder="Type your question here..."
      rows={4}
      style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
    />
  );
};

export default QuestionInput;
