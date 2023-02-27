import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CharacterItem({ results }) {
  //   let Character = ({ results }) => {
  // console.log(results)

  let display;
  // console.log(results);
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

  // if (results) {
  //   display = results.map((mapResults) => {
  //     let { id, name, image, location, status } = mapResults;
  //     return (
  //       <div key={id} className="row">
  //         <div>
  //           <img src={image} alt="" className="" />
  //           <div className="content">
  //             <div className="">
  //               <b>{name}</b>
  //             </div>
  //             <div>Location: {location.name}</div>
  //           </div>
  //         </div>
  //         <div className="status">Status: {status}</div>
  //       </div>
  //     );
  //   });
  // } else {
  //   display = 'No Character Found :(';
  // }

  return (
    <div>
      {data && (
        <div>
          <h1>Name: {data.name}</h1>
          <img src={data.image} alt={data.name}></img>
          <h1>Origin: {data.origin.name}</h1>
          <h1>Location: {data.location.name}</h1>
          <h1>Species: {data.species}</h1>
          <h1>Status: {data.status}</h1>
        </div>
      )}
    </div>
  );
  //   };
}

//   console.log(results)

//     return (
//       <div> This is the character page!</div>
//   )
// }
