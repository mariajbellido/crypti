import React, { useEffect, useState } from "react";
import "./Card.css";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.data.image} alt="cryptocurrency" />
      </div>
      <div>
        <h5>{props.data.name}</h5>
        <p>{props.data.current_price.toLocaleString()}€</p>
      </div>
      {props.data.price_change_percentage_24h < 0 ? (
        <span className="red">
          <FiArrowDown />
          {props.data.price_change_percentage_24h.toFixed(2)}%
        </span>
      ) : (
        <span className="green">
          <FiArrowUpRight />
          {props.data.price_change_percentage_24h.toFixed(2)}%
        </span>
      )}
    </div>
  );
};

export default Card;
