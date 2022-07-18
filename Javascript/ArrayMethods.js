const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(fifteen);

// Array.prototype.map()
// Give us an array of the inventory first and last name
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(fullNames);

// Array.prototype.sort()
// Sort the inventors by birthdate, oldest to youngest
const oldestToYoungest = inventors.sort((a, b) => b.year - a.year);
console.table(oldestToYoungest);

// Array.prototype.reduce()
// How many years did all the inventors live
const totalYears = inventors.reduce((totalYears, inventor) => totalYears + (inventor.passed - inventor.year), 0);
console.log(totalYears);

// Sort inventors by years lived
const oldest = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
console.table(oldest);

// Sort people alphabetically by last name 
const sortedLastNames = people.sort((a, b) => {
    const [aLast, aFirst] = a.split(', ');
    const [bLast, bFirst] = b.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.table(sortedLastNames);

const morePeople = [
    { name: 'Jon', year: 1992 },
    { name: 'Charles', year: 1985 },
    { name: 'Andrew', year: 1995 },
    { name: 'Lex', year: 1990 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// is at least one person 19?
// true
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

// is everyone 19?
// false
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);

// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);

// gets the index
const index = comments.findIndex(comment => comment.id === 823423);

