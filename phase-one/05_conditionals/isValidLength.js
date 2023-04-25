const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length == validLength) {
    return true;
  } else {
    return false;
  }
};

// isValidLength('00');
// false

// isValidLength('00112233445');
// true

module.exports = isValidLength;