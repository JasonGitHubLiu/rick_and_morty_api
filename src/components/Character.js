// import React from 'react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


export default function Character({ fetchedData }) {
  console.log(fetchedData)
  let display;
  let [currentPage, setCurrentPage] = useState(1);
  let [data, setData] = useState('')
  let [next, setNext] = useState('https://rickandmortyapi.com/api/character/?page=1')
  
  useEffect(() => {
    (async function () {
      let url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;
      // let url = {next};
      let data = await fetch(url).then((res) => res.json());
      setData(data);
      setNext(data.info.next)
      console.log(next)
      console.log(data)
    })();
  }, [currentPage]);

  // console.log(results);
  if (fetchedData) {
    display = data?.results?.map((mapResults) => {
      let { id, name, image } = mapResults;
      // let { id, name, image, location, status } = mapResults;
      return (
        <Link to={`/Character/${id}`} key={id}>
          <div>
            <img src={image} alt="image of {name}" />
            <div className="content">
              <b>{name}</b>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = 'No Character Found :(';
  }

  function page(){
    // setCurrentPage(next)
    //   currentPage()
    console.log('hi')
    console.log(next)
    let urlPage = next.match(/(\d+)/) //grabs number from string and puts into variable
    console.log(urlPage[0])
    setCurrentPage(urlPage[0])
      // const sometingwong = {data.info.next}
      // setNext({data.info.next})
    
  }


  return (
    <>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '20px',
      }}
    >
      {display}

    </div>
          <div>
          {data?.info?.prev && <button onClick={page}>Previous</button>}
          {data?.info?.next && <button onClick={page}>Next</button>}
          {/* <button onClick={page()}>Next</button> */}
          </div>
    </>
  );
}
