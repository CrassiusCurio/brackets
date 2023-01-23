module.exports = function check(str, bracketsConfig) {
  const count = str.length / 2;
  for (i = 0; i <= count; i++) {
    bracketsConfig.forEach((el) => {
      let regEx = new RegExp(`\\${el[0]}\\${el[1]}`, 'g');
      str = str.replace(regEx, '');
      let regExNum = new RegExp(`${el[0]}${el[1]}`, 'g');
      str = str.replace(regExNum, '');
    })

  }
  if (!str.length) { return true }
  return false;
}
