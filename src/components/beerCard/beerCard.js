import React from "react";
import { Link } from "react-router-dom";
import "./beerCard.scss";

function BeerCard({ beer }) {
  const { image_url, name, tagline, id } = beer;

  return (
    <div className="beer">
      <Link to={`/details/${id}`}>
        <img className="beer__img" src={image_url} alt={name} title={name} />
        <h1 className="beer__name">{name}</h1>
        <p className="beer__tagline">{tagline}</p>
      </Link>
    </div>
  );
}

export default BeerCard;
