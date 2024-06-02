const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const boxGreeting = document.querySelector("#box-greeting");
const greetingText1 = document.querySelector("#greeting-text1");
const greetingText2 = document.querySelector("#greeting-text2");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const Adjectives = [
  "산뜻한",
  "활기찬",
  "불붙은",
  "생기있는",
  "멋진",
  "멋쟁이",
  "하얗게 불태운",
  "섹시한",
  "쁘띠",
  "속이 꽉찬",
  "발랄한",
  "귀욤뽀작",
  "전설의",
];

function selectRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreeting();
}

function paintGreeting() {
  const username = localStorage.getItem(USERNAME_KEY);
  const selectedAdjective = selectRandomItem(Adjectives);
  greetingText1.innerText = `${selectedAdjective} ${username}님`;
  greetingText2.innerText = "안녕하세요.";
  boxGreeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting();
}
