const _debounce = require('lodash.debounce');
import fetchCountries from './js/fetchCountries.js';
import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
import getRefs from './js/refs.js';
import card from './templates/card.hbs'
import maktup from './templates/maktup.hbs'
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/PNotify.css';
import './sass/main.scss';


defaultModules.set(PNotifyMobile, {});

const refs = getRefs();
refs.input.addEventListener('input', _debounce(indentifyValue, 700));

function indentifyValue(ev) {
  const textOfInput = ev.target.value.trim();
  if (textOfInput.length < 1) {
    clearDom()
    return alert({ text: 'Nothing matches the search'});
  }
  return fetchCountries(textOfInput).then(data =>
    data.length <= 10 && data.length >= 2
      ? createMaktup(data)
      : data.length === 1
      ? createCard(data) 
      : alert({ text: 'Too many matches found. Please enter a more specific query' }),
  );
}

function createMaktup(mak) {
  refs.section.innerHTML = maktup(mak);
}

function createCard(mak) {
  refs.section.innerHTML = card(mak);
  // clearInput();
}

function clearInput() {
  refs.input.value = '';
}

function clearDom() {
  refs.section.innerHTML = '';
}