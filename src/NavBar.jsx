import React from "react";
import picture from "./assets/react.svg";

export default function Nav() {
  return (
    <nav className="nav">
      <img src={picture} />
      <h3 className="nav--h3">React Facts</h3>
      <h4>React Course- Project 1</h4>
    </nav>
  );
}
