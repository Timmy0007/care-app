import React from "react";

export default function Caroprod(props) {
  return (
    <div className="card">
      <img className="product-image" src={props.url} alt="product image" />
      <h2 className="name">{props.name}</h2>
      <p className="description">{props.description}</p>
      <p className="description2">{props.description2}</p>
      <p>
      </p>
    </div>
  );
}