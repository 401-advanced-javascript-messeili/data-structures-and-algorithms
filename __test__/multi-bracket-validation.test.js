'use strict';

const multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation');

describe('Multi Bracket Validation', () => {
  it('error unmatched opening { remaining', () => {
    const result = multiBracketValidation('[');
    expect(result).toBeFalsy;
  });
  it('error closing ) arrived without corresponding opening.', () => {
    const result = multiBracketValidation(')');
    expect(result).toBeFalsy;
  });
  it('error closing }. Doesn’t match opening (.', () => {
    const result = multiBracketValidation('[}');
    expect(result).toBeFalsy;
  });
  it('brackets in the string are balanced', () => {
    const result = multiBracketValidation('{}(){}');
    expect(result).toBeTruthy;
  });
  it('brackets in the string are balanced with extra characters', () => {
    const result = multiBracketValidation('()[[Extra Characters]]	');
    expect(result).toBeTruthy;
  });
});
