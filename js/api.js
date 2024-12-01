function getData(renderPictures){
  fetch('https://29.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      renderPictures(photos);
    })
    .catch(()=>{
      const errorDiv = document.createElement('div');
      errorDiv.style.color = 'red';
      errorDiv.style.fontWeight = 'bold';
      errorDiv.style.position = 'fixed';
      errorDiv.style.top = '0';
      errorDiv.style.left = '0';
      errorDiv.style.width = '100%';
      errorDiv.style.backgroundColor = 'white';
      errorDiv.style.borderBottom = '2px solid red';
      errorDiv.style.zIndex = '1000';
      errorDiv.innerText = 'Упс, ошибка со стороны сервера, попробуйте перезагрузить страницу или зайти попозже :(';
      errorDiv.style.textAlign = 'center';
      document.body.appendChild(errorDiv);
    });
}

export{getData};
