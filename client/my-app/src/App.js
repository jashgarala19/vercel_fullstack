import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // useEffect(() => {
  //   axios
  //     .get("https://vercel-fullstack.vercel.app/ping")
  //     .then((response) => {
  //       console.log(response.data);
  //     }).catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);


  const [data,setData]= useState({});


  useEffect(() => {
    axios
      .get("https://vercel-fullstack.vercel.app/getapod")
      .then(async(response) => {
       setData(response.data);
      }).catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>{data.title}</h1>
      <img src={data.hdurl} width="400" height="400"/>
      <p className="description">{data.explanation}</p>
    </div>
  );
}

export default App;
