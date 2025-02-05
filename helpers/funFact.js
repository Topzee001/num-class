const axios = require("axios");

// creating helper to fetch fun fact from api
exports.fetchFunFact = (num) => {
  const URL = `http://numbersapi.com/${num}/math`;
  return axios
    .get(URL)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
      return "No fun fact found";
    });
};
