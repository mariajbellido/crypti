import React, { useState, useEffect } from "react";
import "./Featured.css";
import Card from "./Card";
import axios from "axios";

const Featured = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //console.log(data);

  if (!data) return null;
  return (
    <main className="featured">
      <section className="container">
        {/* Left side */}
        <div className="left">
          <h2>Explore top Cryptos Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className="btn">See more coins</button>
        </div>
        {/* Right side */}
        <div className="right">
          {data.map((data) => (
            <Card key={data.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Featured;
