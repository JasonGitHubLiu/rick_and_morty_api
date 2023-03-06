import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Character({ fetchedData }) {
  console.log(fetchedData);
  let display;
  let [currentPage, setCurrentPage] = useState(1);
  let [data, setData] = useState('');
  let [next, setNext] = useState('');
  let [prev, setPrev] = useState('');
  let [input, setInput] = useState('');
  let [name, setName] = useState('');
  let [search, setSearch] = useState('');

  // let [url, setUrl] = useState('')
  //filter -conditional, if it does something, return true, else return false. and use includes

  useEffect(() => {
    (async function () {
      // let url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;
      let search = `?name=${name}`;
      let url = `https://rickandmortyapi.com/api/character/${search}`;
      // let url = {next};
      let data = await fetch(url).then((res) => res.json());
      setData(data);
      // console.log('next')
      setNext(data.info.next);
      // console.log(next)
      setPrev(data.info.prev);
      // console.log(prev)
      // console.log(next);
      // console.log(data);
    })();
  }, [name]);

  // console.log(results);
  if (fetchedData) {
    display = data?.results?.map((mapResults) => {
      let { id, name, image } = mapResults;
      // let { id, name, image, location, status } = mapResults;
      return (
        <div className="border border-primary rounded-4 border-3">
          <br></br>
          <Link to={`/Character/${id}`} key={id}>
            <div>
              <img src={image} alt="image of {name}" />
              <div className="content"></div>
            </div>
          </Link>
          <b className="text-primary fst-italic fs-1">{name}</b>
        </div>
      );
    });
  } else {
    display = 'No Character Found :(';
  }

  // function page() {
  //   // console.log('hi')
  //   // console.log(next)
  //   // let urlPage = next.match(/(\d+)/); //grabs number from string and puts into variable
  //   // console.log(urlPage[0])
  //   setCurrentPage(urlPage[0]);
  // }

  // function prevPage() {
  //   console.log(currentPage);
  //   // console.log(url)
  //   let urlPage = currentPage - 1;
  //   setCurrentPage(urlPage);
  // }

  function handleChange(e) {
    setName(input);
    console.log(name);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   getChar(input);
  // }

  const nextPage = async () => {
    console.log('hello');

    let data = await fetch(next).then((res) => res.json());
    setData(data);
    // console.log('next')
    setNext(data.info.next);
    // console.log(next)
    setPrev(data.info.prev);
    // console.log(prev)
    // console.log(next);
    // console.log(prev);
    // console.log(data);
  };
  const prevPage = async () => {
    console.log('hello');

    let data = await fetch(prev).then((res) => res.json());
    setData(data);
    // console.log('next')
    setNext(data.info.next);
    // console.log(next)
    setPrev(data.info.prev);
    // console.log(prev)
    // console.log(next);
    // console.log(prev);
    // console.log(data);
  };

  return (
    <>
      <div className="charBG">
        <br></br>
        <input
          className="btn btn-light"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="btn btn-outline-primary " onClick={handleChange}>
          Search
        </button>
        <div></div>
        <br></br>
        <div className="btn">
          {data?.info?.prev && (
            <button className="btn btn-primary" onClick={prevPage}>
              Previous
            </button>
          )}
          {/* <button className='btn btn-light'>{currentPage}</button> */}
          {data?.info?.next && (
            <button className="btn btn-primary" onClick={nextPage}>
              Next
            </button>
          )}
          <br></br>
          <br></br>
        </div>

        <div
          style={{
            // border: 'red 1px solid',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridGap: '10px',
          }}
        >
          {/* <div></div> */}
          {display}
        </div>
        <div className="btn">
          <br></br>
          {data?.info?.prev && (
            <button className="btn btn-primary" onClick={prevPage}>
              Previous
            </button>
          )}
          {/* <button className='btn btn-light'>{currentPage}</button> */}
          {data?.info?.next && (
            <button className="btn btn-primary" onClick={nextPage}>
              Next
            </button>
          )}
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
}
