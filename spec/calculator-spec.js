import { solarAge } from './../src/calculator.js';
import { age } from './../src/age.js';

describe('Age', function () {
  let dob =  age("8/17/1994");
  let ageObj = new solarAge(dob);
  let oldDob =  age("8/17/1929");
  let oldObj = new solarAge(oldDob);
  let avgLifeExpectancy = 80;

  it('will take DOB get the age', function() {
    expect(dob).toEqual(25);
  });

  it('will take age in years and convert it to Earth days', function() {
    let earthDays = ageObj.yearsToDays();
    expect(earthDays).toEqual(9125);
  });

  it('will take Earth age and convert it to Mercury age', function() {
    let newAge = ageObj.mercuryAge();
    expect(newAge).toEqual(104);
  });

  it('will take Earth age and convert it to Venus age', function() {
    let newAge = ageObj.venusAge();
    expect(newAge).toEqual(40);
  });

  it('will take Earth age and convert it to Mars age', function() {
    let newAge = ageObj.marsAge();
    expect(newAge).toEqual(13);
  });

  it('will take Earth age and convert it to Jupiter age', function() {
    let newAge = ageObj.jupiterAge();
    expect(newAge).toEqual(2);
  });

  it('will determine the user life expectancy on Earth', function() {
    let yearsLeft= ageObj.yearsToLiveEarth(avgLifeExpectancy);
    expect(yearsLeft).toEqual('55 years to go!');
  });

  it('will determine the user life expectancy on Mercury', function() {
    let yearsLeft= ageObj.yearsToLiveMercury(avgLifeExpectancy);
    expect(yearsLeft).toEqual('13 years to go!');
  });

  it('will determine the user life expectancy on Venus', function() {
    let yearsLeft= ageObj.yearsToLiveVenus(avgLifeExpectancy);
    expect(yearsLeft).toEqual('34 years to go!');
  });

  it('will determine the user life expectancy on Mars', function() {
    let yearsLeft= ageObj.yearsToLiveMars(avgLifeExpectancy);
    expect(yearsLeft).toEqual('103 years to go!');
  });

  it('will determine the user life expectancy on Jupiter', function() {
    let yearsLeft= ageObj.yearsToLiveJupiter(avgLifeExpectancy);
    expect(yearsLeft).toEqual('652 years to go!');
  });

  it('will determine the user has lived pass the life expectancy on Earth', function() {
    let yearsLeft= oldObj.yearsToLiveEarth(avgLifeExpectancy);
    expect(yearsLeft).toEqual("You have surpase the average life expectancy of your peers by 10 years!");
  });

  it('will determine the user has lived pass the life expectancy on Mercury', function() {
    let yearsLeft= oldObj.yearsToLiveMercury(avgLifeExpectancy);
    expect(yearsLeft).toEqual("You have surpase the average life expectancy of your peers by 2 years!");
  });

  it('will determine the user has lived pass the life expectancy on Venus', function() {
    let yearsLeft= oldObj.yearsToLiveVenus(avgLifeExpectancy);
    expect(yearsLeft).toEqual("You have surpase the average life expectancy of your peers by 6 years!");
  });

  it('will determine the user has lived pass the life expectancy on Mars', function() {
    let yearsLeft= oldObj.yearsToLiveMars(avgLifeExpectancy);
    expect(yearsLeft).toEqual("You have surpase the average life expectancy of your peers by 19 years!");
  });

  it('will determine the user has lived pass the life expectancy on Jupiter', function() {
    let yearsLeft= oldObj.yearsToLiveJupiter(avgLifeExpectancy);
    expect(yearsLeft).toEqual("You have surpase the average life expectancy of your peers by 119 years!");
  });

});
