import { refs } from './refs';
import Notiflix from 'notiflix';

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', handleCloseBtnClick);
refs.modal.addEventListener('click', handleBackdropClick);
// refs.submitBtn.addEventListener('click', handleSubmitBtnClick);
refs.form.addEventListener('submit', handleSubmitBtnClick);

function toggleModal() {
  document.body.classList.toggle('no-scroll');
  refs.modal.classList.toggle('is-hidden');
  document.addEventListener('keydown', handleEscapeClick);
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
  Notiflix.Notify.success(
    'Ваші дані отримано. Найблищим часом наш консультант Вам зателефонує. Дякуємо!!!'
  );
}
