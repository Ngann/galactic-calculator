import { solarAge } from './../src/calculator.js';

describe('solarAge', function () {

  it('will take Earth age and convert it to Mercury age', function() {
    var ageEarth = 25;
    var planet = "Mercury";
    const solarAge = new solarAge(ageEarth);
    var newAge= solarAge.convertAge(planet);
    expect(newAge).toEqual(103);
  });

  it('will take Earth age and convert it to Venus age', function() {
    var ageEarth = 25;
    var planet = "Venus";
    const solarAge = new solarAge(ageEarth);
    var newAge= solarAge.convertAge(planet);
    expect(newAge).toEqual(40);
  });

  it('will take Earth age and convert it to Mars age', function() {
    var ageEarth = 25;
    var planet = "Mars";
    const solarAge = new solarAge(ageEarth);
    var newAge= solarAge.convertAge(planet);
    expect(newAge).toEqual(13);
  });

  it('will take Earth age and convert it to Jupiter age', function() {
    var ageEarth = 25;
    var planet = "Jupiter";
    const solarAge = new solarAge(ageEarth);
    var newAge= solarAge.convertAge(planet);
    expect(newAge).toEqual(3);
  });

  it('will determing the user life expectacy on Earth', function() {
    var ageEarth = 25;
    var planet = "Earth";
    var avgLifeExpectancy = 80;
    const solarAge = new solarAge(ageEarth);
    var yearsLeft= solarAge.yearsToLive(ageEarth, avgLifeExpectancy);
    expect(yearsLeft).toEqual(55);
  });

  it('will determing the user life expectacy on Earth', function() {
    var ageEarth = 88;
    var planet = "Earth";
    var avgLifeExpectancy = 80;
    const solarAge = new solarAge(ageEarth);
    var yearsLeft= solarAge.yearsToLive(ageEarth, avgLifeExpectancy);
    expect(yearsLeft).toEqual("You have surpase the average life expectacy of your fellow humans.");
  });

});
