import React from "react";
import "../App.css"


const Location = ({ locate }) => {
  const sizeResident = locate.residents?.length;

  return (
    <div>
         <h2> {locate.name}</h2>

        <div className="locate-info">
        <div className="item-info"><b>type: </b>{locate.type}</div>
        <div className="item-info"><b>dimesion: </b>{locate.dimension}</div>
        <div className="item-info"><b>population: </b>{sizeResident}</div>
    
       
    
      
    
        
        </div>
     
    </div>
  );
};

export default Location;
