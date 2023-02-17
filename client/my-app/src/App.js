import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("https://vercel-fullstack.vercel.app/ping")
      .then((response) => {
        console.log(response.data);
      }).catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Stay Happy 😃</h1>
    </div>
  );
}

export default App;
