function openMobileNav() {
  elementDisplay(navMobile, "flex");
  elementDisplay(burgerBtn, "none");

  removeElementClass(exitNavBtn, "exit-out-animation");
  removeElementClass(navMobile, "close-mobile-nav");

  addElementClass(exitNavBtn, "exit-in-animation");
  addElementClass(navMobile, "open-mobile-nav");

  elementBackground(navMobile, "black");
}

function closeMobileNav() {
  windowSize();

  if (width < 992) {
    removeElementClass(exitNavBtn, "exit-in-animation");
    removeElementClass(navMobile, "open-mobile-nav");

    addElementClass(exitNavBtn, "exit-out-animation");

    setTimeout(() => {
      addElementClass(navMobile, "close-mobile-nav");
    }, 500);

    setTimeout(() => {
      elementDisplay(navMobile, "none");
      elementDisplay(burgerBtn, "block");
      removeElementClass(navMobile, "close-mobile-nav");
      elementBackground(navMobile, "transparent");
    }, 1200);
  }
}

function showDesktopNav() {
  windowSize();

  if (width >= 992) {
    elementDisplay(burgerBtn, "none");
    elementDisplay(navMobile, "flex");
    removeElementClass(navMobile, "close-mobile-nav");
    removeElementClass(navMobile, "open-mobile-nav");
  } else {
    elementDisplay(burgerBtn, "block");
    elementDisplay(navMobile, "none");
  }
}

function navShadow() {
  if (window.scrollY >= 60) {
    elementBackground(navMobile, "black");
  } else if (width < 992) {
    elementBackground(navMobile, "black");
  } else {
    elementBackground(navMobile, "transparent");
  }
}

function activeNavLink() {
  const section = document.querySelector("section");
  const navLinks = document.querySelectorAll(".nav__item a");
  const navLinksArr = Array.from(navLinks);

  const sectionClass = section.className;

  for (const link of navLinksArr) {
    const linkContent = link.innerHTML;
    const navItem = link.parentElement;

    const linkContentToLowerCase =
      linkContent.charAt(0).toLocaleLowerCase() + linkContent.slice(1);

    if (
      sectionClass == linkContentToLowerCase ||
      (sectionClass === "about" && linkContentToLowerCase === "home")
    ) {
      navItem.classList.add("active");
    } else {
      navItem.parentElement.classList.remove("active");
    }
  }
}

activeNavLink();
