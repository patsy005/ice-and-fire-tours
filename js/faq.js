const icons = document.querySelectorAll(".faq img");
const iconsArr = Array.from(icons);

function showFAQInfo(e) {
  const icon = e.target;
  console.log(icon);
  const faqBoxTop = icon.parentElement;
  console.log(faqBoxTop);
  const faqBoxBottom = faqBoxTop.nextElementSibling;
  console.log(faqBoxBottom);

    faqBoxBottom.classList.toggle("block");
  //   faqBoxBottom.classList.toggle('none');

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
