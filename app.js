// function that takes two arguments and return the sum
const add = (num1, num2) => num1 + num2;
console.log(add(3, 4));

// function that takes any arguments and return the sum
function sum(...args) {
  return args.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}
console.log(sum(2, 3, 4, 5));

// function that takes two strings and return if the first include the second arguement
const stringIncludes = (sentence, word) => {
  const sentenceArr = sentence.toLowerCase().split(' ');
  return sentenceArr.includes(word.toLowerCase());
};
console.log(
  stringIncludes('I drove to new York in a van with my friend', 'new')
);

// function that return an array of the object "name" key
const getNames = (arr) => {
  return arr.reduce((acc, curr) => {
    if (Object.keys(curr)[0] === 'name') {
      acc.push(Object.values(curr)[0]);
    }
    return acc;
  }, []);
};
console.log(
  getNames([
    { a: 1 },
    { name: 'Jane' },
    {},
    { name: 'Mark' },
    { name: 'Sophia' },
    { b: 2 },
  ])
);

// function that takes an array of numbers and returns the index of the largest number
const getLargestNumberIndex = (arr) => {
  return arr.indexOf(
    arr.reduce((acc, curr) => {
      if (curr > acc) acc = curr;
      return acc;
    })
  );
};
console.log(getLargestNumberIndex([7, 1, 4, 12, 9]));

const delay = (n) => {
  return new Promise((resolve, reject) => setTimeout(() => resolve(), n));
};

(async () => {
  console.log('Testing delay');
  await delay(1000);
  console.log('Testing delay end');
})();

// write a function that returns a promise
