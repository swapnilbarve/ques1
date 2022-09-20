// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let numberlist = [
  25, 63, 95, 45, 96, 12, 32, 45, 12, 74, 52, 95, 63, 41, 25, 12, 96,
];

function dedup(numberlist) {
  return numberlist.filter((item, index) => numberlist.indexOf(item) === index);
}

console.log(dedup(numberlist));
