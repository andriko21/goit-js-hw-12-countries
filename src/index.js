const _debounce = require('lodash.debounce');
import fetchCountries from './js/fetchCountries.js';
import card from './templates/card.hbs'
import maktup from './templates/maktup.hbs'
import './sass/main.scss';
import getRefs from './js/refs.js';
const refs = getRefs();
refs.input.addEventListener('input', _debounce(indentifyValue, 700));

function indentifyValue(ev) {
  const textOfInput = ev.target.value.trim();
  if (textOfInput.length < 1) {
    return console.log('Введи щось нормальне');
  }
  return fetchCountries(textOfInput).then(data =>
    data.length <= 10 && data.length >= 2
      ? createMaktup(data)
      : data.length === 2
      ? createCard(data)
      : console.log('error'),
  );
}

function createMaktup(mak) {
  refs.section.innerHTML = maktup(mak);
}

function createCard(mak) {
  refs.section.innerHTML = card(mak);
  clearInput();
}

function clearInput() {
  refs.input.value = '';
}
