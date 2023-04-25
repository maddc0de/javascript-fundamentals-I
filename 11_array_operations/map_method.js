const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const personalisedMessage = (name) => {
  return `Hi ${name}! 50% off our best candies for you today!`;
}

const generateMessages = (array) => {
  const newArray = array.map(personalisedMessage)
  console.log(newArray);
}

generateMessages(names);