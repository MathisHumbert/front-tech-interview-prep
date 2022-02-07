// function that takes two arguments and return the sum
const add = (num1, num2) => num1 + num2;
// console.log(add(3, 4));

// function that takes any arguments and return the sum
function sum(...args) {
  return args.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}
// console.log(sum(2, 3, 4, 5));

// function that takes two strings and return if the first include the second arguement
const stringIncludes = (sentence, word) => {
  const sentenceArr = sentence.toLowerCase().split(' ');
  return sentenceArr.includes(word.toLowerCase());
};
// console.log(
//   stringIncludes('I drove to new York in a van with my friend', 'new')
// );

// function that return an array of the object "name" key
const getNames = (arr) => {
  return arr.reduce((acc, curr) => {
    if (Object.keys(curr)[0] === 'name') {
      acc.push(Object.values(curr)[0]);
    }
    return acc;
  }, []);
};
// console.log(
//   getNames([
//     { a: 1 },
//     { name: 'Jane' },
//     {},
//     { name: 'Mark' },
//     { name: 'Sophia' },
//     { b: 2 },
//   ])
// );

// function that takes an array of numbers and returns the index of the largest number
const getLargestNumberIndex = (arr) => {
  return arr.indexOf(
    arr.reduce((acc, curr) => {
      if (curr > acc) acc = curr;
      return acc;
    })
  );
};
// console.log(getLargestNumberIndex([7, 1, 4, 12, 9]));

// write a function that returns a promise
const delay = (n) => {
  return new Promise((resolve, reject) => setTimeout(() => resolve(), n));
};
// (async () => {
//   console.log('Testing delay');
//   await delay(1000);
//   console.log('Testing delay end');
// })();

// ARRAY
let myArray = ['a', 'b', 'c', 'd'];

// doesn't create a new array, just modify the existing one
// myArray.push('end');
// myArray.unshift('start');

// ES6
myArray = ['start', ...myArray];
myArray = [...myArray, 'end'];
// myArray = ['start', ...myArray, 'end'];
// console.log(myArray);

// Create a private variable
function secretVariable() {
  let private = 'super secret code';
  return function () {
    return private;
  };
}
let getPrivateVariable = secretVariable();
// console.log(getPrivateVariable());

// What is the output ?
var num = 4;
function outer() {
  var num = 2;
  function inner() {
    num++;
    var num = 3;
    console.log(num);
  }
  inner();
}
// outer();
// 3

// What is the output ?
// console.log(typeof typeof 1);
// ==> typeof('number')
// string

// What is the output ?
let hero = {
  _name: 'John Doe',
  getSecretIdentity() {
    return this._name;
  },
};
let stoleSecretIdentity = hero.getSecretIdentity;
// let stoleSecretIdentity = hero.getSecretIdentity.bind(hero); will work
// console.log(stoleSecretIdentity());
// console.log(hero.getSecretIdentity());

// Palindrome
const palindrome = (str) => {
  str = str.toLowerCase();
  console.log(str === str.split('').reverse().join(''));
};
// palindrome('kayak');

// Difference
function foo1() {
  return {
    bar: 'hello',
  };
}
function foo2() {
  return;
  {
    bar: 'hello';
  }
}
// console.log(foo1());
// console.log(foo2());

// Fibonaci sequence
const fibonaci = (num) => {
  const result = [0, 1];
  for (let i = 2; i <= num; i++) {
    const prevNum1 = result[i - 1];
    const prevNum2 = result[i - 2];
    result.push(prevNum1 + prevNum2);
  }
  console.log(result);
};
// fibonaci(15);

// Fibonaci sequence recursion
const fibonnaciRecursion = (num) => {
  if (num < 2) return num;

  return fibonnaciRecursion(num - 1) + fibonnaciRecursion(num - 2);
};
// console.log(fibonnaciRecursion(15));

const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    // check if the number is a multiple of 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    }
    // check if the number is a multiple of 3
    else if (i % 3 === 0) {
      console.log('fizz');
    } // check if the number is a multiple of 5
    else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
};
fizzBuzz(5);
