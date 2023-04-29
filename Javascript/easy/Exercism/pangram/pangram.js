export const isPangram = (string) => {
  return new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;
};
