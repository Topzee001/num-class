const { fetchFunFact } = require("../helpers/funFact");
const {
  isPerfect,
  isPrime,
  digitSum,
  checkArmstrong,
} = require("../helpers/numberUtils");

exports.getWelcome = (req, res) => {
  res.send("Welcome to topzee number classification API");
};

exports.getNumberClass = async (req, res) => {
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
};
