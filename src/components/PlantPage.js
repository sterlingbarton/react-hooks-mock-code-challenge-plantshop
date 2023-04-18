import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantData, setPlantData] = useState([])
 
  const [searchQuery, setSearchQuery] = useState("")

  function handleChange (e) {
    setSearchQuery(e.target.value)
  }

  useEffect(()=>{
    loadPlants()
  },[])

  function loadPlants () {
    fetch("http://localhost:6001/plants")
    .then((res)=>res.json())
    .then((data)=> setPlantData(data))
  }
  
  
  return (
    <main>
      <NewPlantForm plantData={plantData} setPlantData={setPlantData} />
      <Search handleChange={handleChange} searchQuery={searchQuery} />
      <PlantList plantData={plantData} loadPlants={loadPlants} searchQuery={searchQuery} />
    </main>
  );
}

export default PlantPage;

