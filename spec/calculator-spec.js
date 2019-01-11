import { solarAge } from './../src/calculator.js';

describe('solarAge', function () {

  it('it will take age in year and convert it to Earth days', function() {
    var ageEarth = 25;
    var planet = "mercury";
    const ageObj = new solarAge(ageEarth);
    var newAge= ageObj.yearsToDays();
    expect(newAge).toEqual(9125);
  });


  // it('will take Earth age and convert it to Mercury age', function() {
  //   var ageEarth = 25;
  //   var planet = "mercury";
  //   const ageObj = new solarAge(ageEarth);
  //   var newAge= ageObj.convertAge(planet);
  //   expect(newAge).toEqual(103);
  // });

  // it('will take Earth age and convert it to Venus age', function() {
  //   var ageEarth = 25;
  //   var planet = "Venus";
  //   const solarAge = new solarAge(ageEarth);
  //   var newAge= solarAge.convertAge(planet);
  //   expect(newAge).toEqual(40);
  // });
  //
  // it('will take Earth age and convert it to Mars age', function() {
  //   var ageEarth = 25;
  //   var planet = "Mars";
  //   const solarAge = new solarAge(ageEarth);
  //   var newAge= solarAge.convertAge(planet);
  //   expect(newAge).toEqual(13);
  // });
  //
  // it('will take Earth age and convert it to Jupiter age', function() {
  //   var ageEarth = 25;
  //   var planet = "Jupiter";
  //   const solarAge = new solarAge(ageEarth);
  //   var newAge= solarAge.convertAge(planet);
  //   expect(newAge).toEqual(3);
  // });
  //
  // it('will determine the user life expectancy on Earth', function() {
  //   var ageEarth = 25;
  //   var planet = "Earth";
  //   var avgLifeExpectancy = 80;
  //   const solarAge = new solarAge(ageEarth);
  //   var yearsLeft= solarAge.yearsToLive(ageEarth, avgLifeExpectancy);
  //   expect(yearsLeft).toEqual(55);
  // });

  // it('will determine the user life expectacy on Earth', function() {
  //   var ageEarth = 88;
  //   var planet = "Earth";
  //   var avgLifeExpectancy = 80;
  //   const solarAge = new solarAge(ageEarth);
  //   var yearsLeft= solarAge.yearsToLive(ageEarth, avgLifeExpectancy);
  //   expect(yearsLeft).toEqual("You have surpase the average life expectancy of your peers.");
  // });

});
