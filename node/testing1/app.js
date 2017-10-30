//first node test
const Person = require('../shared-lib/person.js');

var person = new Person("Cosmo", "Kramer", 1960, "cosmo@vandalay.com");

console.log(person);
console.log(person.introduceSelf());
console.log(person.question("Bill"));

//extending person outside of it's base. 
Person.prototype.Hey = function() {
  return "Hey, " + this.firstName + " WAKE UP!";
}

console.log(person.Hey());
