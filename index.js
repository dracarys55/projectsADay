const container = document.querySelector('.container');
const colors = ['#e74c3c', '#8e44ad', '3498db', '#e67e22', '#2ecc71'];
const square = 1000;

for (let i = 0; i <= square; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));
  container.appendChild(square);
}

function setColor(element) {
  const color = randomColor();
  const shiny = '#dad5d533';
  element.style.background = color;
  element.style.boxShadow = `0 0 5px ${shiny}`;
}
function removeColor(element) {
  element.style.background = '#191818';
  element.style.boxShadow = '0px 0px 2px #00000033';
}

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
