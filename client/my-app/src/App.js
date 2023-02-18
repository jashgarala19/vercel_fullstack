import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-loading-skeleton/dist/skeleton.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
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

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://vercel-fullstack.vercel.app/getapod")
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const Loaded = () => {
    <div className="App">
      <h1>{data.title}</h1>
      <img src={data.hdurl} width="400" height="400" />
      <p className="description">{data.explanation}</p>
    </div>;
  };
  return (
    <div>
      {loading ? (
        <div className="App">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="App">
          <h1>{data.title}</h1>
          <div className="desc-img">
          <LazyLoadImage src={data.hdurl} width={670} height={600} className="myimg" />
          {/* <img src={data.hdurl} width="400" height="400" loading="lazy" /> */}

          <p className="description">{data.explanation}</p>
            </div>
       
        </div>
      )}
    </div>
  );
}

export default App;
