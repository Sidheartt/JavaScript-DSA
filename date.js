// Write a javascript program to get the current date in expected Output: mm-dd-yyyy 0r dd-mm-yyyy

// var today = new Date().toLocaleDateString();
// console.log(today);

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${days}/${month}/${year}`;
}

console.log(formatDate());
