function isCorrectTme(startWork,endWork,meetDate,meetTime){
  const startInt = startWork.split(':');
  startInt[0] = Number(startInt[0]);
  startInt[1] = Number(startInt[1]);
  const endInt = endWork.split(':');
  endInt[0] = Number(endInt[0]);
  endInt[1] = Number(endInt[1]);
  if(endInt[1] < 12){
    endInt[1] += 12;
  }
  const meetInt = meetDate.split(':');
  meetInt[0] = Number(meetInt[0]);
  meetInt[1] = Number(meetInt[1]);
  if(meetInt[0] < startInt[0] || (meetInt[0] === startInt[0] && meetInt[1] < startInt[1])){
    return false;
  }
  meetInt[0] += meetTime / 60;
  meetInt[1] += meetTime % 60;
  if(endInt[0] < meetInt[0] || (endInt[0] === meetInt[0] && endInt[1] < meetInt[1])){
    return false;
  }
  return true;
}
isCorrectTme();
