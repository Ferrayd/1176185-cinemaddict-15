import {shortDescription, reformatDate} from '../format/format.js';

export const createCard = (film) => {
  const MAX_DESCRIPTION_LENGTH = 140;
  const {comments, filmInfo, userDetails} = film;
  ` <article class="film-card">
    <h3 class="film-card__title">${filmInfo.title}</h3>
      <p class="film-card__rating">${filmInfofilm.rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${reformatDate(filmInfo.release.date, 'YYYY').slice(-4)}</span>
          <span class="film-card__duration">${filmInfo.duration}</span>
          <span class="film-card__genre">${filmInfo.genre}</span>
        </p>
        <img src=${filmInfo.poster} alt="" class="film-card__poster">
        <p class="film-card__description">${shortDescription(filmInfo.description, MAX_DESCRIPTION_LENGTH)}</p>
        <a class="film-card__comments">5 comments</a>
        <div class="film-card__controls">
          <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
          <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
          <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
        </div>
  </article>`
  };
