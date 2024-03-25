/*
const value = "Karan Patel";
let ans = value.substr(2, 5); //means give 5 index(values/characters) from index 2.
let ans1 = value.slice(2, 5); //means give words from index 2 upto index 5.
console.log(ans);
console.log(ans1);
*/




function cutIt(str, startIndex, endIndex) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i >= startIndex && i < endIndex) {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}
const value = "Karan Patel";
let ans2  = value.slice(2,5);
console.log(ans2);

console.log(cutIt(value,2,5));