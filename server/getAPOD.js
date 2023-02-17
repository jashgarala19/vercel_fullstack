const axios = require("axios");

function getapod() {
  return axios.get(
    "https://api.nasa.gov/planetary/apod?api_key=NGl0Npm3mXpANfREQlnXONcOfjmD8a266Mm8fIwU"
  );
}

module.exports = getapod;
