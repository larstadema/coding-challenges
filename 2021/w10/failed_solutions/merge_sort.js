const getLetterCount = (input) => {
  const result = new Map();

  for (let letter of input) {
    const value = result.get(letter);

    if (value) {
      result.set(letter, {
        letter: letter,
        charCode: value.charCode,
        count: value.count + 1,
      });
    } else {
      result.set(letter, {
        letter: letter,
        charCode: letter.charCodeAt(),
        count: 1,
      });
    }
  }

  return [...result.values()];
};

function merge(left, right) {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (
      left[0].count < right[0].count ||
      (left[0].count == right[0].count && right[0].charCode < left[0].charCode)
    ) {
      arr.push(right.shift());
    } else {
      arr.push(left.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}

const rankLetters = (input) => {
  const letters = getLetterCount(input.toLowerCase());
  return mergeSort(letters).map((entry) => entry.letter);
};

module.exports = rankLetters;
