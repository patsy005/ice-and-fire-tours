const icons = document.querySelectorAll(".faq img");
const iconsArr = Array.from(icons);

function showFAQInfo(e) {
  const icon = e.target;
  const faqBoxTop = icon.parentElement;

  const faqBoxBottom = faqBoxTop.nextElementSibling;

  faqBoxBottom.classList.toggle("block");

  const iconSrc = icon.src;

  if (iconSrc.includes("plus.svg")) {
    icon.setAttribute("src", "/img/icons/minus.svg");
  } else {
    icon.setAttribute("src", "/img/icons/plus.svg");
  }
}

for (const icon of iconsArr) {
  icon.addEventListener("click", showFAQInfo);
}
