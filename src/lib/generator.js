const generator = {
  randomId(maxNumber) {
    return Math.round(Math.random() * maxNumber);
  },
};

export default generator;