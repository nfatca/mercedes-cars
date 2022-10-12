import React from "react";

const Card = (data) => {
  //   console.log(data);
  const { id, name, photo, body } = data;
  return (
    <div className="cards">
      <div>
        <h1 className="name">{name}</h1>
      </div>
      <img src={photo} alt="img" />
      <div className="card-over">
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Card;
