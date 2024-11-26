import axios from "axios";

export const analyzeImage = (imageData) => {
  return axios.post("http://localhost:5000/analyze", imageData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
