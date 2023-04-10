import React from "react";

const BadAssPerson = ({ imageUrl, name, description }) => {
  return (
    <div className='bad-ass-container'>
      <img className='bad-ass-image' src={require("./wyblock.jpg")} />
      <div className='bad-ass-info'>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BadAssPerson;
