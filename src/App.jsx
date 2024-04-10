import imageRickMorty from './img/rick-morty.png'
import './App.css';

import {useEffect, useState } from 'react';
import Characters from './components/Characters';
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";

function App() {

  let [characters,setCharacters] = useState([]);
  let [infoCharacters, setInfoCharacters]=useState(""); 
  let [pageNumber, setPageNumber] = useState(1);
  let [status,setStatus] = useState("");
  let [gender,setGender] = useState("");

  const reqApi = async()=>{

    const api = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&status=${status}&gender=${gender}`);
    const characterApi = await api.json();

    setCharacters(characterApi.results);
    setInfoCharacters(characterApi.info);

  }

  useEffect(()=>{
    reqApi();
  },[pageNumber,status,gender]);
  

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
           <>
          <Filter setStatus={setStatus} setGender={setGender}/>
          <Characters characters={characters} setCharacters={setCharacters}/>
          <Pagination setPageNumber = {setPageNumber} pageNumber={pageNumber} infoCharacters={infoCharacters}/>
          </>
          
        ): (
          <>
          <img src={imageRickMorty} alt='Rick & Morty' className='img-home'/>
          <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
          </>
          
        )} 
      </header>
    </div>
  );
}

export default App;
