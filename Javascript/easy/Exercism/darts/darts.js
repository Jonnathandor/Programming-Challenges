

export const score = (x, y) => {
  let distance = Math.hypot(x,y);
  console.log(distance);

  if(distance <= 1) {
    return 10;
  } else if(distance <= 5){
    return 5;
  } else if(distance <= 10) {
    return 1;
  } else {
    return 0;
  }
};
