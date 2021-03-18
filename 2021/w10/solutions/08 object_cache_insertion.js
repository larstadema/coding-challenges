const rankLetters = (input) => {
  const tableCache = new Map();
  const inputArray = [...input.toLowerCase()]

  for (let i = 0; i < inputArray.length; i++) {
    const letter = inputArray[i];
    const value = tableCache.get(letter);

    if (value) {
      tableCache.set(letter, {
        letter,
        charCode: value.charCode,
        count: value.count + 1,
      });
    } else {
      tableCache.set(letter, {
        letter,
        charCode: letter.charCodeAt(),
        count: 1,
      });
    }
  }

  let table = [...tableCache.values()]
  let length = table.length

  for (let i = 1; i < length; i++) {
    let j = i - 1;
    let curr = table[i];

    while (j > -1 && (curr.count > table[j].count ||
      (curr.count == table[j].count && table[j].charCode > curr.charCode))) {
      table[j + 1] = table[j];
      j--;
    }

    table[j + 1] = curr;
  }

  for (let i = 0; i < length; i++) {
    table[i] = table[i].letter;
  }

  return table
};

module.exports = rankLetters;
