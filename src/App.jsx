import React from "react";
import Card from "./card.jsx";
import data from "./data.jsx";

export default function App() {
  const cards = data.map((data) => <Card item={data} />);
  return <div>{cards}</div>;
}
