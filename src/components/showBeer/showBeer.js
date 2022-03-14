import React, { useEffect, useState } from "react";
import "./showBeer.scss";

import BeerCard from "../beerCard/beerCard";

function ShowBeer(props) {
  const beer_API = "https://api.punkapi.com/v2/beers";

  const [beers, setBeers] = useState([]);
  const numOfBeers = 10;

  // fetch data from api
  const fetchAPI = async () => {
    try {
      const res = await fetch(beer_API);
      const data = await res.json();

      setBeers(data);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  // console.log("beers: ", beers);
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
