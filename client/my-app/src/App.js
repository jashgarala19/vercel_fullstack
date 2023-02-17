import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("https://vercel-lm8r9rb2z-jashgarala19.vercel.app/ping")
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello world Testing React 😃</h1>
    </div>
  );
}

export default App;
