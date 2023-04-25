const checkLength = (phoneNumber) => {
  if (phoneNumber.length <= 10) {
    return true;
  } else {
    return false;
  }
}

const filterLongNumbers = (array) => {
  const newArray = array.filter(checkLength);
  console.log(newArray);
}

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

filterLongNumbers(numbers); // [ '1763687364', '4763687363', '7867867862' ]

filterLongNumbers(['4763687363', '7867867862']); // no numbers to filter out

filterLongNumbers([]) //  [ ]
