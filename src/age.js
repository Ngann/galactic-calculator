class Age {
  constructor (dob){
    this.dob = dob;
  }

  getAge() {
    let today = new Date();
    let birthDate = new Date(this.dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    // let month = today.getMonth() - birthDate.getMonth();
    return age;
  }
}

export { Age };
