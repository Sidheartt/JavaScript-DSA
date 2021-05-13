// Javascript program to check is either of the numbers or sum of the two numbers is equal to 100 (Arrow function)

const isEqualto100 = (a,b) => a===100 || b===100 || (a+b) === 100;
console.log(isEqualto100(100,8));
console.log(isEqualto100(9,8));
console.log(isEqualto100(70,30));