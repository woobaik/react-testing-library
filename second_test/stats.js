const max = (arr) => {
  let max = arr[0];
  arr.forEach((number) => {
    if (number > max) max = number;
  });
  return max;
};

const min = (arr) => {
  let min = arr[0];

  arr.forEach((number) => {
    if (number < min) min = number;
  });

  return min;
};

const sort = (arr) => {
  return arr.sort((a, b) => a - b);
};

const median = (arr) => {
  // in case its odd [1,2,3]
  const sortedArr = arr.sort();
  if (sortedArr.length % 2 !== 0) {
    return sortedArr[Math.floor(arr.length / 2)];
  } else {
    let answer =
      (sortedArr[sortedArr.length / 2 - 1] + sortedArr[sortedArr.length / 2]) /
      2;
    return answer;
  }
};

exports.max = max;
exports.min = min;
exports.sort = sort;
exports.median = median;
