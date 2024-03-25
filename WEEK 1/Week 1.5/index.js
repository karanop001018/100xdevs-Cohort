/*
function findSum(n){
    let ans = 0;
    for(let i=0; i<n; i++){
        ans+=i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

// busy waiting
function syncSleep(){
    let a = 1;
    for(let i=0; i<1000000000; i++){
        a++;
    }
}


// syncSleep();
// findSumTill100();
setTimeout(findSumTill100, 1000)
console.log("Hello World")


 


const fs = require("fs");
// filesystem module

*/





// --------------------------: Promises :--------------------------
// Ugly Way

// my own asynchronous function
// const fs = require("fs");
// function karanReadFile(cb){
//     fs.readFile("a.txt", "utf-8", function(err, data){
//         cb(data);
//     });
// }

// // callback function to call
// function onDone(data){
//     console.log(data);
// }
// karanReadFile(onDone);



// Better Way
//my own asynchronous function

const fs = require("fs");
console.log("Inside karan's file");
return new Promise(function(resolve){
    console.log("Inside promise");
    fs.readFile("kp.txt", "utf-8", function(err, data){
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log("Before resolve");
        resolve(data);
    });    
});
//callback function to call
function onDone(data){
    console.log(data);
}
karanReadFile().then(onDone);



// => pending, resolved
var d = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hey there");
    }, 1000);
  });
  
  function callback() {
    console.log(d); //promise state is resolved
  }
  console.log(d); //promise state is pending
  d.then(callback);
  
/*
  What even is a promise?
  Whenever you create it, you need to pass in a function as the first argument which has resolve as the First argument.
  
  Promises are a way to handle asynchronous operations in JavaScript.
  
  let p = new Promiser(function(resolve){
  
  });
  console.log(p);
*/
