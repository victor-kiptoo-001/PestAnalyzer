import React, { useState } from "react";
import axios from "axios";

const ImageUpload = ({ onUpload }) => {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!image) return alert("Please upload an image!");

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.post("/api/analyze", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onUpload(response.data); // Pass analysis result to parent component
    } catch (error) {
      console.error("Error analyzing image:", error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Analyze</button>
    </div>
  );
};

export default ImageUpload;
