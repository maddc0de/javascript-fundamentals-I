const fizzBuzz = (num) => {
  const fizz = num % 3 == 0;
  const buzz = num % 5 == 0;

  if (fizz && buzz) {
    return 'FizzBuzz'
  } else if (fizz) {
    return 'fizz'
  } else if (buzz) {
    return 'buzz'
  } else {
    return num
  };
};

// module.exports = fizzBuzz;