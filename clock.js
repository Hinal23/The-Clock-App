function openTab(evt, tabname) {
  let i;
  let x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabname).style.display = "block";
  let tabs = document.getElementsByClassName("app-bar-item");
  for (let i of tabs) {
    if (i.classList.contains("active")) {
      i.classList.remove("active");
    }
    // console.log("evt", evt.target);

    evt.target.classList.add("active");
    // i.classList.contains();
  }
}
//clock
function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let midday = "AM";
  midday = hour >= 12 ? "PM" : "AM";
  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

  document.getElementById("clock").innerText =
    hour + " : " + min + " : " + sec + " " + midday;

  let t = setTimeout(currentTime, 1000);
}
function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}
const getcurtNy = () => {
  const newyork = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  console.log(newyork);
  document.querySelector(".currentTime").innerHTML = newyork;
};
const getcurtDubai = () => {
  const Dubai = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Dubai",
  });
  console.log(Dubai);
  document.querySelector(".currentTime").innerHTML = Dubai;
};

const getcurtGer = () => {
  const germany = new Date().toLocaleString("en-GB", {
    timeZone: "Europe/Berlin",
  });
  console.log(germany);
  document.querySelector(".currentTime").innerHTML = germany;
};
const getcurtSyd = () => {
  const sydney = new Date().toLocaleString("en-US", {
    timeZone: "Australia/Sydney",
  });
  console.log(sydney);
  document.querySelector(".currentTime").innerHTML = sydney;
};
currentTime();
