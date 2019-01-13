import { Age } from './../src/age.js';

class solarAge {
  // constructor (dob){
  //   this.dob = dob;
  // }
  //
  // getAge() {
  //   let today = new Date();
  //   let birthDate = new Date(this.dob);
  //   let age = today.getFullYear() - birthDate.getFullYear();
  //   // let month = today.getMonth() - birthDate.getMonth();
  //   return age;
  // }

  yearsToDays(input){
    return input * 365;
  }

  mercuryAge(userAge) {
    const mercury = .24;
    let age = userAge / mercury;
    return Math.round(age);
  }

  venusAge(userAge) {
    const venus = .62;
    let age = userAge / venus;
    return Math.round(age);
  }

  marsAge(userAge) {
    const mars = 1.88;
    let age = userAge / mars;
    return Math.round(age);
  }

  jupiterAge(userAge) {
    const jupiter = 11.86;
    let age = userAge/ jupiter;
    return Math.round(age);
  }

  yearsToLive(avgLifeExpectancy) {
    let life = avgLifeExpectancy - this.age;
    let liveOn = this.age - avgLifeExpectancy;

    if (this.age < avgLifeExpectancy) {
      return life + " " + "years to go!";
    } else {
    return  "You have surpase the average life expectancy of your peers by " + liveOn + " " +"years!";
    }
  }

}
export { solarAge };
