/**
 * Babel Starter Kit | https://github.com/kriasoft/babel-starter-kit
 * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
 */
require

class Greeting {

  constructor(name) {
    this.name = name || 'Guest';
  }

  hello() {
    return `Welcome, ${this.name}!`;
  }

 run() {
     const message = 'Hello World!'

     if(undefined == typeof print) {
        console.log(message)
     } else {
        process.stdout.write(message)
     }
    }
}

export default Greeting;

const gret = new Greeting();
gret.run();
