let timeStampTimer;
let time_start;
let audio = new Audio("assets/alarm_clock_galaxy_2.mp3");

//let timer = document.querySelector(".inputed_time");
document.querySelector("#starttime").style.display = "block";
document.querySelector("#resettime").style.display = "none";
document.querySelector(".circle").style.display = "none";
document.querySelector("#timer_value").style.display = "block";
const startTimer = () => {
  time_start = document.getElementById("timer_value").value;
  document.querySelector(".inputed_time").innerText = time_start;
  time_start = time_start.split(":");
  let total_seconds =
    parseInt(time_start[0] * 60 * 60) +
    parseInt(time_start[1] * 60) +
    parseInt(time_start[2]);
  TimerUsingTimeStamp(total_seconds);
  document.querySelector("#starttime").style.display = "none";
  document.querySelector("#resettime").style.display = "block";
  document.querySelector(".circle").style.display = "block";
  document.querySelector("#timer_value").style.display = "none";
};
const TimerUsingTimeStamp = (total_seconds) => {
  if (total_seconds > 0) {
    total_seconds--;
  }
  let hours_t = Math.floor(total_seconds / 60 / 60);
  let minutes = Math.floor(total_seconds / 60) - hours_t * 60;
  let seconds = total_seconds % 60;
  if (seconds < 10 || seconds == 0) {
    seconds = "0" + seconds;
  }
  if (minutes < 10 || minutes == 0) {
    minutes = "0" + minutes;
  }
  if (hours_t < 10 || hours_t == 0) {
    hours_t = "0" + hours_t;
  }
  document.querySelector(".inputed_time").innerText =
    hours_t + ":" + minutes + ":" + seconds;

  if (+hours_t === 0 && +minutes === 0 && +seconds === 0) {
    audio.play();
  }

  clearInterval(timeStampTimer);
  timeStampTimer = setInterval(() => {
    TimerUsingTimeStamp(total_seconds);
  }, 1000);
};
const onReset = () => {
  document.getElementById("timer_value").value = "00:00:00";
  clearInterval(timeStampTimer);
  document.querySelector("#starttime").style.display = "block";
  document.querySelector("#resettime").style.display = "none";
  document.querySelector(".circle").style.display = "none";
  document.querySelector("#timer_value").style.display = "block";
  audio.pause();
};
