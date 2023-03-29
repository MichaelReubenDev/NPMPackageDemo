class Greetings {
  constructor (_name) {
    console.log("The Greetings Class has been initiated");
    this.name = _name 
  }
  static personalGreeting() {
    console.log(`Hey world ${this.name}, how are you today`);
  }
}

// let greet = new greetings("Michael");
Greetings.personalGreeting();
console.log("Hello");
module.exports = {
  Greetings
};