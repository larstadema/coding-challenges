const g = (n) => {
  let hex = n.toString(16);
  return (hex.length == 1 ? "0" + hex : hex).toUpperCase();
}
const h = {...Array(256).fill().map((_, i) => g(i))}
const c2h = (c) => c <= 0 ? '00' : c >= 255 ? 'FF' : h[c]
module.exports = (r, g, b) => "#" + c2h(r) + c2h(g) + c2h(b);
