import React from "react";
import picture from "./assets/aiony-haust.jpg";
import Main from "./MainContent";
import Footer from "./Footer";
import "./app.css";

export default function App() {
  return (
    <div className="wrapper">
      <img className="portrait" src={picture} />
      <Main />
      <Footer />
    </div>
  );
}
