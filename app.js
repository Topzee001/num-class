const express = require("express");
const cors = require("cors");
// const getRouter = require("./routes/router");
const app = express();
const querystring = require("querystring");

//enable cors
app.use(cors());

//create json middleware
app.use(express.json());

//creating helper fxn to checkif a number is prime number

const isPrime = (num) => {
  if (num <= 1) return false;
  // can use num/2 for the condition range aswell
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
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
}

//create helper to sum digits
const digitSum = (num) => {
  num = Math.abs(num);
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum
}


//route
app.get("/", (req, res) => {

  // console.log(req.query);

  res.send('Welcome to topzee number classification API');
});
// app.use("/", getRouter);
app.get("/api/classify-number", (req, res) => {
  const { number } = req.query
  console.log(req.query);


  if (!number || isNaN(number)) {
    return res.status(400).json({
      number, error: true
    })
  }

  const num = parseInt(number)
  //check if numis a prime number
  const prime = isPrime(num);
  const is_Perfect = isPerfect(num)
  const digit_sum = digitSum(num)

  // console.log(num)
  console.log(`is_perfect: ${is_Perfect}`)
  console.log(`is_prime: ${isPrime(num)}`)





  return res.status(200).json({
    number: num,
    is_prime: prime,
    is_perfect: is_Perfect,
    digit_sum: digit_sum
    // error: false
  })



  // res.send(req.query);
});

module.exports = app;
