function rgb2Hex(red, green, blue) {
  red = Math.max(0, Math.min(~~this.red, 255));
  green = Math.max(0, Math.min(~~this.green, 255));
  blue = Math.max(0, Math.min(~~this.blue, 255));

  return (
    "#" +
    ("00000" + ((red << 16) | (green << 8) | blue).toString(16))
      .slice(-6)
      .toUpperCase()
  );
}
module.exports = rgb2Hex;
