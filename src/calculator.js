class solarAge {
  constructor (age){
    this.age = age;
  }

  yearsToDays(){
    return this.age * 365;
  }

  planetDays(planet) {
    const mercury = .24;
    const venus = .62;
    const mars = 1.88;
    const jupiter = 11.86;

    return (this.age * 365) * planet;
  }

}

export { solarAge };
