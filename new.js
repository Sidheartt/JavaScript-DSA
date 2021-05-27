// write a js program to create a new string adding "New!" in front of given string and/or
//  return the original string if it starts with "New!"

const addNew = (str) => str.indexOf('New!') === 0 ? str : `New! ${str}`;

console.log(addNew("Office"));
console.log(addNew("New! Office"));
console.log(addNew("Music"));
console.log(addNew("New! Life"));