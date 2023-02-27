const YES = 2;
const ALMOST = 1;
const NO = 0;

/* */function nameOf(x) {
  return Object.keys(x)[0];
}

function getDigits(number) {
  return number.toString().split('').map(c => Number(c));
}

function isRollover(number) {
  const digits = getDigits(number);
  return digits.filter(d => d === 0).length === digits.length - 1;
}

function isAllOneDigit(number) {
  const digits = getDigits(number);
  return digits.every(d => d === digits[0]);
}

function isSeries(number, increment) {
  const zeroValue = increment > 0 ? 10 : 0; // whether zero comes after 9 or 1
  const digits = getDigits(number);
  let result = true;
  for (let i=1; i<digits.length; i++) {
    const d = digits[i] || zeroValue; // convert zero to zeroValue
    const dPrev = digits[i-1];
    result = result && (d === dPrev + increment);
  }
  return result;
}

const isSequentialIncreasing = (number) => isSeries(number, 1);
const isSequentialDecreasing = (number) => isSeries(number, -1);

function isPalindrome(number) {
  const digits = getDigits(number);
  const digits2 = getDigits(number).reverse();
//   /* */ console.log(digits, digits2);
  return JSON.stringify(digits) === JSON.stringify(digits2);
}

function isAwesome(number, awesomePhrases) {
  return awesomePhrases.findIndex(p => number === p) >= 0;
}

const testFunctions = [
  isRollover, 
  isAllOneDigit, 
  isSequentialIncreasing, 
  isSequentialDecreasing, 
  isPalindrome, 
  isAwesome
];

function isThisNumberInteresting(number, awesomePhrases) {
  for (f of testFunctions) {
    if (f(number, awesomePhrases)) { return true; }
  }
  return false;
}



function isInteresting(number, awesomePhrases) {
  /* */console.log(number, awesomePhrases)
  /* */console.log("isRollover", isRollover(number))
  /* */console.log("isAllOneDigit", isAllOneDigit(number))
  /* */console.log("isSequentialIncreasing", isSequentialIncreasing(number))
  /* */console.log("isSequentialDecreasing", isSequentialDecreasing(number))
  /* */console.log("isPalindrome", isPalindrome(number))
  /* */console.log("isAwesome", isAwesome(number, awesomePhrases));

  
  for (n of [number, number + 1, number + 2]) {
    /* */console.log(n);
    if (n < 100) { 
      /* */console.log(`${n} is less than 100`);
      continue; 
    }
    if (isThisNumberInteresting(n, awesomePhrases)) { 
      /* */console.log(`${n} is interesting; returning ${+(n === number) + 1}`);
      return +(n === number) + 1; 
    }
  }
  /* */console.log("returning", NO);
  return NO;
}
