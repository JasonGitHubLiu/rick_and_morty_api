import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Character from './components/Character';
import CharacterItem from './components/CharacterItem';
import About from './components/About';
import React, { useState, useEffect } from 'react';

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  // console.log(results)
  let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(url).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [url]);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Character" element={<Character results={results} />} />
        <Route path="/Character/:symbol" element={<CharacterItem />} />
      </Routes>
    </div>
  );
}

export default App;

// rick and morty website // https://rickandmortyapi.com/documentation/#javascript-client
// rick and morty characters //https://rickandmortyapi.com/api/character
// rick and morty api's (characters, locations, episodes) //https://rickandmortyapi.com/api
