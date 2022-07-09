import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import ResidentItem from "./components/ResidentItem";
import Location from "./components/Location";

function App() {
  const [search, setSearch] = useState("");
  const [locate, setLocate] = useState({});

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setLocate(res.data));
  }, []);

  const searchType = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${search}`)
      .then((res) => setLocate(res.data));
  };

  //

  return (
    <div className="App">
      <div className="cover"></div>

      <div className="container">
        <h1>Rick and Morty Locations</h1>
      
          <input
            placeholder="escribe la ubicación"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchType}>buscar</button>
        

          <div className="infolocation">
            <Location locate={locate} className="locate-info"/>
          </div>

          <h3>Residents</h3>
       
        <div className="matrix">
        
          {locate.residents?.map((resident) => (
            <ResidentItem resident={resident} key={resident} />
          ))}
        
        </div>
      </div>
    </div>
  );
}

export default App;
