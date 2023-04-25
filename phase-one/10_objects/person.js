const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

console.log(person.address['city'])   // prints value of 'city' attribute
console.log(person['address'].city)   // this also prints value of 'city' attribute

console.log(person.hobbies[1])        // prints value of the second 'hobbies' value