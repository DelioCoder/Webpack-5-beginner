import component from './component';
import image from './assets/images/doja.jpg';
import './styles/style.css';
import data from './assets/data/data.json';

let array = [1,2,3];

console.log(...array, 4,5,6)

const img = document.createElement('img');
img.src = image;
document.body.appendChild(img);

const nav = document.createElement("nav");

let menu = "";

data.links.forEach((el) => (menu += `<a href="${el[1]}">${el[0]}</a>`))

nav.innerHTML = menu;
nav.classList.add("menu")

document.body.appendChild(component());
document.body.appendChild(nav);