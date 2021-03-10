const numberToHex = (number) => {
  const hex = number.toString(16);
  return (hex.length == 1 ? "0" + hex : hex).toUpperCase();
};

/**
 *  [
      '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
      '0A', '0B', '0C', '0D', '0E', '0F', '10', '11', '12', '13',
      '14', '15', '16', '17', '18', '19', '1A', '1B', '1C', '1D',
      '1E', '1F', '20', '21', '22', '23', '24', '25', '26', '27',
      '28', '29', '2A', '2B', '2C', '2D', '2E', '2F', '30', '31',
      '32', '33', '34', '35', '36', '37', '38', '39', '3A', '3B',
      '3C', '3D', '3E', '3F', '40', '41', '42', '43', '44', '45',
      '46', '47', '48', '49', '4A', '4B', '4C', '4D', '4E', '4F',
      '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
      '5A', '5B', '5C', '5D', '5E', '5F', '60', '61', '62', '63',
      ... 156 more items
    ]
 */
const cache = Array.from({ length: 256 }, (_, i) => numberToHex(i))

const createHexFromNumber = (number) => {
  if (number <= 0) {
    return '00'
  }

  if (number >= 255) {
    return 'FF'
  }

  return cache[number]
}

const rgb2Hex = (r, g, b) =>
  "#" +
  createHexFromNumber(r) +
  createHexFromNumber(g) +
  createHexFromNumber(b);

module.exports = rgb2Hex;
