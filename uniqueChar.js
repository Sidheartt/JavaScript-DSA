// Javascript function to extract unique characters from a string

const getUniqueChars = (str) => 
str.split('').filter(
    (item, index, arr) =>
     arr.slice(index + 1).indexOf(item) === -1 
     );

    console.log(getUniqueChars('aaaabbbbbbcccc'));
    console.log(getUniqueChars('aaaa94hhhhhhhhhhhfffgggggggrrrreettteewwqwwwwwwhhhh'));

  