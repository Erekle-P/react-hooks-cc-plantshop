import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  // Fetch plants from API
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants} />
    </div>
  );
}

export default App;
