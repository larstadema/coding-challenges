function rgb2Hex(r, g, b) {
  this.b =
    this.b ||
    function (v) {
      return Math.max(Math.min(v, 255), 0);
    };
  const bits = (1 << 24) + (this.b(r) << 16) + (this.b(g) << 8) + this.b(b);

  return "#" + bits.toString(16).substr(1).toUpperCase();
}

module.exports = rgb2Hex;
