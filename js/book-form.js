const offerDepartureSelect = document.querySelector("#departure");
const offerSelect = document.querySelector("#offer-type");
const options = offerSelect.querySelectorAll(".book-now option");
const optionsArr = Array.from(options);

const fromDate = document.querySelector("#from-date");

const offerForm = document.querySelector(".book-now__form");

const cancelBtn = document.querySelector(".cancel-btn");
const formSentSection = document.querySelector(".form-sent");
const formSentBtn = document.querySelector(".form-sent-ok");

const bookNowSection = document.querySelector(".book-now");
let mainSection;

const footer = document.querySelector('.footer');

function openBookNowForm(e) {
  const openBookNowFormBtn = e.target;
  console.log(openBookNowFormBtn);

  const offerCard = e.target.parentElement;

  const offerTitle = offerCard.querySelector("h3");
  mainSection = currentSection;

  elementDisplay(mainSection, "none");
  elementDisplay(footer, 'none');
  elementDisplay(bookNowSection, "flex");
  removeElementClass(bookNowSection, "fade-in");
  addElementClass(bookNowSection, "fade-in");

  for (const option of optionsArr) {
    if (offerTitle.className === option.value) {
      option.selected = option.value;
    }
  }
}

function addDays(date, days) {
  const choosenStartingDate = new Date(date);
  let addDays = choosenStartingDate;

  addDays.setDate(addDays.getDate() + parseInt(days));

  const endingDate = (document.querySelector("#to-date").valueAsDate = addDays);
}

function tripDuration() {
  const form = document.querySelector(".book-now__form");
  const formData = new FormData(form);
  const startingDate = formData.get("from-date");

  for (const option of optionsArr) {
    if (option.selected === true && option.textContent === "Relaxation") {
      addDays(startingDate, 7);
    }

    if (option.selected === true && option.textContent === "Relax & Explore") {
      addDays(startingDate, 10);
    }

    if (option.selected === true && option.textContent === "Deep Exploration") {
      addDays(startingDate, 14);
    }

    if (
      option.selected === true &&
      option.textContent === "Charming Cottages"
    ) {
      addDays(startingDate, 10);
    }
    if (option.selected === true && option.textContent === "Fiords") {
      addDays(startingDate, 10);
    }
    if (option.selected === true && option.textContent === "Road Trip") {
      addDays(startingDate, 14);
    }
  }

  return formData;
}

function userDataValidation() {
  userName = document.querySelector("#name");
  userSurname = document.querySelector("#surname");
  userPhone = document.querySelector("#phone");
  console.log(userName);

  if (userName.value === "" || userName.value.length < 2) {
    addError(userName, "enter a", "name");
  } else {
    removeError(userName);
  }

  if (userSurname.value === "" || userSurname.value.length < 2) {
    addError(userSurname, "enter a", "surname");
  } else {
    removeError(userSurname);
  }

  if (userPhone.value === "" || userPhone.value.length < 4) {
    addError(userPhone, "enter a valid", "phone number");
  } else {
    removeError(userPhone);
  }

  emailIsValid();
  selectsIsValid();
  dateIsValid();
}

function emailIsValid() {
  userEmail = document.querySelector("#email");

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const mailIsValid = userEmail.value.match(re);

  if (userEmail.value === "" || !mailIsValid) {
    addError(userEmail, "enter a valid", "email");
  } else {
    removeError(userEmail);
  }
}

function selectsIsValid() {
  console.log(optionsArr);

  if (offerSelect.value === "not-selected") {
    addError(offerSelect, "choose a", "offer type");
  } else {
    removeError(offerSelect);
  }

  if (offerDepartureSelect.value === "not-selected") {
    addError(offerDepartureSelect, "choose a", "city of departure");
  } else {
    removeError(offerDepartureSelect);
  }
}

function dateIsValid() {
  const fromDate = document.querySelector("#from-date");

  if (fromDate.value === "") {
    addError(fromDate, "choose a", "starting date");
  } else {
    removeError(fromDate);
  }
}

function formValidation() {
  userDataValidation();
}

function clearForm() {
  inputs = [userName, userSurname, userPhone, userEmail, fromDate];
  console.log(inputs);

  for (const input of inputs) {
    input.value = "";
  }

  offerSelect.value = "not-selected";
  offerDepartureSelect.value = "not-selected";
}

function clearErrors() {
  userName = document.querySelector("#name");
  userSurname = document.querySelector("#surname");
  userPhone = document.querySelector("#phone");
  userEmail = document.querySelector("#email");

  inputs = [
    userName,
    userSurname,
    userPhone,
    userEmail,
    fromDate,
    offerSelect,
    offerDepartureSelect,
  ];

  console.log(inputs);

  for (const input of inputs) {
    if (
      input.classList.contains("error") ||
      input.nextElementSibling.classList.contains("error-msg")
    ) {
      removeError(input);
    }
  }
}

function submitOfferForm(e) {
  e.preventDefault();

  console.log(!formValidation());
  console.log(formIsValid);
  console.log(!formIsValid);

  formValidation();

  if (
    !userName.value ||
    !userSurname.value ||
    !userEmail.value ||
    !userPhone.value ||
    !fromDate.value ||
    !offerDepartureSelect.value ||
    !offerSelect.value
  ) {
    console.log("invalid");
    return;
  } else {
    console.log("valid");
    elementDisplay(bookNowSection, "none");
    elementDisplay(formSentSection, "block");
    // removeElementClass(formSentSection, "fade-in");
    // addElementClass(formSentSection, "fade-in");
    clearForm();
  }
}

function closeForm() {

    clearErrors();

    mainSection = currentSection
  
    elementDisplay(mainSection, "flex");
    elementDisplay(footer, 'block');
    removeElementClass(bookNowSection, "fade-in");
    addElementClass(mainSection, "fade-in");
    addElementClass(footer, 'fade-in')
    elementDisplay(bookNowSection, "none");
  
  }

function formSuccessfullySent() {
  mainSection = currentSection;
  elementDisplay(mainSection, "flex");
  elementDisplay(footer, 'block');
  elementDisplay(formSentSection, "none");
  addElementClass(mainSection, "fade-in");
  addElementClass(footer, 'fade-in');
}

function closeBookNowSection() {
  mainSection = currentSection;
  elementDisplay(bookNowSection, "none");
  elementDisplay(mainSection, "flex");
}

fromDate.addEventListener('input', tripDuration);
offerSelect.addEventListener('change', tripDuration);

offerForm.addEventListener('submit', submitOfferForm);
