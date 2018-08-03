import { Second } from './../src/seconds.js';

describe('Second', function() {

  it('should accept input in form of age in integer format', function () {
    let newUser = new Second(10);
    expect(newUser.dob).toEqual(10);
  })

  it('calculates in seconds the time between the moment the birth data was entered and x years ago', function () {
    let newUser = new Second(10);
    console.log("dobdate: " + newUser.dobDate);
    console.log("dob : " + newUser.dob);
    console.log("current: " + newUser.current);
    expect(newUser.dobDate).toEqual(2008);
  })

  // * Spec : allows user to input date of birth, input 09/30/1925, output 09/30/1925.
  // * Spec : calculates in seconds the time between the moment the birth data was entered and birth date/time , input ^^ + current time of 09/31/1925, output 86400 seconds.
  // * Spec : using seconds data calculate mercury years, input 7568640 seconds, output 1 mercury year.
  // * Spec : using seconds data calculate venus years, input 19552320 seconds, output 1 venus year.
  // * Spec : using seconds data calculate mars years, input 59287680 seconds, output 1 mars year.
  // * Spec : using seconds data calculate jupiter years, input 374016960 seconds, output 1 jupiter year.
  // * Spec : using seconds data calculate time remaining based on average usa lifespan of 2483144640 seconds, input 2483144639 seconds, output 1 second.
  // * Spec : using seconds data if time remaining < 0 then return 'bonus' time amount, input 2483144660 seconds, output 20 seconds.
  // * Spec : using seconds data calculate mercury years time remaining based on average usa lifespan of 2483144640 seconds, input 7568640 seconds, output 328 mercury years.
  // * Spec : using seconds data calculate venus years time remaining based on average usa lifespan of 2483144640 seconds, input 7568640 seconds, output 127 venus years.
  // * Spec : using seconds data calculate mars years time remaining based on average usa lifespan of 2483144640 seconds, input 7568640 seconds, output 41 mars years.
  // * Spec : using seconds data calculate jupiter years time remaining based on average usa lifespan of 2483144640 seconds, input 7568640 seconds, output 6 jupiter years.

})