
// write a JavaScript function to return a passed string with letters in alphabetical order

const alphabeticalOrder = (str) => str.split('')
.sort((a,b) => a > b ? 1 : -1).join('');

console.log(alphabeticalOrder('webmaster'));
console.log(alphabeticalOrder('javascript'));
