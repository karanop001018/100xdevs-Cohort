// BASICS


console.log("Hello World");

let number = 5;
number = "Karan";
console.log(number);

// var a = prompt("Enter your Full Name");
// console.log("Hello " + a);

let name = "Karan Patel";
let age = 18;
let ismarried = false;

if(ismarried == true){
    console.log(name + " is married");
}
if(ismarried == false){
    console.log(name + " is not married");
}


answer = 0;
for(let i = 0; i<=10; i++){
    answer = answer+i;
}
console.log(answer);



// Question 1 : Write the program to greet a person given their first and last name
function greet(firstName, lastName) {
    var greeting = "Hello, " + firstName + " " + lastName + "!";
    return greeting;
}
console.log(greet("Karan", "Patel"));


// Question 2 : Write a program that greets a person based on their gender. (If else)
function greeting(fname, lname, gender){
    if(gender == "male"){
        console.log("Hello " + fname + lname);
    }
    else if(gender == "female"){
        console.log("Hello " + fname + lname);
    }
    else{
        console.log("Invalid Input");
    }
    return greeting;
}
greeting("Karan"," Patel","male");





// Question 3 : Write a program that counts from 0 - 1000 and prints (for loop)

for(let i = 0; i<=1000; i++){
    console.log(i);
}



// Question 4 : Write a program prints all the even numbers in an array

function evenNumbers(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);
        }
    }
}

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// Question 5 : Write a program to print the biggest number in an array

function biggestNumber(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    console.log(max);
}

biggestNumber([136, 322, 853, 456, 845, 676, 917, 844, 912, 100]);





// Question 6 : Write a program that prints all the male people’s first name given a complex object 

function maleFirstNames(people) {
    for (var i = 0; i < people.length; i++) {
        if (people[i].gender === 'male') {
            console.log(people[i].firstName);
        }
    }
}
function femaleFirstNames(people) {
    for (var i = 0; i < people.length; i++) {
        if (people[i].gender === 'female') {
            console.log(people[i].firstName);
        }
    }
}
var people = [
    {firstName: 'Karan', lastName: 'Patel', gender: 'male'},
    {firstName: 'Omkar', lastName: 'Sahastrbuddhe', gender: 'male'},
    {firstName: 'Tanisha', lastName: 'Kapila', gender: 'female'},
    {firstName: 'Maitree', lastName: 'Patel', gender: 'female'},
    {firstName: 'Ruchit', lastName: 'Parmar', gender: 'male'},
];

maleFirstNames(people);
femaleFirstNames(people);





// Question 7 : Write a program that reverses all the elements of an array

function reverseArray(array) {
    var start = 0;
    var end = array.length - 1;
    while (start < end) {
        var temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
    return array;
}
console.log(reverseArray([1, 2, 3, 4, 5]));





// Question 8 : Write a function that finds the sum of two numbers 
function  addNumbers(num1, num2){
   let result= num1 + num2 ;
   return result;
}
// console.log("Enter first number : ")
let num1 = prompt(( "Enter first number : "));
// console.log("Enter second number : ")
let num2 = prompt(("Enter second number : "));
console.log(`The sum of ${num1} and ${num2} is ${addNumbers(num1,num2)}`);



// Question 9 : Write another function that takes this sum and prints it in passive tense

function sumOfTwoNumbers() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let sum = num1 + num2;
    printSumInPassive(sum);
}

function printSumInPassive(sum) {
    console.log(`The sum of ${sum} has been calculated.`);
}

// Call the function
sumOfTwoNumbers();
