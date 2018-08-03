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
  //
  // it('calculates seconds for user', function () {
  //   let newUser = new Second(1);
  //   console.log(newUser.calculatedSeconds);
  //   console.log(newUser.currentUTC);
  //   console.log(newUser.dobUTC);
  //   console.log(newUser.calculatedSeconds);
  //   expect(newUser.calculatedSeconds).toEqual(31536000);
  // })
  //
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
  //
  // it('jupiter years output', function () {
  //   let newUser = new Second(13);
  //   expect(newUser.jupiter()).toEqual(1);
  // })
  //
  // it('time left should be 2483144640 - calculatedSeconds', function () {
  //   let newUser = new Second(10);
  //   expect(newUser.remaining).toEqual(2167525440);
  // })
  //
  // // * Spec : using seconds data if time remaining < 0 then return 'bonus' time amount, input 2483144660 seconds, output 20 seconds.
  // // skipping this spec, it is a UI function- if the returned number from the previous spec is a negative number, display "bonus time" instead of "time left"
  //
  // it('time left for mercury should be remaining / 7568640', function () {
  //   let newUser = new Second(10);
  //   expect(newUser.mercuryRemaining()).toEqual(286);
  // })
  //
  // it('time left for venus should be remaining / 19552320', function () {
  //   let newUser = new Second(10);
  //   expect(newUser.venusRemaining()).toEqual(110);
  // })
  //
  // it('time left for mars should be remaining / 59287680', function () {
  //   let newUser = new Second(10);
  //   expect(newUser.marsRemaining()).toEqual(36);
  // })
  //
  // it('time left for jupiter should be remaining / 374016960', function () {
  //   let newUser = new Second(10);
  //   expect(newUser.jupiterRemaining()).toEqual(5);
  // })

  it('keith richards case: 74 + 56 = 130 (age in 2073) in dog jupiter dog years (/374016960 , *7 )', function () {
    let newUser = new Second(130);
    expect(newUser.keithrichardsDogYears()).toEqual(70);
  })

  it('mayfly case - 1 mayfly unit = 600 seconds, age of sun in seconds 1.4476251e+17, age of sun in mayfly units = 2.4127085e+14- output result should be (age of sun in mayfly units) divided by (age of user in mayfly units), to be diplayed as ratio 1:xxx,xxx', function () {
    let newUser = new Second(10);
    expect(newUser.mayFlyCase()).toEqual(5);
  })

  // * Spec : Assuming that the average lifespan of a mayfly is 5 minutes, determine how many mayfly lifespans a human user has lived and then compare it the current age (in Earth years) of our sun (4.603 billion years), input .000019, output tbd

})
