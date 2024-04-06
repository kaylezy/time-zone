import "./style.css";

export function updateTime() {
  let timezone = document.getElementById("timezone").value;

  let text = new Date();

  let options;

  if (timezone === "local") {
    options = {};
  } else {
    options = {
      timeZone: timezone,
      hour12: "true",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
  }
  let timeString = text.toLocaleTimeString("en-US", options);

  if (timezone === "Africa/Lagos") {
    timeString += " in Nigeria";
  }
  if (timezone === "Africa/Accra") {
    timeString += " in Ghana";
  }
  if (timezone === "Africa/Nairobi") {
    timeString += " in Kenya";
  }
  if (timezone === "Africa/Johannesburg") {
    timeString += " in South Africa";
  }
  if (timezone === "Canada/Eastern") {
    timeString += " in Canada";
  }
  if (timezone === "America/Toronto") {
    timeString += " in Toronto";
  }
  if (timezone === "America/New_York") {
    timeString += " in New York";
  }
  if (timezone === "Europe/London") {
    timeString += " in the UK";
  }
  if (timezone === "Europe/Paris") {
    timeString += " in France";
  }
  if (timezone === "Europe/Berlin") {
    timeString += " in Germany";
  }
  if (timezone === "Asia/Dubai") {
    timeString += " in Dubai";
  }
  document.getElementById("currentTime").textContent = timeString;
}

window.onload = updateTime;

setInterval(updateTime, 1000);
