import getRefs from './refs.js';

const refs = getRefs();

export default function fetchCountries(searchQuery) {
  const baseUrl = 'https://restcountries.eu/rest/v2/name/';
  return fetch(baseUrl + searchQuery)
    .then(response => response.json()).then(el => { console.log(el); return el })
    .catch(console.log('error'))
};

