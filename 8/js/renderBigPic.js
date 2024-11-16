import {onEscapePress} from './util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPicImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');

const clone = bigPicture.querySelector('.social__comment').cloneNode(true);
bigPicture.querySelectorAll('.social__comment').forEach((el)=>(el.innerHTML = ''));

const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const closeButton = bigPicture.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => onEscapePress(evt, closeBigPicture);

function renderBigPicture(picture,comments){
  picture.addEventListener('click', () =>{
    bigPicImg.src = picture.querySelector('.picture__img').src;
    likesCount.textContent = picture.querySelector('.picture__likes').textContent;
    commentsCount.textContent = comments.length;
    for(let j = 0; j < comments.length;j++){
      const comment = clone.cloneNode(true);
      comment.querySelector('.social__picture').src = comments[j].avatar;
      comment.querySelector('.social__picture').alt = comments[j].name;
      comment.querySelector('.social__text').textContent = comments[j].message;
      socialComments.appendChild(comment);
    }
    socialCaption.textContent = picture.querySelector('.picture__img').alt;
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    bigPicture.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
  });
}

function closeBigPicture(){
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

closeButton.addEventListener('click',()=>closeBigPicture());

document.addEventListener('keydown', onEscapePress(closeBigPicture));

export {renderBigPicture};
