import React, { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import AnalysisResult from "../components/AnalysisResult";
import RemedyRecommendations from "../components/RemedyRecommendations";

const Analysis = () => {
  const [result, setResult] = useState(null);

  const handleAnalysisResult = (data) => {
    setResult(data);
  };

  return (
    <div>
      <h1>Analyze Your Crop</h1>
      <ImageUpload onResult={handleAnalysisResult} />
      {result && (
        <>
          <AnalysisResult result={result} />
          <RemedyRecommendations remedies={result.remedies} />
        </>
      )}
    </div>
  );
};

export default Analysis;
