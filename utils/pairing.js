//Pair

function size(length) {
  if (length % 2 == 0) {
    return length / 2;
  } else {
    return Math.floor(length / 2) + 1;
  }
}
// value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

pairedArray = arr => {
  arr.sort((a, b) => Math.random() - 0.5);
  let res = [];
  let j = 0;
  let checkLength = size(arr.length);
  for (i = 0; i < checkLength; i++) {
    let b = [];
    for (k = j; k < j + 2; k++) {
      if (arr[k] == undefined) {
        res.push(b);
        return res;
      }
      b.push(arr[k]);
    }
    res.push(b);
    j = j + 2;
  }
  return res;
};
// pairedArray(value);

//Group of 4

const groupArray = arr => {
  arr.sort((a, b) => Math.random() - 0.5);
  let res = [];
  let j = 0;
  let checkLength = size(arr.length);
  for (i = 0; i < checkLength; i++) {
    let b = [];
    for (k = j; k < j + 4; k++) {
      if (arr[k] == undefined) {
        res.push(b);
        return res;
      }
      b.push(arr[k]);
    }
    res.push(b);
    j = j + 4;
  }
  return res;
};

module.exports = { pairedArray, groupArray };
