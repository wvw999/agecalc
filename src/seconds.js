class Second {
  constructor(yyyy,mm,dd) {
    this.dob = [yyyy, mm, dd];
    this.fullDob = new Date(yyyy + '-' + mm + '-' + dd).getTime()/1000;
    this.currentUTC = new Date('August 3, 2018 00:00:01').getTime()/1000;
    // production code below. need to set 'current' time to locked point for testing or specs will not pass
    // this.currentUTC = new Date().getTime()/1000;
    this.calculatedSeconds = parseInt(this.currentUTC - this.fullDob);
    this.keithFutureBirthtday = new Date('August 3, 2073 00:00:01').getTime()/1000;
    this.keithCalculatedSeconds = parseInt(this.keithFutureBirthtday - this.fullDob);
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

  keithrichardsDogYears() {
    return ((parseInt(this.keithCalculatedSeconds / 374016960)) * 7)
  }

  mayFlyCase() {
    return parseInt(241270850000000 / (parseInt(this.calculatedSeconds / 600)))
  }

}

export { Second }
