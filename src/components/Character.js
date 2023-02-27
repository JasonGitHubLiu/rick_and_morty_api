import React from 'react';

let Character = ({ results }) => {
  // console.log(results)

  let display;
  console.log(results);

  if (results) {
    display = results.map((mapResults) => {
      let { id, name, image, location, status } = mapResults;
      return (
        <div key={id} className="row">
          <div>
            <img src={image} alt="" className="" />
            <div className="content">
              <div className=""><b>{name}</b></div>
                {/* <div>Last Location</div> */}
                <div>Location: {location.name}</div>
            </div>
          </div>
            <div className='status'>Status: {status}</div>
        </div>
      );
    });
  } else {
    display = 'No Character Found :(';
  }

  return <>{display}character page</>;
};

export default Character;

// export default function Character({ results }) {
//   console.log(results)

//     return (
//       <div> This is the character page!</div>
//   )
// }
