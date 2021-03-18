const getLetterCount = (input) => {
  const result = new Map();

  for (let letter of input.toLowerCase()) {
    const value = result.get(letter);

    if (value) {
      result.set(letter, {
        letter,
        count: value.count + 1,
      });
    } else {
      result.set(letter, {
        letter,
        count: 1,
      });
    }
  }

  return [...result.values()];
};

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let curr = nums[i];

    while (j > -1 && (curr.count > nums[j].count ||
      (curr.count == nums[j].count && nums[j].letter > curr.letter))) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = curr;
  }

  return nums;
};

const rankLetters = (input) => {
  const counts = getLetterCount(input)
  const sorted = insertionSort(counts)

  const result = new Array(sorted.length)

  for (let i = 0; i < sorted.length; i++) {
    result[i] = sorted[i].letter;
  }

  return result
};

module.exports = rankLetters;
