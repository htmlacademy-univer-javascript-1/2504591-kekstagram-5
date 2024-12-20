import { defaultPictures } from './render.js';
import { shuffleArray } from './util.js';
const ACTIVE_CLASS = 'img-filters__button--active';

const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

function sortByCommentCount(a, b) {
  return b.comments.length - a.comments.length;
}

function filterPictures(pictureArray) {
  if (filterRandom.classList.contains(ACTIVE_CLASS)) {
    return shuffleArray(pictureArray);
  } else if (filterDiscussed.classList.contains(ACTIVE_CLASS)) {
    return defaultPictures.slice().sort(sortByCommentCount);
  }
  return defaultPictures;
}

export{filterPictures};
