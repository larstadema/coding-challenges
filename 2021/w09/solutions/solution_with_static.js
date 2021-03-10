const rgb2Hex = (r, g, b) => {
  const rgb =
    ((r < 0 ? 0 : r > 255 ? 255 : r) << 16) +
    ((g < 0 ? 0 : g > 255 ? 255 : g) << 8) +
    (b < 0 ? 0 : b > 255 ? 255 : b);

  return "#" + (0x1000000 + rgb).toString(16).substr(1).toUpperCase();
};

module.exports = rgb2Hex;
