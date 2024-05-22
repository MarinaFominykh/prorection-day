const burgerButton = document.querySelector(".header__burger");
const closeBurgerButton = document.querySelector(".header__menu-close");
const menuMobile = document.querySelector(".header__menu-mob");
const menuLinks = document.querySelectorAll(".header__nav-link-mob");

const mainPopup = document.querySelector(".popup");
const mainPopupOpen = document.querySelector(".intro__submit");

const darknessPopup = document.querySelector(".darkness__popup");
const darknessPopupOpen = document.querySelector(".darkness__button");

const violencePopup = document.querySelector(".violence__popup");
const violencePopupOpen = document.querySelector(".violence__button");

const betrayalPopup = document.querySelector(".betrayal__popup");
const betrayalPopupOpen = document.querySelector(".betrayal__button");

const lonelinessPopup = document.querySelector(".loneliness__popup");
const lonelinessPopupOpen = document.querySelector(".loneliness__button");

const childrenButtons = document.querySelectorAll(".children__button");

export {
  burgerButton,
  closeBurgerButton,
  menuMobile,
  mainPopup,
  mainPopupOpen,
  darknessPopup,
  darknessPopupOpen,
  violencePopup,
  violencePopupOpen,
  betrayalPopup,
  betrayalPopupOpen,
  lonelinessPopup,
  lonelinessPopupOpen,
  childrenButtons,
  menuLinks,
};
