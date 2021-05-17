
console.log("To find the number of even numbers in an array using arrow Function");
const countEvenNumbers = (arr) => 
    arr.filter(num => num%2===0).length;

    console.log(countEvenNumbers([1,2,3,4,5,6,7]));
    console.log(countEvenNumbers([2,2,3,2,3,2,2]));
    console.log(countEvenNumbers([100,2,3,42,51,6,7,1000,992]));




