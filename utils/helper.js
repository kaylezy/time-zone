// export function updateTime() {
//     let clock = document.getElementById("clock").value;
  
//     let text = new Date();
  
//     let options;
  
//     if (clock === "local") {
//       options = {};
//     } else {
//       options = {
//         timeZone: clock,
//         hour12: "true",
//         hour: "numeric",
//         minute: "numeric",
//         second: "numeric",
//       };
//     }
//     let timeString = text.toLocaleTimeString("en-US", options);
  
//     if (clock === "Africa/Lagos") {
//       timeString += " in Nigeria";
//     }
//     if (clock === "America/Jamaica") {
//       timeString += " in Jamaica";
//     }
//     if (clock === "Africa/Accra") {
//       timeString += " in Ghana";
//     }
//     if (clock === "Africa/Nairobi") {
//       timeString += " in Kenya";
//     }
//     if (clock === "Africa/Johannesburg") {
//       timeString += " in South Africa";
//     }
//     if (clock === "Canada/Eastern") {
//       timeString += " in Canada";
//     }
//     if (clock === "America/Toronto") {
//       timeString += " in Toronto";
//     }
//     if (clock === "America/New_York") {
//       timeString += " in New York";
//     }
//     if (clock === "Europe/London") {
//       timeString += " in the UK";
//     }
//     document.getElementById("clock").textContent = timeString;
//   }
  
//   window.onload = updateTime;
  
//   setInterval(updateTime, 1000);
  