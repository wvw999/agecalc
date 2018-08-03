class Second {
  constructor(dob) {
    this.dob = dob;
    this.current = new Date().getFullYear();
    this.currentUTC = new Date(this.current + '-01-01').getTime()/1000;
    this.dobDate = this.current - this.dob;
    this.dobUTC = new Date(this.dobDate + '-01-01').getTime()/1000;
    this.calculatedSeconds = (this.currentUTC - this.dobUTC);
    this.remaining = parseInt(2483144640 - this.calculatedSeconds);
  }

  mercury() {
    return parseInt(this.calculatedSeconds / 7568640);
  }

  venus() {
    return parseInt(this.calculatedSeconds / 19552320);
  }

  mars() {
    return parseInt(this.calculatedSeconds / 59287680);
  }

  jupiter() {
    return parseInt(this.calculatedSeconds / 374016960);
  }

  mercuryRemaining() {
    return parseInt(this.remaining / 7568640);
  }

  venusRemaining() {
    return parseInt(this.remaining / 19552320);
  }

  marsRemaining() {
    return parseInt(this.remaining / 59287680);
  }

  jupiterRemaining() {
    return parseInt(this.remaining / 374016960);
  }

}

export { Second }
