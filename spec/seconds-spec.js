import { Second } from './../src/seconds.js';

describe('Second', function() {

  // it('should accept input in form of age in integer format', function () {
  //   let newUser = new Second(10);
  //   expect(newUser.dob).toEqual(10);
  // })
  //
  // it('outputs the year user was born using age and current date', function () {
  //   let newUser = new Second(10);
  //   expect(newUser.dobDate).toEqual(2008);
  // })

  // it('calculates seconds for user', function () {
  //   let newUser = new Second(1);
  //   console.log(newUser.calculatedSeconds);
  //   console.log(newUser.currentUTC);
  //   console.log(newUser.dobUTC);
  //   console.log(newUser.calculatedSeconds);
  //   expect(newUser.calculatedSeconds).toEqual(31536000);
  // })

  // it('mercury years output', function () {
  //   let newUser = new Second(1);
  //   expect(newUser.mercury()).toEqual(4);
  // })
  //
  // it('venus years output', function () {
  //   let newUser = new Second(2);
  //   expect(newUser.venus()).toEqual(3);
  // })
  //
  // it('mars years output', function () {
  //   let newUser = new Second(10);
  //   expect(newUser.mars()).toEqual(5);
  // })

  // it('jupiter years output', function () {
  //   let newUser = new Second(13);
  //   expect(newUser.jupiter()).toEqual(1);
  // })

  // it('time left should be 2483144640 - calculatedSeconds', function () {
  //   let newUser = new Second(10);
  //   expect(newUser.remaining).toEqual(2167525440);
  // })


  // * Spec : using seconds data if time remaining < 0 then return 'bonus' time amount, input 2483144660 seconds, output 20 seconds.
  // skipping this spec, it is a UI function- if the returned number from the previous spec is a negative number, display "bonus time" instead of "time left"

  // it('time left for mercury should be remaining / 7568640', function () {
  //   let newUser = new Second(10);
  //   expect(newUser.mercuryRemaining()).toEqual(286);
  // })

  it('time left for venus should be remaining / 19552320', function () {
    let newUser = new Second(10);
    expect(newUser.venusRemaining()).toEqual(286);
  })

  // * Spec : using seconds data calculate mercury years time remaining based on average usa lifespan of 2483144640 seconds, input 7568640 seconds, output 328 mercury years.
  // * Spec : using seconds data calculate venus years time remaining based on average usa lifespan of 2483144640 seconds, input 7568640 seconds, output 127 venus years.
  // * Spec : using seconds data calculate mars years time remaining based on average usa lifespan of 2483144640 seconds, input 7568640 seconds, output 41 mars years.
  // * Spec : using seconds data calculate jupiter years time remaining based on average usa lifespan of 2483144640 seconds, input 7568640 seconds, output 6 jupiter years.


})
