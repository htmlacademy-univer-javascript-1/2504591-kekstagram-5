function onEscapePress(evt, funcName){
  if(evt.key === 'Escape'){
    funcName();
  }
}

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function shuffleArray(array) {
  const length = array.length;
  const shuffle = array.slice();
  for (let i = length - 1; i > 0; i -= 1) {
    const random = Math.floor(Math.random() * (i + 1));
    const current = shuffle[i];
    shuffle[i] = shuffle[random];
    shuffle[random] = current;
  }
  return shuffle.slice(0, 10);
}

export {onEscapePress, debounce, shuffleArray};
