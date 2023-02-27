import React from 'react';
import { Link } from 'react-router-dom';

// export default function Character({ results }) {

let Character = ({ results }) => {
  // console.log(results)

  let display;
  // console.log(results);

  if (results) {
    display = results.map((mapResults) => {
      let { id, name, image, location, status } = mapResults;
      return (
        <Link to={`/Character/${id}`}>
          <div key={id} className="row">
            <div>
              <img src={image} alt="" className="" />
              <div className="content">
                <div className="">
                  <b>{name}</b>
                </div>
              </div>
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
};

export default Character;

//   console.log(results)

//     return (
//       <div> This is the character page!</div>
//   )
// }
