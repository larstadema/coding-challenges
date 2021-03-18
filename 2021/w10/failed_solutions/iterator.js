const sorter = ([keyA, valueA],[keyB, valueB]) => {
  if (valueA.count > valueB.count) {
    return -1;
  }
  if (valueA.count < valueB.count) {
    return 1;
  }
  if (valueA.charCode > valueB.charCode) {
    return 1;
  }
  if (valueA.charCode < valueB.charCode) {
    return -1;
  }
  return 0;
}

const getLetterCount = (input) => {
  const iterator = input[Symbol.iterator]();
  let char = iterator.next();
  let letters = {}

  while (!char.done) {
    const character = char.value
    const value = letters[character]

    if (value) {
      letters[character] = { charCode: value.charCode, count: value.count + 1 }
    } else {
      letters[character] = { charCode: character.charCodeAt(0), count: 1 }
    }

    char = iterator.next();
  }

  return letters
}

const rankLetters = (input) => {
  const withoutCapitals = input.toLowerCase();
  const letters = getLetterCount(withoutCapitals);
  const entries = Object.entries(letters)
  const sortedArray = entries.sort(sorter)
  return sortedArray.map(([val]) => val)
};

module.exports = rankLetters;
