import {createMenu} from './view/menu.js';
import {createTitle} from './view/title.js';
import {createList} from './view/filmList.js';
import {createCard} from './view/cards.js';
import {createButton} from './view/button.js';
import {createPopup} from './view/popup.js';
import {createFooterStatistic} from './view/footer.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const CARDS_COUNT = 5;
const TOP_CARDS = 2;

const footer = document.querySelector('.footer');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

render(siteMainElement, createMenu(), 'afterBegin');
render(header, createTitle(), 'beforeEnd');
render(siteMainElement, createList(), 'beforeEnd');
render(footer, createFooterStatistic(), 'beforeEnd');
render(body, createPopup(), 'beforeEnd');

const containerOne = document.querySelector('.films-list__container-one');
const containerTwo = document.querySelector('.films-list__container-two');
const containerThree = document.querySelector('.films-list__container-three');

for (let i = 0; i < CARDS_COUNT; i++) {
  render(containerOne, createCard(), 'afterBegin');
}

render(containerOne, createButton(), 'beforeEnd');

for (let i = 0; i < TOP_CARDS; i++) {
  render(containerTwo, createCard(), 'afterBegin');
}

for (let i = 0; i < TOP_CARDS; i++) {
  render(containerThree, createCard(), 'afterBegin');
}
