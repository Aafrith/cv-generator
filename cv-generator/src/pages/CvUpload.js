import React, { useState } from 'react';

const CvUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      alert(`Uploading ${selectedFile.name}`);
      // Implement the actual upload logic here
    } else {
      alert('No file selected!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-8">Upload Your CV</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleUpload}
        className="bg-green-500 text-white p-3 rounded"
      >
        Upload CV
      </button>
    </div>
  );
};

export default CvUpload;
