/**
 * Unique characters ordered from most occurring to least
 * If characters occur the same amount of times, then order them by their ASCII number
 */
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
  let result = {}

  for (let letter of input) {
    const value = result[letter]

    if (value) {
      result[letter] = { charCode: value.charCode, count: value.count + 1 }
    } else {
      result[letter] = { charCode: letter.charCodeAt(0), count: 1 }
    }
  }

  return result
}

const rankLetters = (input) => {
  const withoutCapitals = input.toLowerCase();
  const letters = getLetterCount(withoutCapitals); // { 'a': { charCode: 97, count: 3 }}
  const entries = Object.entries(letters) // [['a', { charCode: 97, count: 3 }]]
  const sortedArray = entries.sort(sorter)
  return sortedArray.map(([val]) => val)
};

module.exports = rankLetters;
