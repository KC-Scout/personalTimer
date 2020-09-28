
function logInput() {
    let targDate = document.getElementById("target-date").value;
    console.log(targDate)
};

function timeLeft() {
    let targDate = document.getElementById("target-date").value;
    let weddingDate = new Date(targDate);
    let today = new Date();
    let diff = weddingDate - today;
    console.log(diff)
    //changeH1(diff);
}

function prototypeTimeLeft() {
    let input = document.getElementById("target-date").value + ' 00:00'; 
    let targDate = new Date(input);
    let today = new Date();
    let diff = targDate - today;
    let days = diff / 86400000;
    let hours = (days % 1) * 24;
    let minutes = (hours % 1) * 60;
    let seconds = (minutes % 1) * 60;

    changeDays(Math.floor(days));
    changeHours(Math.floor(hours));
    changeMinutes(Math.floor(minutes));
    changeSeconds(Math.floor(seconds));

    // console.log("Time Left:")
    // console.log("Days",Math.floor(days))
    // console.log("Hours", Math.floor(hours))
    // console.log("Minutes", Math.floor(minutes))
    // console.log("Seconds", Math.floor(seconds))
    // console.log(targDate);

    // console.log("Time Left:")
}

function updateCountDown(days, hours, minutes, seconds) {
    changeDays(Math.floor(days));
    changeHours(Math.floor(hours))
    changeMinutes(Math.floor(minutes))
    changeSeconds(Math.floor(seconds))
}

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


// READ ME BEFORE NEXT TIME ; YOU NEED TO ADD IN THE OFFSET FROM UTC, SO THIS WOULD BE 300 MINUTES * 60000 MILLISECONDS = OFFSET TO ADD IT