const bookNowBtns = document.querySelectorAll(".offer-btn");
const bookNowBtsArr = Array.from(bookNowBtns);

const currentSection = document.querySelector(".offer");

//offer cards hovering
const offerCardsFront = document.querySelectorAll(".offer__card--front");
const offerCardsBack = document.querySelectorAll(".offer__card--back");
const offerCardsBackArr = Array.from(offerCardsBack);
const offerIcons = document.querySelectorAll(".offer__icon");
const offerIconsArr = Array.from(offerIcons);

const offerCards = document.querySelectorAll(".offer__card");
const offerCardsArr = Array.from(offerCards);

function showBackCard() {
  const clickedIcon = this;

  const cardFront = clickedIcon.parentElement;
  const card = cardFront.parentElement;
  const cardStyles = window.getComputedStyle(card);
  const cardFrontHeight = cardStyles.getPropertyValue("height");

  const cardBack = cardFront.nextElementSibling;
  card.style.height = `${cardFrontHeight}`;

  removeElementClass(cardFront, "slide-in");
  addElementClass(cardFront, "slide-out");
  elementDisplay(cardFront, "none");

  removeElementClass(cardBack, "slide-out");
  addElementClass(cardBack, "slide-in");
  elementDisplay(cardBack, "flex");

  elementDisplay(clickedIcon, "none");

  toggleElementClass(card, "offer__card-back-img");
  addElementClass(card, "fade-in");
  removeElementClass(card, "fade-out");

  cardBack.addEventListener("mouseleave", hideBackCard);
}
function hideBackCard() {
  const cardBack = this;

  const card = cardBack.parentElement;
  const cardStyles = window.getComputedStyle(card);
  const cardBackHeight = cardStyles.getPropertyValue("height");

  const cardFront = cardBack.previousElementSibling;

  const clickedIcon = cardFront.children[0];

  removeElementClass(cardFront, "fade-out");
  removeElementClass(cardFront, "slide-out");
  addElementClass(cardFront, "fade-in");
  elementDisplay(cardFront, "block");

  removeElementClass(cardBack, "fade-in");
  addElementClass(cardBack, "fade-out");
  elementDisplay(cardBack, "none");

  //   removeElementClass(clickedIcon, "fade-out");
  //   removeElementClass(clickedIcon, 'slide-out');
  //   addElementClass(clickedIcon, "fade-in");
  elementDisplay(clickedIcon, "block");

  card.classList.toggle("offer__card-back-img");
  removeElementClass(card, "fade-in");
  addElementClass(card, "fade-in");

  cardBack.removeEventListener("mouseleave", hideBackCard);
}

for (const icon of offerIconsArr) {
  icon.addEventListener("mouseover", showBackCard);
}

// listeners
for (const bookNowBtn of bookNowBtsArr) {
  bookNowBtn.addEventListener("click", openBookNowForm);
}

cancelBtn.addEventListener("click", closeForm);
formSentBtn.addEventListener("click", formSuccessfullySent);
