// creating helper for Armstrong
exports.checkArmstrong = (num) => {
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
exports.isPrime = (num) => {
  if (num <= 1) return false;
  // can use num/2 for the condition range aswell
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

//creating helper fxn to checkif a number is perfect
exports.isPerfect = (num) => {
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
exports.digitSum = (num) => {
  num = Math.abs(num);
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};
