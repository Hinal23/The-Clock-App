let hours = 0;
let seconds = 0;
let minutes = 0;
let id;
let lapBtn = document.querySelector(".timer__lap");
let lap_box = document.querySelector(".timer__laps-list");
let isWatchStarted = false;
let islapon = false;
document.querySelector("#start").style.display = "block";
document.querySelector("#stop").style.display = "none";
document.querySelector("#reset").style.display = "none";
document.querySelector("#lap").style.display = "none";
document.querySelector("#clear").style.display = "none";
const startStopWatch = () => {
  if (isWatchStarted) {
    return;
  }
  isWatchStarted = true;

  id = setInterval(() => {
    seconds = parseInt(seconds);
    minutes = parseInt(minutes);
    hours = parseInt(hours);
    seconds++;
    if (seconds / 60 == 1) {
      minutes++;
      seconds = 0;
    }
    if (minutes / 60 == 1) {
      hours++;
      minutes = 0;
    }
    if (seconds < 10 || seconds === 0) {
      seconds = "0" + seconds;
    }
    if (minutes < 10 || minutes === 0) {
      minutes = "0" + minutes;
    }
    if (hours < 10 || hours === 0) {
      hours = "0" + hours;
    }
    document.querySelector(".timer").innerHTML =
      hours + ":" + minutes + ":" + seconds;
  }, 1000);
  document.querySelector("#start").style.display = "none";
  document.querySelector("#stop").style.display = "block";
  document.querySelector("#lap").style.display = "block";
  document.querySelector("#reset").style.display = "none";
  document.querySelector("#clear").style.display = "block";
  document.querySelector(".timer__laps-list").style.display = "block";
  document.getElementById("lap").disabled = false;
};
const onStop = () => {
  islapon = true;
  isWatchStarted = false;
  clearInterval(id);
  document.querySelector("#stop").style.display = "none";
  document.querySelector("#start").style.display = "block";
  document.querySelector("#reset").style.display = "block";
  document.querySelector("#lap").style.display = "none";
  document.querySelector("#clear").style.display = "none";
  document.getElementById("lap").disabled = true;
};

const resetStop = () => {
  clearInterval(id);
  isWatchStarted = false;
  document.querySelector(".timer").innerText = "00:00:00";
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector("#stop").style.display = "none";
  document.querySelector("#start").style.display = "block";
  document.querySelector("#reset").style.display = "none";
  document.getElementById("lap").disabled = false;
  document.querySelector(".timer__laps-list").innerText = " ";
};
function LapStop() {
  islapon = true;
  const currt = document.querySelector(".timer").innerText;
  let lapTime = document.createElement("li");
  lapTime.textContent = currt;
  lapTime.classList = "lapItem";
  lap_box.appendChild(lapTime);
}
const ClearLaps = () => {
  document.querySelector(".timer__laps-list").innerText = " ";
};
