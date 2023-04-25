const User = require('./user');

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

class UserBase {
  constructor(array) {
    this.array = array;
  }

  count() {
    return this.array.length;
  }

  getNames() {
    const arrayOfNames = this.array.map( user => user.name );
    return arrayOfNames;
  }

  getIntroductions() {
    let arrayOfIntroductions = []
    this.array.forEach( user => { 
      arrayOfIntroductions.push(user.getIntroduction());
    })
    console.log(arrayOfIntroductions);
  }
}

// const userBase = new UserBase(users);
// userBase.count();
// userBase.getNames();   -->   [ 'Uma', 'Josh', 'Ollie' ]
// userBase.getIntroductions();    -->    [ 'Hi, my name is Uma', 'Hi, my name is Josh', 'Hi, my name is Ollie' ]

module.exports = UserBase;