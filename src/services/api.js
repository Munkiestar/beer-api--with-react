//  BEER api
const beer_API = "https://api.punkapi.com/v2/beers";

// get all data
const fetchBeerAPI = async () => {
  try {
    const res = await fetch(beer_API);
    return await res.json();
  } catch (err) {
    console.log("Error: ", err);
  }
};

// get single data
const fetchSingleBeerAPI = async (id) => {
  try {
    const res = await fetch(`${beer_API}/${id}`);
    return await res.json();
  } catch (err) {
    console.log("Error: ", err);
  }
};

export { fetchBeerAPI, fetchSingleBeerAPI };
