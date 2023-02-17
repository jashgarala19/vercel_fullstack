import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios('https://vercel-lm8r9rb2z-jashgarala19.vercel.app/ping', {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin',
    })
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
