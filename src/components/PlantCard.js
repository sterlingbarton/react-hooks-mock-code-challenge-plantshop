import React, { useState } from "react";

function PlantCard({ plant, handleDelete }) {
  const {id, name, image, price} = plant

  const [isInStock, setIsInStock] = useState(true)

  function handleClick(){
    setIsInStock(!isInStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button className="primary" style={{marginLeft:'5px'}} onClick={handleDelete}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
