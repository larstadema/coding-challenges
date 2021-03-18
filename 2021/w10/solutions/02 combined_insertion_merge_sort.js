const getLetterCount = (input) => {
  const result = new Map();

  for (let letter of input.toLowerCase()) {
    const value = result.get(letter);

    if (value) {
      result.set(letter, {
        letter,
        charCode: value.charCode,
        count: value.count + 1,
      });
    } else {
      result.set(letter, {
        letter,
        charCode: letter.charCodeAt(),
        count: 1,
      });
    }
  }

  return [...result.values()];
};

const insertionSort = (letters) => {
  let n = letters.length;

  for (let i = 1; i < n; i++) {
    let current = letters[i];
    let j = i - 1;

    while (
      j > -1 &&
      (current.count > letters[j].count ||
        (current.count == letters[j].count &&
          letters[j].charCode > current.charCode))
    ) {
      letters[j + 1] = letters[j];
      j--;
    }
    letters[j + 1] = current;
  }

  return letters;
};

function merge(arr1, arr2) {
  let results = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (
      arr1[i].count > arr2[j].count ||
      (arr1[i].count == arr2[j].count && arr2[j].charCode > arr1[i].charCode)
    ) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

const INSERTION_MERGE_THRESHOLD = 32;

function mergeSort(letters) {
  if (letters.length <= INSERTION_MERGE_THRESHOLD) {
    return insertionSort(letters);
  }

  let mid = Math.floor(letters.length / 2);
  let left = mergeSort(letters.slice(0, mid));
  let right = mergeSort(letters.slice(mid));
  return merge(left, right);
}

const rankLetters = (input) => {
  const letters = getLetterCount(input);
  const sorted = mergeSort(letters)
  const result = new Array(sorted.length)

  for (let i = 0; i < sorted.length; i++) {
    result[i] = sorted[i].letter;
  }

  return result
  // return mergeSort(letters).map((entry) => entry.letter);
};

module.exports = rankLetters;
