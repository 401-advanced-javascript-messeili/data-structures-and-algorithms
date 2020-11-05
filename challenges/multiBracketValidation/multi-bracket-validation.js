'use strict';

function multiBracketValidation(input) {
  if (!input) {
    return false;
  }
  let startBracket;
  let endBracket;
  let savedBrackets = [];
  for (let index = 0; index < input.length; index++) {
    startBracket = savedBrackets[savedBrackets.length - 1];
    if (startBracket == '{') {
      endBracket = '}';
    } else if (startBracket == '(') {
      endBracket = ')';
    } else if (startBracket == '[') {
      endBracket = ']';
    }
    if (input[index] == '{' || input[index] == '(' || input[index] == '[') {
      startBracket = input[index];
      savedBrackets.push(startBracket);
    }

    if (input[index] == '}' || input[index] == ')' || input[index] == ']') {
      if (input[index] == endBracket) {
        savedBrackets.pop();
      } else {
        return false;
      }
    }
  }
  if (savedBrackets.length > 0) {
    return false;
  }

  return true;
}
console.log(multiBracketValidation('[]'));

module.exports = multiBracketValidation;
