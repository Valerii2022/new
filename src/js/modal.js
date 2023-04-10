import { refs } from './refs';
import Notiflix from 'notiflix';
import throttle from 'lodash.throttle';

let userInfo = {};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', handleCloseBtnClick);
refs.modal.addEventListener('click', handleBackdropClick);
refs.form.addEventListener('submit', handleSubmitBtnClick);
refs.form.addEventListener('input', throttle(addInfoToLocalStorage, 500));
refs.checkboxIcon.addEventListener('click', handleCheckboxClick);
refs.checkbox.addEventListener('click', handleCheckboxClick);

function toggleModal() {
  document.body.classList.toggle('no-scroll');
  refs.modal.classList.toggle('is-hidden');
  document.addEventListener('keydown', handleEscapeClick);
  addValuesFromLocaleStorage();
}

function handleBackdropClick(event) {
  if (event.currentTarget === event.target) {
    toggleModal();
    document.removeEventListener('keydown', handleEscapeClick);
  }
}

function handleEscapeClick(event) {
  if (event.code === 'Escape') {
    toggleModal();
    document.removeEventListener('keydown', handleEscapeClick);
  }
}

function handleCloseBtnClick() {
  toggleModal();
  document.removeEventListener('keydown', handleEscapeClick);
}

function handleSubmitBtnClick(event) {
  event.preventDefault();

  refs.form.reset();
  document.body.classList.toggle('no-scroll');
  refs.modal.classList.toggle('is-hidden');
  document.removeEventListener('keydown', handleEscapeClick);
  refs.checkbox.checked = false;
  refs.submitBtn.disabled = true;
  localStorage.removeItem('user');
  Notiflix.Notify.success(
    'Ваші дані отримано. Найблищим часом наш консультант Вам зателефонує. Дякуємо!!!'
  );

  console.log(userInfo);
}

function handleCheckboxClick() {
  if (refs.checkbox.checked) {
    refs.submitBtn.disabled = false;
  } else {
    refs.submitBtn.disabled = true;
  }
}

function addInfoToLocalStorage() {
  userInfo = {
    name: refs.form[0].value,
    phone: refs.form[1].value,
    email: refs.form[2].value,
    feedback: refs.form[3].value,
  };

  localStorage.setItem('user', JSON.stringify(userInfo));
}

function addValuesFromLocaleStorage() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user !== null) {
    refs.form[0].value = user.name;
    refs.form[1].value = user.phone;
    refs.form[2].value = user.email;
    refs.form[3].value = user.feedback;
  }
}
