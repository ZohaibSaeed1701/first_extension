import React from "react";

const FileUploader = ({ file, setFile }) => {
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
    </div>
  );
};

export default FileUploader;
