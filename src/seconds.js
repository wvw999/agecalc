class Second {
  constructor(dob) {
    this.dob = dob;
    this.current = new Date().getFullYear();
    // this.dobDate = this.current - this.dob;
    this.calculatedSeconds = 0;
    // new Date().getTime()
  }

  // dobDateCalc() {
  //   this.dobDate = (this.current - this.dob);
  // }

  // yearsToSeconds(dob) {
  //   let birthYear = new Date().getFullYear()-dob;
  // }

}

export { Second }
