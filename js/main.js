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
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const res = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(res);
};

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];
  return function() {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}
function createMessage() {
  const oneOrTwo = Math.random();
  if(oneOrTwo > 0.5){
    const message1 = messages[getRandomInteger(0,4)];
    let message2 = messages[getRandomInteger(0,4)];
    while(message2 === message1) {
      message2 = messages[getRandomInteger(0,4)];
    }
    return message1 + message2;
  } else {
    return messages[getRandomInteger(0,4)];
  }
}
function createRandomComment () {
  const comments = [];
  for(let i = 0;i < getRandomInteger(0,30);i++){
    const getCommId = createRandomIdFromRangeGenerator(1,1000);
    const getAvatarNum = createRandomIdFromRangeGenerator(1,6);
    const getAvatar = `img/avatar-${getAvatarNum()}.svg`;
    const getMessage = createMessage();
    const comment = {
      id: getCommId(),
      avatar: getAvatar,
      message: getMessage,
      name: names[getRandomInteger(0,4)],
    };
    comments.push(comment);
  }
  return comments;
}
const getId = createRandomIdFromRangeGenerator(1,25);
const getUrl = createRandomIdFromRangeGenerator(1,25);
const photoDescription = () => ({
  id: getId(),
  url: `photos/${getUrl()}.jpg`,
  description: description[getRandomInteger(0,4)],
  likes: getRandomInteger(15,200),
  comments: createRandomComment()
});
// eslint-disable-next-line no-unused-vars
const result = Array.from({length: 25},photoDescription);
