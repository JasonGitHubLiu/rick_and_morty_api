// import React from 'react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Character({ fetchedData }) {
  console.log(fetchedData);
  let display;
  let [currentPage, setCurrentPage] = useState(1);
  let [data, setData] = useState('');
  let [next, setNext] = useState(
    'https://rickandmortyapi.com/api/character/?page=1'
  );
  // let [url, setUrl] = useState('')

  useEffect(() => {
    (async function () {
      let url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;
      // let url = {next};
      let data = await fetch(url).then((res) => res.json());
      setData(data);
      setNext(data.info.next);
      console.log(next);
      console.log(data);
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

  function page() {
    // console.log('hi')
    // console.log(next)
    let urlPage = next.match(/(\d+)/); //grabs number from string and puts into variable
    // console.log(urlPage[0])
    setCurrentPage(urlPage[0]);
  }

  function prevPage() {
    console.log(currentPage);
    // console.log(url)
    let urlPage = currentPage - 1;
    setCurrentPage(urlPage);
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
      <div className="btn">
        {data?.info?.prev && (
          <button className="btn1" onClick={prevPage}>
            Previous
          </button>
        )}
        <button className='pg'>{currentPage}</button>
        {data?.info?.next && (
          <button className="btn2" onClick={page}>
            Next
          </button>
        )}
      </div>
    </>
  );
}
