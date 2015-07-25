/**
 * Babel Starter Kit | https://github.com/kriasoft/babel-starter-kit
 * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
 */

class Ladder {

  constructor(height = 0, angle = 0) {
    this.height = height
    this.angle = angle
    this.result = 0
  }

 setup(line) {
     //console.log(`line has value of ${line}`)

     if(line === undefined){
         this.entryData = process.stdin.read()
     } else {
         this.entryData = line;
     }

     //console.log(`data read ${this.entryData}`)

     var data = this.entryData.toString().split(" ")
     this.height = parseInt(data[0])
     this.angle = parseInt(data[1])
    }

  calculate() {
      console.log(`running with params: height=${this.height} and angle=${this.angle}`);

      //    /|
      //   / |h
      //  /  |
      // /a  |
      //
      //  sin(a)= h/result  => result = h/sin(a)
      //
      // 1 = Math.PI/180 =>  angle in Rad = Math.PI/180*angle

      var angleInRad = Math.PI/180 * this.angle;

      this.result = Math.ceil(this.height/Math.sin(angleInRad));
  }

}

export default Ladder;

const lad = new Ladder();
lad.setup();
lad.calculate();
process.stdout.write(lad.result);
