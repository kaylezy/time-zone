import "./style.css";
import "./utils/bling";
import { updateTime } from "./time-zone.js";

// document.$$("#clock").innerHTML = ``;

let clock = function () {
  let secDots = document.getElementById("secDots");
  let minDots = document.getElementById("minDots");
  let hrDots = document.getElementById("hrDots");

  let date = new Date();
  let hours = date.getHours();
  let amPm = hours >= 12 ? "PM" : "AM";
  hours = hours === 0 ? 12 : hours;
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let secondsDots = "";
  for (let i = 1; i < 61; i++) {
    let rotation = i * 6;
    if (i === seconds) {
      secondsDots += `<div class='dot active' style='transform: rotate(${rotation}deg)'></div>`;
    } else {
      secondsDots += `<div class='dot' style='transform: rotate(${rotation}deg)'></div>`;
    }
  }

  let minutesDots = "";
  for (let i = 1; i < 61; i++) {
    let rotation = i * 6;
    if (i === minutes) {
      minutesDots += `<div class='dot active' style='transform: rotate(${rotation}deg)'></div>`;
    } else {
      minutesDots += `<div class='dot' style='transform: rotate(${rotation}deg)'></div>`;
    }
  }

  let hoursDots = "";
  for (let i = 1; i < 13; i++) {
    let rotation = i * 30;
    if (i === hours) {
      hoursDots += `<div class='dot active' style='transform: rotate(${rotation}deg)'></div>`;
    } else {
      hoursDots += `<div class='dot' style='transform: rotate(${rotation}deg)'></div>`;
    }
  }

  secDots.innerHTML =
    secondsDots +
    `<b>${amPm}</b> <h2>${zero(seconds)} <br><span>Seconds</span></h2>`;
  minDots.innerHTML =
    minutesDots + `<h2>${zero(minutes)}<br><span>Minutes</span></h2>`;
  hrDots.innerHTML =
    hoursDots + `<h2>${zero(hours)}<br><span>Hours</span></h2>`;
};

//time zone according to local time

//add zero in single digit number
let zero = function (number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
};
setInterval(clock, 1000);
