function getRandomBetween(minnumber, maxnumber) {
  const min = parseInt(minnumber);
  const max = parseInt(maxnumber);
  const returnRandom = Math.floor(Math.random() * (max - min + 1) + min);
  return returnRandom;
}

module.exports = {
  getRandomBetween: getRandomBetween
}