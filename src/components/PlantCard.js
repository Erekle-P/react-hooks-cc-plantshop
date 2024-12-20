import React from "react";

function PlantCard({ plant, onDelete }) {
  // const handleDelete = () => {
  //   onDelete(plant.id);
  // };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {/* <button onClick={handleDelete}>Delete</button> */}
      {plant.isSoldOut ? (
        <button>Out of Stock</button>
      ) : (
        <button className="primary">In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
