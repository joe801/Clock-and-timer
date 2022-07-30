// Stopwatch 
//setting variable to be used for stopwatch application

let time = document.getElementById("time");
let sec =document.getElementById("sec");
let stop_min =document.getElementById("stop_min");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let interval;

let count = 0;
let count_sec = 0;
let count_min = 0;

// stopwatch function
function counts() {
    count = Math.min(100, count + 1)
    time.innerText = count;
    if (count > 99){
        count_sec = Math.min(60, count_sec + 1);
        if (count_sec <= 9) {
            sec.innerText = "0" + count_sec;
        } else{
            sec.innerText = count_sec;
        }
        count = 0;
    }
    if (count_sec > 59) {
        count_min++;
        if (count_min <= 9) {
            stop_min.innerText = "0" + count_min;
        } else{
            stop_min.innerText = count_min;
        }
        count_sec = 0;
    }
}

const auto = () =>{
    interval = setInterval(counts, 10);
}

// adding click listeners for all button in stopwatch 
start.addEventListener('click', () => {
    auto();
});

stop.addEventListener('click', () => {
    clearInterval(interval);
});

reset.addEventListener('click', () => {
    clearInterval(interval);
    time.innerText = "00";
    sec.innerText = "00";
    stop_min.innerText = "00";
    count = 0;
    count_sec = 0;
     count_min = 0;
});


// Countdown
//setting variable for countdown

let hour = document.getElementById("hour");
let minutes =document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let play =document.getElementById("play");
let cancel = document.getElementById("cancel");
let reset_c = document.getElementById("reset_c");
let interval_count;

function start_count(){
    hour.readOnly = true;
    minutes.readOnly = true;
    seconds.readOnly = true;
    if (hour.value == 0 && minutes.value == 0 && seconds.value == 0) {
        hour.value = 0;
        minutes.value = 0;
        seconds.value = 0;
    } else if (seconds.value != 0) {
        seconds.value--;
    }
    else if (seconds.value == 0 && minutes.value != 0) {
        seconds.value = 59;
        minutes.value--;
    }
    else if (minutes.value == 0 && hour.value != 0) {
        seconds.value = 59;
        minutes.value = 59;
        hour.value--;
    }
}

play.addEventListener('click', () =>{
    interval_count = setInterval(start_count, 1000);
});

cancel.onclick = () =>{
    clearInterval(interval_count);
}

reset_c.onclick = () =>{
    clearInterval(interval_count);
    hour.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    hour.readOnly = false;
    minutes.readOnly = false;
    seconds.readOnly = false;
}

// Clock

let hour_hand = document.getElementById("hour_clock");
let minute_hand = document.getElementById("minute_clock");
let second_hand = document.getElementById("second_clock");

function rotate(element, rotation){
    element.style.setProperty('--r', rotation * 360);
}

function setTime(){
    let currentTime = new Date();
    let clock_second = currentTime.getSeconds() / 60;
    let clock_minute = (clock_second + currentTime.getMinutes()) / 60;
    let clock_hour = (clock_minute + currentTime.getHours()) / 12;

    rotate(hour_hand, clock_hour);
    rotate(minute_hand, clock_minute);
    rotate(second_hand, clock_second);
}

setInterval(setTime, 1000);

setTime();

