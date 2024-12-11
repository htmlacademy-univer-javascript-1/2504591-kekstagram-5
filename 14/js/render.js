import { renderBigPicture } from './big-picture.js';
import { onfilterClick } from './filters.js';
import { debounce } from './util.js';

const pictureSection = document.querySelector('.pictures');
const templatePic = document.querySelector('#picture').content.querySelector('.picture');
let pictureListFragment = document.createDocumentFragment();
let defaultPictures = '';

function updatePictureList(picturesList) {
  if (defaultPictures === '') {
    defaultPictures = picturesList;
  } else {
    pictureSection.querySelectorAll('.picture').forEach((el) => (el.remove()));
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

const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');
const filterDefault = document.querySelector('#filter-default');

const debouncedOnfilterClick = debounce(onfilterClick);

debouncedOnfilterClick(filterDefault);
debouncedOnfilterClick(filterDiscussed);
debouncedOnfilterClick(filterRandom);

export {renderPictures,defaultPictures};
