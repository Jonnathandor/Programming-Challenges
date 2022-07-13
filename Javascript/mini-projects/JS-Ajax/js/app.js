const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint) // fetch returns a promise
  .then(blob => blob.json()) // we parse the dato into json ... but this is still a promise
  .then(data => {
    console.log(data) // big fat array with nested objects
    cities.push(...data) // spread all the information... let's just move the objects around
  }); 

console.log(cities);

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi'); // g means global so it will look in all the string 
    // i means insentitive... case insensitive
    return place.city.match(regex) || place.state.match(regex) // The match() method retrieves the result of matching a string against a regular expression.
  });
}

function numberWithCommas(x) {
  // adds nice commas every 3 digits
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  // this function is called by the searchInput Element... 
  // to the keyword "this" is making reference to the input element
  // and the value is whatever value the user enters.
  const matchArray = findMatches(this.value, cities);

  const html = matchArray.map(place => {
    // for each place that matches the user's value
    const regex = new RegExp(this.value, 'gi');

    // We want to highlight the keywords given by the user so we know we have a match
    // between the keywrod and the name of the city so we can replace the part of the name
    // of the city that is equal to the keyword given and add a span with a class 
    // that will highlight everything.
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search'); // selects the search input element
const suggestions = document.querySelector('.suggestions'); // sugestions ul

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);