import { Second } from './../src/seconds.js';

describe('Second', function() {

  it('should accept input in form of age in integer format', function () {
    let newUser = new Second(10);
    expect(newUser.dob).toEqual(10);
  })

})
