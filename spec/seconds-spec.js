import { Second } from './../src/seconds.js';

describe('Second', function() {

  it('should accept input in form of yyyy/mm/dd in integer format', function () {
    const newUser = new Second(2018, 8, 3);
    expect(newUser.dob).toEqual([2018, 8, 3]);
  })

  it('calculates seconds for user', function () {
    let newUser = new Second(2017,8,3);
    expect(newUser.calculatedSeconds).toEqual(31536001);
  })

  it('mercury years output', function () {
    let newUser = new Second(2017,8,3);
    expect(newUser.mercury()).toEqual(4);
  })

  it('venus years output', function () {
    let newUser = new Second(2016,8,3);
    expect(newUser.venus()).toEqual(3);
  })

  it('mars years output', function () {
    let newUser = new Second(2008,8,3);
    expect(newUser.mars()).toEqual(5);
  })

  it('jupiter years output', function () {
    let newUser = new Second(2005,8,3);
    expect(newUser.jupiter()).toEqual(1);
  })

  it('time left should be 2483144640 - calculatedSeconds', function () {
    let newUser = new Second(2008,8,3);
    expect(newUser.remaining).toEqual(2167611839);
  })

  // * Spec : using seconds data if time remaining < 0 then return 'bonus' time amount, input 2483144660 seconds, output 20 seconds.
  // skipping this spec, it is a UI function- if the returned number from the previous spec is a negative number, display "bonus time" instead of "time left"

  it('time left for mercury should be remaining / 7568640', function () {
    let newUser = new Second(2008,8,3);
    expect(newUser.mercuryRemaining()).toEqual(286);
  })

  it('time left for venus should be remaining / 19552320', function () {
    let newUser = new Second(2008,8,3);
    expect(newUser.venusRemaining()).toEqual(110);
  })

  it('time left for mars should be remaining / 59287680', function () {
    let newUser = new Second(2008,8,3);
    expect(newUser.marsRemaining()).toEqual(36);
  })

  it('time left for jupiter should be remaining / 374016960', function () {
    let newUser = new Second(2008,8,3);
    expect(newUser.jupiterRemaining()).toEqual(5);
  })

  it('keith richards case: 74 + 56 = 130 (age in 2073) in dog jupiter dog years (/374016960 , *7 )', function () {
    let newUser = new Second(1943,12,18);
    expect(newUser.keithrichardsDogYears()).toEqual(70);
  })

  it('mayfly case - 1 mayfly unit = 600 seconds, age of sun in seconds 1.4476251e+17, age of sun in mayfly units = 2.4127085e+14 - output result should be (age of sun in mayfly units) divided by (age of user in mayfly units), to be diplayed as ratio 1:xxx,xxx , value returned by function is xxx,xxx', function () {
    let newUser = new Second(2008,8,3);
    expect(newUser.mayFlyCase()).toEqual(458787517);
  })

})
