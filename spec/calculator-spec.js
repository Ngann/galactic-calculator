import { solarAge } from './../src/calculator.js';
import { age } from './../src/age.js';

describe('Age', function () {
  let dob =  age("8/17/1994");
  let ageObj = new solarAge(25);
  let oldObj = new solarAge(90);
  let avgLifeExpectancy = 80;

  it('will take DOB get the age', function() {
    expect(dob).toEqual(25);
  });

  it('will take age in years and convert it to Earth days', function() {
    let earthDays = ageObj.yearsToDays();
    expect(earthDays).toEqual(9125);
  });

  it('will take Earth age and convert it to Mercury age', function() {
    var newAge = ageObj.mercuryAge();
    expect(newAge).toEqual(104);
  });

  it('will take Earth age and convert it to Venus age', function() {
    var newAge = ageObj.venusAge();
    expect(newAge).toEqual(40);
  });

  it('will take Earth age and convert it to Mars age', function() {
    var newAge = ageObj.marsAge();
    expect(newAge).toEqual(13);
  });

  it('will take Earth age and convert it to Jupiter age', function() {
    var newAge = ageObj.jupiterAge();
    expect(newAge).toEqual(2);
  });

  it('will determine the user life expectancy on Earth', function() {
    var yearsLeft= ageObj.yearsToLive(avgLifeExpectancy);
    expect(yearsLeft).toEqual('55 years to go!');
  });

  it('will determine the user has lived pass the life expectancy', function() {
    var yearsLeft= oldObj.yearsToLive(avgLifeExpectancy);
    expect(yearsLeft).toEqual("You have surpase the average life expectancy of your peers by 10 years!");
  });

});
