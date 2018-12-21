const hour_hand = document.querySelector('.hour-hand');
const minutes_hand = document.querySelector('.min-hand');
const seconds_hand = document.querySelector('.second-hand');

let current_date = new Date();
let lastMinutes = current_date.getMinutes();
let lastHours = current_date.getHours();

let secondsOffset = 90;
let minutesOffset = 90;
let hoursOffset = 90;

const hour_degrees = (360. * ((current_date.getHours()%12) / 12.)) + 90;
const minutes_degrees = (360. * (current_date.getMinutes() / 60.)) + 90;
const seconds_degrees = (360. * (current_date.getSeconds() / 60.)) + 90;

hour_hand.style.transform = "rotate(" + hour_degrees.toString() + "deg)";
minutes_hand.style.transform = "rotate(" + minutes_degrees.toString() + "deg)";
seconds_hand.style.transform = "rotate(" + seconds_degrees.toString() + "deg)";

function update() {
    let current_date = new Date();
    if(current_date.getSeconds() === 0) {
        secondsOffset += 360;
    }
    const seconds_degrees = (360. * (current_date.getSeconds() / 60.)) + secondsOffset;
    seconds_hand.style.transform = "rotate(" + seconds_degrees.toString() + "deg)";

    let hours = current_date.getHours();
    if(hours !== lastHours) {
        if(hours%12 === 0) {
            hoursOffset += 360;
        }
        const hour_degrees = (360. * ((hours%12) / 12.)) + hoursOffset;
        hour_hand.style.transform = "rotate(" + hour_degrees.toString() + "deg)";
        lastHours = hours;
    }
    let minutes = current_date.getMinutes();
    if(minutes !== lastMinutes) {
        if(minutes === 0) {
            minutesOffset += 360;
        }
        const minutes_degrees = (360. * (minutes / 60.)) + minutesOffset;
        minutes_hand.style.transform = "rotate(" + minutes_degrees.toString() + "deg)";
        lastHours = minutes;
    }
}

setInterval(update, 1000);
