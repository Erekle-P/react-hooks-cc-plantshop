import React, { useState } from "react";

function PlantCard({ plant, onDelete }) {
  const [isInStock, setIsInStock] = useState(true);

  const toggleStockStatus = () => {
    setIsInStock(!isInStock);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button
        className={isInStock ? "primary" : ""}
        onClick={toggleStockStatus}
      >
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>
      <button onClick={() => onDelete(plant.id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
