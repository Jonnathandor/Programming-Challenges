export const transform = (old) => {
  const NEW = {}
  for(const POINTS in old){
    for(const LETTER of old[POINTS]){
      NEW[LETTER.toLowerCase()] = Number(POINTS);
    }
  }
  return NEW;
};
