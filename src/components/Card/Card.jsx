import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { beer } = props;
  const { name, abv, image_url, tagline } = beer;

  // Adds default image to missing Beers - Kingpin and #Mashtag 2016
  const fallBackImage = "https://images.punkapi.com/v2/keg.png";
  const imageUrlFixed = image_url || fallBackImage;

  return (
    <div className="card">
      <img className="card__img" src={imageUrlFixed} alt={name} />
      <div>
        <h2 className="card__name">{name}</h2>
      </div>
      <p className="card__abv">ABV {abv}%</p>
      <p className="card__tagline">{tagline}</p>
    </div>
  );
};

export default Card;
