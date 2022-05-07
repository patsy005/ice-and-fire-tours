
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
    console.log(navLinks);
    const navLinksArr = Array.from(navLinks);
    console.log(navLinksArr);
  
    const sectionClass = section.className;
    console.log(sectionClass);
  
    for (const link of navLinksArr) {
      const linkContent = link.innerHTML;
      console.log(linkContent);
      const navItem = link.parentElement;
      console.log(navItem);
  
      const linkContentToLowerCase =
        linkContent.charAt(0).toLocaleLowerCase() + linkContent.slice(1);
  
      if (
        sectionClass == linkContentToLowerCase ||
        (sectionClass === "about" && linkContentToLowerCase === "home")
      ) {
        navItem.classList.add("active");
        console.log(navItem);
      } else {
        navItem.parentElement.classList.remove("active");
      }
    }
  }
  
  activeNavLink();


