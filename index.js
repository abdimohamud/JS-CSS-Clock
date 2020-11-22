const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const time = document.querySelector("h1");
console.log(time);

function setDate() {
  const now = new Date();

  const second = now.getSeconds();
  const secondDegree = (second / 60) * 360 + 90;

  const minute = now.getMinutes();
  const minuteDegree = (minute / 60) * 360 + 90;

  const hour = now.getHours();
  const hourDegree = (hour / 12) * 360 + (minute / 60) * 30 + 90;

  const secondss = second >= 10 ? second : `0${second}`;
  const minutess = minute >= 10 ? minute : `0${minute}`;
  const hourrr = hour >= 10 ? hour : `0${hour}`;
  const daytime = hour > 12 ? "PM" : "AM";

  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  time.textContent = `${hourrr - 12}:${minutess}:${secondss} ${daytime}`;

  if (secondDegree === 90) {
    secondHand.style.transition = "all 0s";
  } else {
    secondHand.style.transition = "all 0.5s";
  }

  if (minuteDegree === 90) {
    minuteHand.style.transition = "all 0s";
  } else {
    minuteHand.style.transition = "all 0.5s";
  }
}
setInterval(setDate, 1000);
