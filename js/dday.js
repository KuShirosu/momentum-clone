const ddayList = document.getElementById("dday-list");
const ddayForm = document.getElementById("dday-form");
const ddayInputText = document.querySelector("#dday-form input:first-child");
const ddayInputDate = document.querySelector("#dday-form input:last-child");
// 사용자의 타임존 오프셋을 얻기
var userTimeZoneOffset = new Date().getTimezoneOffset();

const DDAYS_KEY = "ddays";
let ddays = [];

function saveDdays() {
  localStorage.setItem(DDAYS_KEY, JSON.stringify(ddays));
}

class DdayClock {
  constructor(newDdayObj) {
    this.name = newDdayObj.text;
    this.dday = newDdayObj.date;
    this.id = newDdayObj.id;
    this.paintDday();
    this.getClock();
    setInterval(this.getClock.bind(this), 1000);
  }

  deleteDday(event) {
    const li = event.target.parentElement;
    li.remove();
    ddays = ddays.filter((dday) => dday.id !== parseInt(li.id));
    saveDdays();
  }
  paintDday() {
    this.ddayItem = document.createElement("li");
    this.ddayItem.id = this.id;
    const spanName = document.createElement("span");
    const spanTime = document.createElement("span");
    const btn = document.createElement("button");
    btn.classList.add("invisible-button");
    btn.innerText = "❌";
    btn.addEventListener("click", this.deleteDday);
    this.ddayItem.appendChild(spanName);
    this.ddayItem.appendChild(spanTime);
    this.ddayItem.appendChild(btn);
    ddayList.appendChild(this.ddayItem);
  }

  getClock() {
    const today = new Date();
    const currentYear = today.getFullYear();

    if (this.dday < today) {
      this.dday.setFullYear(currentYear + 1);
    }

    const timeGap = this.dday - today;

    const secUnit = timeGap / 1000;
    const minUnit = secUnit / 60;
    const hourUnit = minUnit / 60;
    const remainSeconds = Math.floor(secUnit % 60);
    const remainMinutes = Math.floor(minUnit % 60);
    const remainHours = Math.floor(hourUnit % 24);
    const remainDays = Math.floor(hourUnit / 24);
    this.ddayItem.firstElementChild.innerText = `${this.name}: `;
    this.ddayItem.children[1].innerText = `${String(remainDays).padStart(
      3,
      "0"
    )}d ${String(remainHours).padStart(2, "0")}h ${String(
      remainMinutes
    ).padStart(2, "0")}m ${String(remainSeconds).padStart(2, "0")}s`;
    // this.ddayItem.textContent = `${this.name}: ${String(remainDays).padStart(
    //   3,
    //   "0"
    // )}d`;
  }
}

function makeDdayClock(newDdayObj) {
  const UTCDate = new Date(newDdayObj.date); // UTC 시간대로 Date 객체 생성
  const userLocalTime = new Date(
    UTCDate.getTime() - userTimeZoneOffset * 60000
  ); // 사용자의 로컬 시간으로 변환
  userLocalTime.setHours(0, 0, 0, 0); // 자정으로 설정
  const renewDdayObj = {
    text: newDdayObj.text,
    date: userLocalTime,
    id: newDdayObj.id,
  };
  new DdayClock(renewDdayObj);
}

function handleDdayFormSubmit(event) {
  event.preventDefault();
  const newDdayInputText = ddayInputText.value;
  ddayInputText.value = "";
  const newDdayObj = {
    date: ddayInputDate.value,
    text: newDdayInputText,
    id: Date.now(),
  };

  makeDdayClock(newDdayObj);
  ddays.push(newDdayObj);
  saveDdays();
}

ddayForm.addEventListener("submit", handleDdayFormSubmit);

const savedDdays = localStorage.getItem(DDAYS_KEY);

if (savedDdays) {
  const parsedDdays = JSON.parse(savedDdays);
  ddays = parsedDdays;
  parsedDdays.forEach(makeDdayClock);
}
