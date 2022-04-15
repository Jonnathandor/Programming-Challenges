// ## Instructions

// Given an age in seconds, calculate how old someone would be on:

// - Mercury: orbital period 0.2408467 Earth years
// - Venus: orbital period 0.61519726 Earth years
// - Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
// - Mars: orbital period 1.8808158 Earth years
// - Jupiter: orbital period 11.862615 Earth years
// - Saturn: orbital period 29.447498 Earth years
// - Uranus: orbital period 84.016846 Earth years
// - Neptune: orbital period 164.79132 Earth years

// So if you were told someone were 1,000,000,000 seconds old, you should
// be able to say that they're 31.69 Earth-years old.

// If you're wondering why Pluto didn't make the cut, go watch [this
// youtube video](http://www.youtube.com/watch?v=Z_2gbGXzFbs).

// ## Source

// ### Created by

// - @rchavarria

export const age = (planet, seconds) => {
    return Number((seconds / secondsInYearPlanet(planet)).toFixed(2));
  };
  
  const secondsInYearPlanet = (planet) => {
    switch(planet){
      case 'mercury':
        return 31557600 * 0.2408467;
      case 'venus':
        return 31557600 * 0.61519726;
      case 'earth':
        return 31557600;
      case 'mars': 
        return 31557600 * 1.8808158;
      case 'jupiter':
        return 31557600 * 11.862615;
      case 'saturn':
        return 31557600 * 29.447498;
      case 'uranus':
        return 31557600 * 84.016846;
      case 'neptune':
        return 31557600 * 164.79132;
    }
  }