import dayjs from 'dayjs';

const TITLES = [
  'The Dance of Life',
  'Santa Claus Conquers the Martians',
  'Sagebrush Trail',
  'The Man with the Golden Arm',
  'Santa Claus Conquers the Martians',
  'Popeye the Sailor Meets Sindbad the Sailor',
  'Made for Each Other',
];

const POSTERS = [
  'images/posters/made-for-each-other.png',
  'images/posters/popeye-meets-sinbad.png',
  'images/posters/sagebrush-trail.jpg',
  'images/posters/santa-claus-conquers-the-martians.jpg',
  'images/posters/the-dance-of-life.jpg',
  'images/posters/the-great-flamarion.jpg',
  'images/posters/the-man-with-the-golden-arm.jpg',
];

const DIRECTORS = [
  'Steven Spielberg',
  'Martin Scorsese',
  'Alfred Hitchcock',
  'Stanley Kubrick',
  'Quentin Tarantino',
];
const WRITERS = [
  'Asghar Farhadi',
  'Eric Roth',
  'Aaron Sorkin',
  'Woody Allen',
  'Chang-dong Lee',
];

const ACTORS = [
  'Robert De Niro',
  'Jack Nicholson',
  'Marlon Brando',
  'Denzel Washington',
  'Katharine Hepburn',
];

const COUNTRIES = [
  'Finland',
  'Russia',
  'Italy',
  'France',
  'US',
];

const GENRES = [
  'Musicals',
  'Horror',
  'Crime',
  'Drama',
  'Fantasy',
];

const AUTHORS = [
  'Arto Siitonen',
  'Ida Niemi',
  'Raimo Laaksonen',
  'Anne Lahtinen',
  'Hannu Katajakoski',
];

const DESCRIPTION = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];

const COMMENTAUTHORS = [
  'User1',
  'User2',
  'User3',
  'User4',
];

const COMMENTS = [
  'Lorem ipsum',
  'dolor sit amet',
  'consectetur',
  'adipiscing elit',
];

const EMOTIONS = [
  'smile',
  'sleeping',
  'puke',
  'angry',
];

const EmotionsImages = {
  'angry': './images/emoji/angry.png',
  'sleeping': './images/emoji/sleeping.png',
  'puke': './images/emoji/puke.png',
  'smile': './images/emoji/smile.png',
};

const MIN_COMMENTS_NUMBER = 0;
const MAX_COMMENTS_NUMBER = 5;
const MIN_FILM_ID = 1;
const MAX_FILM_ID = 10000;
const MIN_RATING = 0;
const MAX_RATING = 10;
const RATING_DECIMALS = 1;
const MIN_AGE_RATING = 0;
const MAX_AGE_RATING = 100;
const MIN_RUN_TIME = 60;
const MAX_RUN_TIME = 240;

const NUMBER_OF_MOVIES = 15;

const getRandomInteger = (min, max) => {
  let startValue = Math.ceil(Math.min(min, max));
  let endValue = Math.floor(Math.max(min, max));
  startValue -= 0.5;
  endValue += 0.5;
  const randomInteger = startValue + Math.random() * (endValue - startValue);
  return Math.round(randomInteger);
};

const getRandomFloat = (min, max, decimals) => {
  const startValue = Math.min(min, max);
  const endValue = Math.max(min, max);
  const randomInteger = startValue + Math.random() * (endValue - startValue);
  return +randomInteger.toFixed(decimals);
};

const getRandomBoolean = () => Boolean(getRandomInteger(0, 1));

const getRandomItem = (arrayOfItems) => {
  const index = getRandomInteger(0, arrayOfItems.length - 1);
  return arrayOfItems[index];
};

const getRandomSubArray = (arrayOfItems) => arrayOfItems.filter(() => getRandomInteger(0, 1));

const getRandomDescription = (arrayOfStrings) => arrayOfStrings.slice(0, getRandomInteger(1, 5)).join(' ');

const getShortDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    description = `${description.substr(0, maxLength)}...`;
  }
  return description;
};

const getRandomDate = () => {
  const day = dayjs().date((getRandomInteger(-365, dayjs().date())));
  return dayjs(day);
};

const getRandomCommentsData = (numberOfComments) => {
  const comments = [];
  for (let i = 0; i < numberOfComments; i++) {
    comments.push({
      id: getRandomInteger(MIN_FILM_ID, MAX_FILM_ID),
      author: getRandomItem(COMMENTAUTHORS),
      comment: getRandomItem(COMMENTS),
      date: getRandomDate('D MMMM YYYY'),
      emotion: getRandomItem(EMOTIONS),
    });
  }
  return comments;
};

const getRandomFilm = (numberOfMovies) => {
  const movies = [];
  for (let i = 0; i < numberOfMovies; i++)  {
    movies.push({
      id: getRandomInteger(MIN_FILM_ID, MAX_FILM_ID),
      comments: getRandomCommentsData(getRandomInteger(MIN_COMMENTS_NUMBER, MAX_COMMENTS_NUMBER)),
      filmInfo: {
        title: getRandomItem(TITLES),
        alternativeTitle: getRandomItem(TITLES),
        totalRating: getRandomFloat(MIN_RATING, MAX_RATING, RATING_DECIMALS),
        poster: getRandomItem(POSTERS),
        ageRating: getRandomInteger(MIN_AGE_RATING, MAX_AGE_RATING),
        director: getRandomItem(DIRECTORS),
        writers: getRandomSubArray(WRITERS).join(', '),
        actors: getRandomSubArray(ACTORS).join(', '),
        release: {
          date: getRandomDate(),
          releaseCountry: getRandomItem(COUNTRIES),
        },
        runtime: getRandomInteger(MIN_RUN_TIME, MAX_RUN_TIME),
        genre: getRandomSubArray(GENRES).join(' '),
        description: getRandomDescription(DESCRIPTION),
      },
      userDetails: {
        watchlist: getRandomBoolean(),
        alreadyWatched: getRandomBoolean(),
        watchingDate: getRandomDate(),
        favorite: getRandomBoolean(),
      },
    });
  }
  return movies;
};

export const moviesData = getRandomFilm(NUMBER_OF_MOVIES);
export const commentsData = getRandomCommentsData(MAX_COMMENTS_NUMBER);
