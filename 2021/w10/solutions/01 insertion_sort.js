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

const rankLetters = (input) => {
  const letters = getLetterCount(input);
  return insertionSort(letters).map((entry) => entry.letter);
};

module.exports = rankLetters;
