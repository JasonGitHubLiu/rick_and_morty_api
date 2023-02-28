import React from 'react';
import { Link } from 'react-router-dom';

export default function Character({ results }) {
  let display;
  // console.log(results);

  if (results) {
    display = results.map((mapResults) => {
      let { id, name, image, location, status } = mapResults;
      return (
        <Link to={`/Character/${id}`} key={id}>
          <div >
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

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridGap: '20px',
      }}
    >
      {display}
    </div>
  );
}
