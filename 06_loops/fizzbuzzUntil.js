const fizzBuzz = require('../Phase_1_05/fizzBuzz');

const fizzbuzzUntil = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(fizzBuzz(i));
  }
};

module.exports = fizzbuzzUntil;