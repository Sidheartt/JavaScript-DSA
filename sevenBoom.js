// if 7 anywhere in arr return Boom! or return there is no 7 in this array 

function sevenBoom(arr) {
    let result = 'There is no 7 in this array';

    for (let i=0; i< arr.length ; i++){
        const arrayItemString = String(arr[i]);
        if(arrayItemString.includes('7')){
            result = 'Boom';
            break;
        }
    }
    return result;
}

console.log(sevenBoom([5,7,8]));
console.log(sevenBoom([5,58,8]));
console.log(sevenBoom([5,97,8,99,42]));