import React from "react";
import "./beerCard.scss";

function BeerCard({ beer }) {
  return (
    <div className="beer">
      <img
        className="beer__img"
        src={beer.image_url}
        alt={beer.name}
        title={beer.name}
      />
      <h1 className="beer__name">{beer.name}</h1>
      <p className="beer__tagline">{beer.tagline}</p>
    </div>
  );
}

export default BeerCard;
