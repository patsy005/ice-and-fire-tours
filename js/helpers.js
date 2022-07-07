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

const userDataValidation = (name, phone, email, surname) => {
  userName = document.getElementById(name);
  userPhone = document.getElementById(phone);
  console.log(userName.value)

  if (surname) {
    userSurname = document.getElementById(surname);
    if (userSurname.value === "" || userSurname.value.length < 2) {
      addError(userSurname, "enter a", "surname");
    } else {
      removeError(userSurname);
    }
  } 

  if (userName.value === "" || userName.value.length < 2) {
    addError(userName, "enter a", "name");
  } else {
    removeError(userName);
  }

  if (userPhone.value === "" || userPhone.value.length < 4) {
    addError(userPhone, "enter a valid", "phone number");
  } else {
    removeError(userPhone);
  }

  emailIsValid(email);
};

const emailIsValid = (email) => {
  userEmail = document.getElementById(email);
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const mailIsValid = userEmail.value.match(re);

  if (userEmail.value === "" || !mailIsValid) {
    addError(userEmail, "enter a valid", "email");
  } else {
    removeError(userEmail);
  }
};

//  export function currentYear() {
//   const currentYear = document.querySelector(".current-year");
//   currentYear.textContent = +year;
// }
