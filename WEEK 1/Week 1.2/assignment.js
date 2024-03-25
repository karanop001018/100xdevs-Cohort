// Q1. Create a counter in Javascript (counts down from 30 to 0)
let counter = 30;

let intervalId = setInterval(() => {
    console.log(counter);
    counter--;

    if (counter < 0) {
        clearInterval(intervalId);
        console.log('Countdown finished!');
    }
}, 1000);




// Q2. Calculate the time it takes between a setTimeout call and the inner function actually running

let start = Date.now();

setTimeout(() => {
    let end = Date.now();
    let timeDifference = end - start;
    console.log(`Time elapsed: ${timeDifference} ms`);
}, 1000);





// Q3. Create a terminal clock (HH:MM:SS)


/*
setInterval(() => {
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    console.clear();
    console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);
*/













