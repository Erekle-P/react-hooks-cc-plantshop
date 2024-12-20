import React, { useState } from "react";

function NewPlantForm({ setPlants }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the new plant object without setting an ID
    const newPlant = { name, image, price: parseFloat(price) };

    // Fetch the current plants to get the last id and increment it
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        const lastId = data.length > 0 ? data[data.length - 1].id : 0;
        const plantWithId = { ...newPlant, id: lastId + 1 };

        // Post the new plant to the server with the correct id
        fetch("http://localhost:6001/plants", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(plantWithId),
        })
          .then((response) => response.json())
          .then((addedPlant) => {
            // Update the state with the new plant
            setPlants((prevPlants) => [...prevPlants, addedPlant]);

            // Reset the form fields
            setName("");
            setImage("");
            setPrice("");
          });
      });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
