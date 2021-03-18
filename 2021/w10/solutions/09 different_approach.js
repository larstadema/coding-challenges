function intermediateSort(result) {
  const keyValues = Object.entries(result.table)

  const sortedResultArray = keyValues.sort(([keyA, countA], [keyB, countB]) => {
    return countB - countA || keyA.charCodeAt() - keyB.charCodeAt();
  })

  return {
    table: result.table,
    arr: sortedResultArray
  };
}

const rankLetters = (input) => {
  const inputArray = [...input.toLowerCase()]

  const formed = inputArray.reduce((result, character, index, originalArray) => {
    const value = result.table[character]

    if (value) {
      result.table[character] = value + 1;

      return intermediateSort(result)
    }

    result.table[character] = 1;

    if (index === originalArray.length - 1) {
      return intermediateSort(result)
    }

    return result;
  }, { table: {}, arr: []})

  return formed.arr.map(([key]) => key);
};

module.exports = rankLetters;
