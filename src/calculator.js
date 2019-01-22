import { Age } from './../src/age.js';

class solarAge {
  constructor (age){
    this.age = age;
  }

  yearsToDays(){
    return this.age * 365;
  }

  mercuryAge() {
    return Math.round(this.age/.24);
  }

  venusAge() {
    return Math.round(this.age/.62);
  }

  marsAge() {
    return Math.round(this.age/1.88);
  }

  jupiterAge() {
    return Math.round(this.age/11.86);
  }

  yearsToLiveEarth(avgLifeExpectancy) {
    let life = avgLifeExpectancy - this.age;
    let liveOn = this.age - avgLifeExpectancy;

    if (this.age < avgLifeExpectancy) {
      return life + " " + "years to go!";
    } else {
    return  "You have surpase the average life expectancy of your peers by " + liveOn + " " +"years!";
    }
  }

  yearsToLiveMercury(avgLifeExpectancy) {
    let life = (avgLifeExpectancy - this.age)/.24;
    let liveOn = (this.age - avgLifeExpectancy)/.24;

    if (this.age < avgLifeExpectancy) {
      return Math.round(life) + " " + "years to go!";
    } else {
    return  "You have surpase the average life expectancy of your peers by " + Math.round(liveOn) + " " +"years!";
    }
  }

  yearsToLiveVenus(avgLifeExpectancy) {
    let life = (avgLifeExpectancy - this.age)/.62;
    let liveOn = (this.age - avgLifeExpectancy)/.62;

    if (this.age < avgLifeExpectancy) {
      return Math.round(life) + " " + "years to go!";
    } else {
    return  "You have surpase the average life expectancy of your peers by " + Math.round(liveOn) + " " +"years!";
    }
  }

  yearsToLiveMars(avgLifeExpectancy) {
    let life = (avgLifeExpectancy - this.age)/1.88;
    let liveOn = (this.age - avgLifeExpectancy)/1.88;

    if (this.age < avgLifeExpectancy) {
      return Math.round(life) + " " + "years to go!";
    } else {
    return  "You have surpase the average life expectancy of your peers by " + Math.round(liveOn) + " " +"years!";
    }
  }

  yearsToLiveJupiter(avgLifeExpectancy) {
    let life = (avgLifeExpectancy - this.age)/11.86;
    let liveOn = (this.age - avgLifeExpectancy)/11.86;

    if (this.age < avgLifeExpectancy) {
      return Math.round(life) + " " + "years to go!";
    } else {
    return  "You have surpase the average life expectancy of your peers by " + Math.round(liveOn) + " " +"years!";
    }
  }

}

export { solarAge };
