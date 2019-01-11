class solarAge {
  constructor (age){
  this.age = age;
}

  yearsToDays(){
    return this.age * 365
  }

  convertAge(planet){
  const daysEarth = 365;
  const mercury = .24;
  const venus = .62;
  const mars = 1.88;
  const jupiter = 11.86;
  // const yearsToDays = this.age * 365;
  const planetToEarth = daysEarth * planet ;

  return (yearsTodays()/planetToEarth);
  }

}

export { solarAge };
