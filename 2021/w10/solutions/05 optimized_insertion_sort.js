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

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let curr = nums[i];
    while (
      j >= 0 &&
      (curr.count > nums[j].count ||
        (curr.count == nums[j].count && nums[j].charCode > curr.charCode))
    ) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = curr;
  }
  return nums;
};

const rankLetters = (input) => {
  const letters = getLetterCount(input);
  return insertionSort(letters).map((entry) => entry.letter);
};

module.exports = rankLetters;
