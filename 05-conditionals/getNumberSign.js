const getNumberSign = (num) => {
  if (num === 0) {
    return 'zero'
  } else if (num > 0) {
    return 'positive'
  } else if (num < 0) {
    return 'negative'
  } else {
    return 'please input an integer'
  }
};

module.exports = getNumberSign;