const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingBox = document.querySelector("#greetingBox");
const loginBox = document.querySelector(".login-box");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  // loginForm.classList.add(HIDDEN_CLASSNAME);
  loginBox.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hi ${username}!\u00a0\u00a0   ٩(◕ᗜ◕)و`;
  greetingBox.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginBox.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
