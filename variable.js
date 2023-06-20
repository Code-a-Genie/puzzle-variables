//  There will be a string input in this format: 'a+b' 2 lower case letters (a-z) seperated by a '+'

// Return the sum of the two variables.

// There is one correct answer for a pair of variables.

// I know the answers, it is your task to find out.

// Once you crack the code for one or two of the pairs, you will have the answer for the rest.

// It is like when you were in school doing math and you saw "11 = c+h" and you needed to find out what c and h were.

// However you don't have an 11. You have an unknown there as well. Example:

// X = a+b.

// You don't know what X is, and you don't know what b is or a, but it is a puzzle and you will find out.








const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetLength = alphabet.length - 1;
const az = {
  'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
  'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17,
  'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25,
  'z': 26
};


function solution(theVariables) {
  return theVariables.split('+').reduce(function(prev, curr) {
    return az[prev] + az[curr];
  });
}

function randomNumber() {
  return Math.floor(Math.random() * alphabetLength);
}

function randomTestString() {
  return alphabet[randomNumber()] + '+' + alphabet[randomNumber()];
}
let basicTests = {"a+f": 7, "a+a": 2, "a+b": 3, "a+c": 4, "b+b": 4, "a+d": 5,
  "a+e": 6, "c+f": 9, "d+d": 8, "d+g": 11, "c+i": 12, "l+a": 13, "f+h": 14,
  "z+a": 27, "y+y": 50, "q+q": 34, "s+h": 27, "d+e": 9, "b+h": 10,
  "x+x": 48, "f+x": 30, "j+j": 20
};

describe('Basic Tests', function() {
  Object.keys(basicTests).forEach(function(key) {
    it(key, function() {
      assert.strictEqual(theVar(key), basicTests[key]);
    });
  });
});

describe('Random Tests', function() {
  for (let i = 0; i < 100; i++) {
    let current = randomTestString();
    assert.strictEqual(theVar(current), solution(current));
  }
});