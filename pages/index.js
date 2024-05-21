import {
  burgerButton,
  closeBurgerButton,
  menuMobile,
  sharedForm,
  KEY,
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
} from '../utils/constans.js';

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};
const closePopup = (e) => {
  if (!e.target.classList.contains('mixplat__form')) {
    e.target.classList.remove('popup_opened');
  }
};

burgerButton.addEventListener('click', () => {
  menuMobile.classList.add('header__menu-mob_visible');
});
closeBurgerButton.addEventListener('click', () => {
  menuMobile.classList.remove('header__menu-mob_visible');
});

mainPopupOpen.addEventListener('click', () => {
  openPopup(mainPopup);
});

mainPopup.addEventListener('click', (e) => {
  closePopup(e);
});
darknessPopupOpen.addEventListener('click', () => {
  openPopup(darknessPopup);
});

darknessPopup.addEventListener('click', (e) => {
  closePopup(e);
});
violencePopupOpen.addEventListener('click', () => {
  openPopup(violencePopup);
});

violencePopup.addEventListener('click', (e) => {
  closePopup(e);
});

betrayalPopupOpen.addEventListener('click', () => {
  openPopup(betrayalPopup);
});

betrayalPopup.addEventListener('click', (e) => {
  closePopup(e);
});

lonelinessPopupOpen.addEventListener('click', () => {
  openPopup(lonelinessPopup);
});

lonelinessPopup.addEventListener('click', (e) => {
  closePopup(e);
});

const fearsSlider = new Swiper('.fears__swiper', {
  slidesPerView: 1,
  spaceBetween: 12,
  pagination: {
    el: '.fears__pagination',
    type: 'fraction',
    renderFraction: function (currentClass) {
      return '<span class="' + currentClass + '"></span>';
    },
  },

  navigation: {
    nextEl: '.fears__next',
    prevEl: '.fears__prev',
  },
  speed: 800,
  breakpoints: {
    650: {
      slidesPerView: 1.2,
      spaceBetween: 40,
    },
  },
});

const childrenSlider = new Swiper('.children__swiper', {
  slidesPerView: 1,
  spaceBetween: 40,
  speed: 800,
  pagination: {
    el: '.children__pagination',
  },

  navigation: {
    nextEl: '.children__next',
    prevEl: '.children__prev',
  },
  breakpoints: {
    1080: {
      slidesPerView: 2.15,
      spaceBetween: 40,
    },
  },
});
