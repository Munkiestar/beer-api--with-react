import React from "react";
import "./Home.scss";

import ShowBeer from "../../components/showBeer/showBeer";

function Home() {
  return (
    <>
      <h1 className="home__title">Beers</h1>
      <ShowBeer />
    </>
  );
}

export default Home;
