import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData, loadPlants, searchQuery}) {


  const plantDataList = plantData.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} handleDelete={() => handleDelete(plant.id)}/>
  })

  const displayPlants = plantDataList.filter((plantElement) => {
    return plantElement.props.plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  function handleDelete (id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE'
    })
    .then(loadPlants)

  }

  return (
    <ul className="cards">
      {displayPlants}
    </ul>
  );
}

export default PlantList;
