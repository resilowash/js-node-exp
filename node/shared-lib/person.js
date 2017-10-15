var Person = function(firstName, lastName, birthYear, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthyear = birthYear;
  this.email = email;
  this.introduceSelf = function() {
    return "Hello, my name is " + this.firstName + " " + this.lastName;
  };
}

Person.prototype.question = function(name) {
  return "Hello " + name + ", how can I help you?";
}

module.exports = Person;
