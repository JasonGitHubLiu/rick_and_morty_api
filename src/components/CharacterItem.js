import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CharacterItem({ results }) {
  let [data, setData] = useState();
  let { symbol } = useParams();

  let url = `https://rickandmortyapi.com/api/character/${symbol}`;
  console.log(url);

  useEffect(() => {
    (async function () {
      let data = await fetch(url).then((res) => res.json());
      setData(data);
      console.log(data);
    })();
  }, []);

  return (
    <div>
      {data && ( //need to download/render data before I can access it. If this line of code not included, it will not display anything.
        <div>
          <br></br>
          <h1>Name: {data.name}</h1>
          <br></br>
          <img src={data.image} alt={data.name}></img>
          <br></br>
          <br></br>
          <h1>Origin: {data.origin.name}</h1>
          <br></br>
          <h1>Location: {data.location.name}</h1>
          <br></br>
          <h1>Species: {data.species}</h1>
          <br></br>
          <h1>Status: {data.status}</h1>
        </div>
      )}
    </div>
  );
}
