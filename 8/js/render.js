import {result} from './data.js';
import { renderBigPicture } from './renderBigPic.js';
const pictureList = document.querySelector('.pictures');
const pictureListFragment = document.createDocumentFragment();
const templatePic = document.querySelector('#picture').content;
const simularPictures = result();
const renderSimularPictures = function() {
  simularPictures.forEach((picture) => {
    const generatePic = templatePic.cloneNode(true);
    generatePic.querySelector('.picture__img').src = picture.url;
    generatePic.querySelector('.picture__img').alt = picture.description;
    generatePic.querySelector('.picture__comments').textContent = picture.comments.length;
    generatePic.querySelector('.picture__likes').textContent = picture.likes;
    renderBigPicture(generatePic, picture.comments);
    pictureListFragment.appendChild(generatePic);
  });
  pictureList.appendChild(pictureListFragment);
};

export {renderSimularPictures};
