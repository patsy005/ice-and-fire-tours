
const navMobile = document.querySelector(".nav-mobile");
const burgerBtn = document.querySelector(".burger-btn");
const exitNavBtn = document.querySelector(".exit-btn");

const section = document.querySelector("section");

const today = new Date();
const year = today.getFullYear();



// const bookNowBtns = document.querySelectorAll(".offer-btn");
// const bookNowBtsArr = Array.from(bookNowBtns);

// const offerSection = document.querySelector(".offer");
// const bookNowSection = document.querySelector(".book-now");
// const offerDepartureSelect = document.querySelector('#departure');
// const offerSelect = document.querySelector("#offer-type");
// const opttions = offerSelect.querySelectorAll(".book-now option");
// const optionsArr = Array.from(opttions);


// const offerForm = document.querySelector(".book-now__form");
// const fromDate = document.querySelector("#from-date");

//book-now section inputs
let userName;
let userSurname;
let userPhone;
let userEmail;


let inputs;


// const cancelBtn = document.querySelector('.cancel-btn');
// const formSentSection = document.querySelector('.form-sent');
// const formSentBtn = document.querySelector('.form-sent-ok');

let width;
let height;

burgerBtn.addEventListener("click", openMobileNav);
exitNavBtn.addEventListener("click", closeMobileNav);
window.addEventListener("scroll", navShadow);
window.addEventListener("resize", showDesktopNav);

currentYear();

// for (const bookNowBtn of bookNowBtsArr) {
//   bookNowBtn.addEventListener("click", openBookNowForm);
// }

// fromDate.addEventListener("input", tripDuration);
// offerSelect.addEventListener('change', tripDuration);

// offerForm.addEventListener('submit', submitOfferForm);

// cancelBtn.addEventListener('click', closeForm);
// formSentBtn.addEventListener('click', formSuccessfullySent);

