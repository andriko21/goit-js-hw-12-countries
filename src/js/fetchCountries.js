import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/PNotify.css';
import getRefs from './refs.js';

const refs = getRefs();

export default function fetchCountries(searchQuery) {
  const baseUrl = 'https://restcountries.eu/rest/v2/name/';
  return fetch(baseUrl + searchQuery)
    .then(response => response.json())
    .catch(alert({ text: 'Nothing matches the search fetchCountries' }));
}
