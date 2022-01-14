import React from "react";

const MAX_LENGTH = 120;
const Card = ({ product }) => {
  const {
    price,
    title,
    comfort,
    rating,
    quality,
    description,
    service,
    image,
  } = product;
  return (
    <div className='card' style={{ padding: "0px 30px" }}>
      <div className='center'>
        <img src={image} alt={title} style={{ height: "75%", width: "75%" }} />
      </div>
      <br />
      <span className='card-title'>{title}</span>
      <div className='card-content'>
        <p>
          <b>Comfort: </b> <span>{comfort}</span>
        </p>
        <p>
          <b>Service: </b> <span>{service}</span>
        </p>
        <p>
          <b>Quality: </b> <span>{quality}</span>
        </p>
        <p>
          <b>Rating: </b> <span>{rating}</span>
        </p>
        <br />
        <p>
          <b>Price: </b> <span>${price}</span>
        </p>
        <p>
          {description.length < MAX_LENGTH
            ? description
            : description.slice(0, MAX_LENGTH) + "..."}
        </p>
      </div>
      <div className='card-action'>
        <a href='#'>This is some link</a>
      </div>
    </div>
  );
};

export default Card;
