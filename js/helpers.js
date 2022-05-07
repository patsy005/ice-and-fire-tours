function elementDisplay(element, value) {
  element.style.display = value;
}
function toggleElementClass(element, value) {
  element.classList.toggle(value);
}

function addElementClass(element, value) {
  element.classList.add(value);
}

function removeElementClass(element, value) {
  element.classList.remove(value);
}

function elementBackground(element, value) {
  element.style.backgroundColor = value;
}

function windowSize() {
  width = document.documentElement.clientWidth;
  height = document.documentElement.clientHeight;
}

function addError(input, msg, type) {
  input.classList.add("error");
  input.style.marginBottom = "0.5" + "rem";
  input.nextElementSibling.classList.add("error-msg");
  input.nextElementSibling.textContent = `Please ${msg} ${type}`;
}

function removeError(input) {
  input.classList.remove("error");
  input.style.marginBottom = "1.2" + "rem";
  input.nextElementSibling.classList.remove("error-msg");
  input.nextElementSibling.textContent = "";
}

const formIsValid = true;
const formIsInvalid = false;

function currentYear() {
  const currentYear = document.querySelector(".current-year");
  currentYear.textContent = +year;
}
