const ratioWidth = document.getElementById('ratio-width');
const ratioHeight = document.getElementById('ratio-height');
const width = document.getElementById('width');
const height = document.getElementById('height');

const calculateRatio = (antecedent, consequent) => {
  const aspectRatio = ratioWidth.value / ratioHeight.value;
  console.log('aspectRatio', aspectRatio);
  antecedent.value = parseFloat((consequent.value * aspectRatio).toFixed(2));
};

height.addEventListener("input", () => calculateRatio(width, height));
width.addEventListener("input", () => calculateRatio(height, width));
ratioHeight.addEventListener("input", () => calculateRatio(width, height));
ratioWidth.addEventListener("input", () => calculateRatio(height, width));