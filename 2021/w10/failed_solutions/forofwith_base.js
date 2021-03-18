const sorter = ([ka, a], [kb, b]) => b.count - a.count || a.charCode - b.charCode;

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
  const letters = getLetterCount(input.toLowerCase());
  const entries = Object.entries(letters)
  return entries.sort(sorter).map(([val]) => val)
};

module.exports = rankLetters;
