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
