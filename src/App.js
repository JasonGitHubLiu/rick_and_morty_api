import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Character from './components/Character';
import Location from './components/Location';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Character" element={<Character />} />
        <Route path="/Location" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App;

// rick and morty website // https://rickandmortyapi.com/documentation/#javascript-client
// rick and morty characters //https://rickandmortyapi.com/api/character
// rick and morty api's (characters, locations, episodes) //https://rickandmortyapi.com/api
