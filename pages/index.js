import {
  burgerButton,
  closeBurgerButton,
  menuMobile,
  sharedForm,
  KEY,
  popup,
  popupOpen,
} from '../utils/constans.js';

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const formData = new FormData(e.target);
//   const formJson = Object.fromEntries(formData.entries());
//   const { name, email, company, sum, other } = formJson;
//   const otherSum = addTwoZeros(sum || other);
//   const id = e.target.id;
//   let options = {
//     widget_key: KEY,
//     amount: otherSum,
//     merchant_fields: {
//       name,
//       email,
//       company,
//     },

//     user_fundraising_program_id: id,
//     payment_scheme: "single",
//     user_email: email,
//   };
//   console.log("options", options);

//   let M = new Mixplat(options);
//   M.build();
//   M.setSuccessCallback(function (o, i) {
//     console.log("success");
//   });
// };

burgerButton.addEventListener('click', () => {
  menuMobile.classList.add('header__menu-mob_visible');
});
closeBurgerButton.addEventListener('click', () => {
  menuMobile.classList.remove('header__menu-mob_visible');
});

popupOpen.addEventListener('click', (e) => {
  popup.classList.add('popup_opened');
});

popup.addEventListener('click', (e) => {
  if (!e.target.classList.contains('mixplat__form')) {
    popup.classList.remove('popup_opened');
  }
});

// sharedForm.addEventListener("submit", handleSubmit);
// Приведение суммы к минорным единицам:
function addTwoZeros(string) {
  let number = parseInt(string);
  number = number * 100;
  return number;
}
