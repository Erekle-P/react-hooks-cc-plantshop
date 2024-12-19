import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  // Fetch plants on component mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // Handle plant deletion
  const handleDelete = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setPlants(plants.filter((plant) => plant.id !== id));
      });
  };

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search />
      <PlantList plants={plants} onDelete={handleDelete} />
    </main>
  );
}

export default PlantPage;
