class Second {
  constructor(dob) {
    this.dob = dob;
    this.current = new Date().getFullYear();
    this.currentUTC = new Date(this.current + '-01-01').getTime()/1000;
    this.dobDate = this.current - this.dob;
    this.dobUTC = new Date(this.dobDate + '-01-01').getTime()/1000;
    this.calculatedSeconds = (this.currentUTC - this.dobUTC);
  }

}

export { Second }
