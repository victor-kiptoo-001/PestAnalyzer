const RemedyRecommendations = ({ remedies }) => {
    if (!remedies || remedies.length === 0) return null;
  
    return (
      <div>
        <h2>Recommendations</h2>
        <ul>
          {remedies.map((remedy, index) => (
            <li key={index}>
              <strong>{remedy.type}:</strong> {remedy.name} ({remedy.instructions})
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RemedyRecommendations;
  