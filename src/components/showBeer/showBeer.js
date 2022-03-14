import React, { useEffect, useState } from "react";
import "./showBeer.scss";

import BeerCard from "../beerCard/beerCard";

import { fetchBeerAPI } from "../../services/api";

function ShowBeer() {
  // state
  const [beers, setBeers] = useState([]);

  // number of beers on page
  const numOfBeers = 15;

  // fetch all data from api
  useEffect(async () => {
    setBeers(await fetchBeerAPI());
  }, []);

  return (
    <section className="beer-container">
      {beers &&
        beers
          .slice(0, numOfBeers)
          .map((beer) => <BeerCard beer={beer} key={beer.id} />)}
    </section>
  );
}

export default ShowBeer;
