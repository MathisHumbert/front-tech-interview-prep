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
const getNames = () => {};

console.log('getNames', getNames);
