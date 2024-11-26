import React, { useState } from "react";
import axios from "axios";

const ImageUpload = ({ onResult }) => {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image!");

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.post("http://localhost:5000/analyze", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onResult(response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Analyze</button>
    </div>
  );
};

export default ImageUpload;
