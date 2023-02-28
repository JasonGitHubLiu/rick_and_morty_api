import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Character from './components/Character';
import CharacterItem from './components/CharacterItem';
import About from './components/About';
import React, { useState, useEffect } from 'react';

function App() {
  let [currentPage, setCurrentPage] = useState(1);
  let [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData;

  console.log(results)
  let url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;

  useEffect(() => {
    (async function () {
      let url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;
      let data = await fetch(url).then((res) => res.json());
      setFetchedData(data);
      console.log(data)
    })();
  }, [url]);



  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Character" element={<Character fetchedData={fetchedData} />} />
        <Route path="/Character/:symbol" element={<CharacterItem />} />
      </Routes>
      {/* <button onClick={()=>setCurrentPage(currentPage-1)}>Previous</button>
      <button onClick={()=>setCurrentPage(currentPage+1)}>Next</button> */}
    </div>
  );
}

export default App;

// rick and morty website // https://rickandmortyapi.com/documentation/#javascript-client
// rick and morty characters //https://rickandmortyapi.com/api/character
// rick and morty api's (characters, locations, episodes) //https://rickandmortyapi.com/api
