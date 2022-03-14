import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./Detail.scss";

import { fetchSingleBeerAPI } from "../../services/api";

function Detail() {
  // get id param
  const { beerId } = useParams();

  const [beer, setBeer] = useState();

  // fetch single beer by id
  useEffect(async () => {
    setBeer(await fetchSingleBeerAPI(beerId));
  }, []);

  return (
    <div className="detail-container">
      {beer &&
        beer.map((b) => (
          <div className="detail" key={b.id}>
            <h1 className="detail__title">Detail page</h1>
            <img
              className="detail__img"
              src={b.image_url}
              alt={b.name}
              title={b.name}
            />
            <h1 className="detail__name">{b.name}</h1>
            <div>
              <span className="detail__tagline"> ~ {b.tagline} ~</span>
            </div>
            <div>
              <b>First brewed:</b>
              <span> {b.first_brewed}</span>
            </div>
            <div>
              <b>Taste good with:</b> <span> {b.food_pairing.join(", ")}</span>
            </div>
            <p>
              <b>Description: </b> {b.description}
            </p>

            <Link className="detail__btn" to="/">
              Back
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Detail;
