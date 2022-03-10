import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

const Card = () => {
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
    <div className="card">
      <div className="top">
        <img src={data[0].image} alt="cryptocurrency" />
      </div>
      <div>
        <h5>{data[0].name}</h5>
        <p>{data[0].current_price.toLocaleString()}€</p>
      </div>
      {data[0].price_change_percentage_24h < 0 ? (
        <span className="red">
          <FiArrowDown />
          {data[0].price_change_percentage_24h.toFixed(2)}%
        </span>
      ) : (
        <span className="green">
          <FiArrowUpRight />
          {data[0].price_change_percentage_24h.toFixed(2)}%
        </span>
      )}
    </div>
  );
};

export default Card;
