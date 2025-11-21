import React from "react";

const AnswerDisplay = ({ answer }) => {
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        padding: "10px",
        borderRadius: "5px",
        minHeight: "50px",
        marginTop: "10px"
      }}
    >
      {answer || "Answer will appear here"}
    </div>
  );
};

export default AnswerDisplay;
