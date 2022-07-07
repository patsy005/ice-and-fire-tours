const navMobile = document.querySelector(".nav-mobile");
const burgerBtn = document.querySelector(".burger-btn");
const exitNavBtn = document.querySelector(".exit-btn");

const section = document.querySelector("section");

const today = new Date();
const year = today.getFullYear();

//book-now section inputs
let userName;
let userSurname;
let userPhone;
let userEmail;
let userMsg;

let inputs;

 let width;
let height;

burgerBtn.addEventListener("click", openMobileNav);
exitNavBtn.addEventListener("click", closeMobileNav);
window.addEventListener("scroll", navShadow);
window.addEventListener("resize", showDesktopNav);

// currentYear();
