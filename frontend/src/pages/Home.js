import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Welcome to Pest and Disease Analyzer</h1>
    <Link to="/analysis">
      <button>Start Analysis</button>
    </Link>
  </div>
);

export default Home;
