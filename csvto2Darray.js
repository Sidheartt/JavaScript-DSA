// JavaScript program to convert a csv string to a 2D array

const parseCSV = (csvString) => 
csvString.split('\n').map(row=> row.split(','));

const str = 'abc, def, ghi, jkl, mno, pqr, stu, vwx, yza';

console.log(parseCSV(str));