import React from "react";
import "./Featured.css";
import Card from "./Card";

const Featured = () => {
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
          <Card />
        </div>
      </section>
    </main>
  );
};

export default Featured;
