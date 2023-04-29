export const isIsogram = (str) => {
  return !/(\w).*\1/i.test(str)
};