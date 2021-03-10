module.exports = (r, g, b) =>
  (
    "#" +
    (
      (1 << 24) +
      ((r < 0 ? 0 : r > 255 ? 255 : r) << 16) +
      ((g < 0 ? 0 : g > 255 ? 255 : g) << 8) +
      (b < 0 ? 0 : b > 255 ? 255 : b)
    )
      .toString(16)
      .substr(1)
  ).toUpperCase();
