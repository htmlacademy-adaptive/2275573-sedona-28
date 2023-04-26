let pageBody = document.querySelector('.page__body');
let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');

pageBody.classList.remove('navigation--nojs');
navMain .classList.remove('navigation--opened');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--opened')) {
    navMain.classList.remove('navigation--opened');
  } else {
    navMain.classList.add('navigation--opened');
  }
});
