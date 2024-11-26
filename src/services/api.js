import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const analyzeImage = (imageData) => API.post("/analyze", imageData);
export const getRemedies = (pestOrDisease) => API.get(`/remedies/${pestOrDisease}`);
export const getNearbyAgrovets = (location) => API.get(`/agrovets`, { params: location });
