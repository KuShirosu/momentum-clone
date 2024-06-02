const ddayList = document.getElementById("dday-list");
const ddayForm = document.getElementById("dday-form");
const ddayInputText = document.querySelector("#dday-form input:first-child");
const ddayInputDate = document.querySelector("#dday-form input:last-child");
// 사용자의 타임존 오프셋을 얻기
var userTimeZoneOffset = new Date().getTimezoneOffset();

class DdayClock {
  constructor(name, dday) {
    this.name = name;
    this.dday = dday;
    this.ddayItem = document.createElement("li");
    ddayList.appendChild(this.ddayItem);
    this.getClock();
    setInterval(this.getClock.bind(this), 1000);
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
    // this.ddayItem.textContent = `${this.name}: ${String(remainDays).padStart(
    //   3,
    //   "0"
    // )}d ${String(remainHours).padStart(2, "0")}h ${String(
    //   remainMinutes
    // ).padStart(2, "0")}m ${String(remainSeconds).padStart(2, "0")}s`;
    this.ddayItem.textContent = `${this.name}: ${String(remainDays).padStart(
      3,
      "0"
    )}d`;
  }
}

new DdayClock("추수감사절", new Date(2024, 10, 28));
new DdayClock("크리스마스", new Date(2024, 11, 25));

function handleDdayFormSubmit(event) {
  event.preventDefault();
  const UTCDate = new Date(ddayInputDate.value); // UTC 시간대로 Date 객체 생성
  const userLocalTime = new Date(
    UTCDate.getTime() - userTimeZoneOffset * 60000
  ); // 사용자의 로컬 시간으로 변환
  userLocalTime.setHours(0, 0, 0, 0); // 자정으로 설정
  new DdayClock(ddayInputText.value, userLocalTime);
}

ddayForm.addEventListener("submit", handleDdayFormSubmit);
