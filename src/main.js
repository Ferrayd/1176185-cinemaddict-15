import {createMenu} from './view/menu.js';
import {createTitle} from './view/title.js';
import {createList} from './view/filmList.js';
import {createCard} from './view/cards.js';
import {createButton} from './view/button.js';
import {createPopup} from './view/popup.js';
import {createFooterStatistic} from './view/footer.js';
import {getFilmMock} from './mock.js';
import {moviesData} from './mock.js';
import dayjs from 'dayjs';  

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
console.log(moviesData);
const FILM_COUNT = 15
const CARDS_COUNT = 5;
const TOP_CARDS = 2;

//const films = getRandomFilm(FILM_COUNT).fill().map(generateFilmCard);
const footer = document.querySelector('.footer');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

render(siteMainElement, createMenu(), 'afterBegin');
render(header, createTitle(), 'beforeEnd');
render(siteMainElement, createList(), 'beforeEnd');
render(footer, createFooterStatistic(), 'beforeEnd');
render(body, createPopup(moviesData[1]), 'beforeEnd');

const containerOne = document.querySelector('.films-list__container-one');
const containerTwo = document.querySelector('.films-list__container-two');
const containerThree = document.querySelector('.films-list__container-three');

for (let i = 0; i < moviesData.length; i++) {
  render(containerOne, createCard(moviesData[i]), 'afterBegin');
}

render(containerOne, createButton(), 'beforeEnd');

/*for (let i = 0; i < TOP_CARDS; i++) {
  render(containerTwo, createCard(), 'afterBegin');
}

for (let i = 0; i < moviesData.lenght; i++) {
  render(containerThree, createCard(moviesData[i]), 'afterBegin');
}
*/