const AnalysisResult = ({ result }) => {
    if (!result) return null;
  
    return (
      <div>
        <h2>Analysis Result</h2>
        <p><strong>Disease/Pest:</strong> {result.name}</p>
        <p><strong>Confidence:</strong> {result.confidence}%</p>
      </div>
    );
  };
  
  export default AnalysisResult;
  