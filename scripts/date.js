let millInDay = 86400000;
let today = Date.now();

function changeDays(newHeader) {
    let x = document.getElementById("days")
    x.innerHTML = newHeader;
}
function changeHours(newHeader) {
    let x = document.getElementById("hours")
    x.innerHTML = newHeader;
}
function changeMinutes(newHeader) {
    let x = document.getElementById("minutes")
    x.innerHTML = newHeader;
}
function changeSeconds(newHeader) {
    let x = document.getElementById("seconds")
    x.innerHTML = newHeader;
}

// changeH1(today);

// function daysLeft(futDate) {
//     let currTime = new Date();
//     let diff = futDate - currTime;
//     let days = Math.floor(diff / 86400000) //milliseconds in a day
//     console.log(days);
// }

function timeLeft() {
    let weddingDate = new Date('2020/10/17');
    let today = new Date();
    let diff = weddingDate - today;
    changeH1(diff);
}

function iterateThruTime() {
    while (1 > 0) {
        console.log('Hello');
    }
}

function todaysDate() {
    let today = new Date();
    changeH1(today);
}

// function otherIterateThruTime() {
//     for (i = 1; i > 0; i++){
//         changeH1(i);
//     }
// }

setInterval(prototypeTimeLeft, 1000);

//let weddingDate = new Date('2020/10/17');


//How do I get days, hours, seconds left? 
//Math.flor(today) = days left
//3,600,000 = milliseconds in an hour
//Take the number after the period multiply * 86,400,000  = milliseconds partial day divide that by 3,600,000 (milli in hour) to get hours
//Take the number after the period of the horus multiply by 60 = minutes

//Take the number after the period of minutes multiply by 60 = Seconds 

// An Example
// Would look lkke this 

// doing a modulo 1 gives you the number behind the decimal point

// 24 * number after decimal in days gives you hours    



function prototypeTimeLeft() {
    let weddingDate = new Date('2020/10/17');
    let today = new Date();
    let diff = weddingDate - today;
    let days = diff / 86400000;
    let hours = (days % 1) * 24;
    let minutes = (hours % 1) * 60;
    let seconds = (minutes % 1) * 60;

    changeDays(Math.floor(days));
    changeHours(Math.floor(hours));
    changeMinutes(Math.floor(minutes));
    changeSeconds(Math.floor(seconds));
}