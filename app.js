const express = require("express");
const cors = require("cors");
// const getRouter = require("./routes/router");
const app = express();
const querystring = require("querystring");
const axios = require("axios");

//enable cors
app.use(cors());

//create json middleware
app.use(express.json());

// creating helper to fetch fun fact from api

function fetchFunFact(num) {
  const URL = `http://numbersapi.com/${num}/math`;
  return axios
    .get(URL)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
      return "No fun fact found";
    });
}

// creating helper for Armstrong
const checkArmstrong = (num) => {
  if (num < 0) return false;
  //store the number query
  let inputNum = num;
  //count number of digits
  let numDigits = 0;
  let temp = num;
  //   count number of digits
  while (temp > 0) {
    numDigits++;
    temp = Math.floor(temp / 10);
  }

  //   calc sum of digits raise to power of num digits
  let sum = 0;
  temp = num;
  while (temp > 0) {
    const digit = temp % 10;
    // calc digit raise to power of num digits
    sum += Math.pow(digit, numDigits);
    temp = Math.floor(temp / 10);
  }
  //   check if sum = the num
  return sum === inputNum;
};
//creating helper fxn to checkif a number is prime number

const isPrime = (num) => {
  if (num <= 1) return false;
  // can use num/2 for the condition range aswell
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
//creating helper fxn to checkif a number is perfect
const isPerfect = (num) => {
  if (num < 1) return false;

  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
};

//create helper to sum digits
const digitSum = (num) => {
  num = Math.abs(num);
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};

//route
app.get("/", (req, res) => {
  // console.log(req.query);

  res.send("Welcome to topzee number classification API");
});
// app.use("/", getRouter);
app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;
  console.log(req.query);

  if (!number || isNaN(number)) {
    return res.status(400).json({
      number,
      error: true,
    });
  }

  const num = parseInt(number);
  //check if numis a prime number
  const prime = isPrime(num);
  const is_Perfect = isPerfect(num);
  const digit_sum = digitSum(num);
  const funFact = await fetchFunFact(num);
  const isArmstrong = checkArmstrong(num);
  const parity = num % 2 === 0 ? "even" : "odd";
  const properties = [];
  if (isArmstrong) properties.push("armstrong");
  properties.push(parity);

  // console.log(num)
  console.log(`is_perfect: ${is_Perfect}`);
  console.log(`is_prime: ${isPrime(num)}`);
  console.log(`fun_fact: ${funFact}`);

  return res.status(200).json({
    number: num,
    is_prime: prime,
    is_perfect: is_Perfect,
    properties: properties,
    // "for the armstrong and the parity",
    digit_sum: digit_sum,
    fun_fact: funFact,
    // error: false
  });

  // res.send(req.query);
});

module.exports = app;
