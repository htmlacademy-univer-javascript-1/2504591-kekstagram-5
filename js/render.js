import { renderBigPicture } from './big-picture.js';
import { debounce } from './util.js';
import { shuffleArray } from './util.js';

const ACTIVE_CLASS = 'img-filters__button--active';

const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');
const filterDefault = document.querySelector('#filter-default');

const pictureSection = document.querySelector('.pictures');
const templatePic = document.querySelector('#picture').content.querySelector('.picture');
let pictureListFragment = document.createDocumentFragment();
let defaultPictures = '';

function sortByCommentCount(a, b) {
  return b.comments.length - a.comments.length;
}

function filterPictures(pictureArray) {
  if (filterRandom.classList.contains(ACTIVE_CLASS)) {
    return shuffleArray(pictureArray);
  } else if (filterDiscussed.classList.contains(ACTIVE_CLASS)) {
    return pictureArray.slice().sort(sortByCommentCount);
  }
  return pictureArray;
}

function updatePictureList(picturesList) {
  if (defaultPictures === '') {
    defaultPictures = picturesList;
  } else {
    pictureSection.querySelectorAll('.picture').forEach((el) => el.remove());
    pictureListFragment = document.createDocumentFragment();
  }
}

function fillPicture(picture) {
  const generatePic = templatePic.cloneNode(true);
  generatePic.querySelector('.picture__img').src = picture.url;
  generatePic.querySelector('.picture__img').alt = picture.description;
  generatePic.querySelector('.picture__comments').textContent = picture.comments.length;
  generatePic.querySelector('.picture__likes').textContent = picture.likes;
  renderBigPicture(generatePic, picture.comments);
  return generatePic;
}

const renderPictures = function(picturesList) {
  updatePictureList(picturesList);

  picturesList.forEach((picture) => {
    const generatePic = fillPicture(picture);
    pictureListFragment.appendChild(generatePic);
  });

  pictureSection.appendChild(pictureListFragment);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};


const onFilterClickDebounced = debounce((filterButton) => {
  document.querySelector('.img-filters__button--active').classList.remove(ACTIVE_CLASS);
  filterButton.classList.add(ACTIVE_CLASS);

  if (defaultPictures !== '') {
    renderPictures(filterPictures(defaultPictures));
  }
});

function addFilterClickListener(filterButton) {
  filterButton.addEventListener('click', () => onFilterClickDebounced(filterButton));
}


addFilterClickListener(filterDefault);
addFilterClickListener(filterDiscussed);
addFilterClickListener(filterRandom);

export { renderPictures, defaultPictures };
