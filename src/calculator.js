import { Age } from './../src/age.js';

class solarAge {
  constructor (age){
    this.age = age;
  }

  yearsToDays(){
    return this.age * 365;
  }

  mercuryAge() {
    const mercury = .24;
    let age = this.age / mercury;
    return Math.round(age);
  }

  venusAge() {
    const venus = .62;
    let age = this.age / venus;
    return Math.round(age);
  }

  marsAge() {
    const mars = 1.88;
    let age = this.age/ mars;
    return Math.round(age);
  }

  jupiterAge() {
    const jupiter = 11.86;
    let age = this.age/ jupiter;
    return Math.round(age);
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
    let life = .24 * (avgLifeExpectancy - this.age);
    let liveOn = .24 * (this.age - avgLifeExpectancy);

    if (this.age < avgLifeExpectancy) {
      return Math.round(life) + " " + "years to go!";
    } else {
    return  "You have surpase the average life expectancy of your peers by " + Math.round(liveOn) + " " +"years!";
    }
  }

  yearsToLiveVenus(avgLifeExpectancy) {
    let life = .62 * (avgLifeExpectancy - this.age);
    let liveOn = .62 * (this.age - avgLifeExpectancy);

    if (this.age < avgLifeExpectancy) {
      return Math.round(life) + " " + "years to go!";
    } else {
    return  "You have surpase the average life expectancy of your peers by " + Math.round(liveOn) + " " +"years!";
    }
  }

  yearsToLiveMars(avgLifeExpectancy) {
    let life = 1.88 * (avgLifeExpectancy - this.age);
    let liveOn = 1.88 * (this.age - avgLifeExpectancy);

    if (this.age < avgLifeExpectancy) {
      return Math.round(life) + " " + "years to go!";
    } else {
    return  "You have surpase the average life expectancy of your peers by " + Math.round(liveOn) + " " +"years!";
    }
  }

  yearsToLiveJupiter(avgLifeExpectancy) {
    let life = 11.86 * (avgLifeExpectancy - this.age);
    let liveOn = 11.86 * (this.age - avgLifeExpectancy);

    if (this.age < avgLifeExpectancy) {
      return Math.round(life) + " " + "years to go!";
    } else {
    return  "You have surpase the average life expectancy of your peers by " + Math.round(liveOn) + " " +"years!";
    }
  }

}

export { solarAge };
