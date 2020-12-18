const sum = (a, b) => {
  return a + b;
};

const sumOf = (numbers) => {
  return numbers.reduce((prev, curr) => prev + curr, 0);
};

exports.sum = sum;
exports.sumOf = sumOf;
