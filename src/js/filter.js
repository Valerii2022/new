import { refs } from './refs';
import { CountriesAPI } from './API';

const countries = new CountriesAPI();

window.addEventListener('load', handleFilterAllBtn);
refs.filterAll.addEventListener('click', handleFilterItemBtn);

function handleFilterAllBtn() {
  if (refs.filter[0].checked === true) {
    console.log('default');
  }
}

function handleFilterItemBtn(evt) {
  if (evt.target.checked) {
    console.log('all');
  }
}
