class solarAge {
  constructor (age){
    this.age = age;
  }
  yearsToDays(){
    return this.age * 365;
  }

  mercuryAge() {
    const mercury = .24;
    const mercuryDays = mercury * 365;
    let age = (this.age * 365) / mercuryDays;
    return Math.round(age)
  }

  venusAge() {
    const venus = .62;
    const venusDays = venus * 365;
    let age = (this.age * 365) / venusDays;
    return Math.round(age)
  }

  marsAge() {
    const mars = 1.88;
    const marsDays = mars * 365;
    let age = (this.age * 365) / marsDays;
    return Math.round(age)
  }

  jupiterAge() {
    const jupiter = 11.86;
    const jupiterDays = jupiter * 365;
    let age = (this.age * 365) / jupiterDays;
    return Math.round(age)
  }

}

export { solarAge };
