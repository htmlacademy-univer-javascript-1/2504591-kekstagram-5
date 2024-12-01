import {getRandomInteger,createRandomIdFromRangeGenerator,createRandomComment} from './util.js';

const description = [
  'Анапа 2008',
  'Незабываемый опыт',
  'Удивительное приключение',
  'Дай Бог каждому такое',
  'Еле пронесло)'
];

const messages = [
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Билли Херрингтон',
  'Денни Ли',
  'Ван Даркхолм',
  'Рикардо Милос',
  'Бо Синн'
];

const getId = createRandomIdFromRangeGenerator(1,25);
const getUrl = createRandomIdFromRangeGenerator(1,25);

const photoDescription = () => ({
  id: getId(),
  url: `photos/${getUrl()}.jpg`,
  description: description[getRandomInteger(0,4)],
  likes: getRandomInteger(15,200),
  comments: createRandomComment(names,messages)
});
const result = () => Array.from({length: 25},photoDescription);
export {result};
