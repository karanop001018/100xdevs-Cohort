// map, filter, arrow fns

// given an array, give me back a new array in which every value is multiplied by 2
// [1, 2, 3, 4, 5] => [2, 4, 6, 8, 10]

const numbers = [1, 2, 3, 4, 5];
// solution
const newArray = [];

for(let i=0; i<numbers.length; i++) {
    newArray.push(numbers[i] * 2);
    // newArray.push(numbers[i] * 3);
}
console.log(newArray);




// using  the 'map' function
function transform(i){
    return i * 2;
}
const ans = numbers.map(transform);
console.log(ans);






//  Create a map function that takes 2 inputs in an array, and a transformation callback function and transforms the array into a new one using the transformation function

function map(arr, transform) {
    const newArray = [];
    for(let i=0; i<arr.length; i++) {
        newArray.push(transform(arr[i]));
    }
    return newArray;
}

const arr = [1, 2, 3, 4, 5];
const result = map(arr, transform);
console.log('result:', result);






//  filtering
// given an input array, give me back all the even values from it

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenArray = [];
for (let i=0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
        evenArray.push(array[i]);
    }
}
console.log('evenArray: ', evenArray);


const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function filteringLogic(n){
    if(n%2 == 0) {
        return true;
    } else {
        return false;
    }
}

const filteredEvenArray = array.filter(filteringLogic);
console.log(filteredEvenArray);

const kp = ["karan", "patel", "cse"]
const array2 = kp.filter(function (m){
    if(m.startsWith("k")) {
        console.log("True");
        return true;
    } else {
        console.log("False");
        return false;
    }
}); // Add closing parenthesis here
console.log("array2", array2);


