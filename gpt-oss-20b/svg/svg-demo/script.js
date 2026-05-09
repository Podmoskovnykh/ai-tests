const svg = document.getElementById('plant');
const stemLength = 120;
const springFactor = 0.05;
let t = 0;

function createStem() {
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', 95);
  rect.setAttribute('y', 200 - stemLength);
  rect.setAttribute('width', 10);
  rect.setAttribute('height', stemLength);
  rect.setAttribute('rx', 5);
  rect.setAttribute('ry', 5);
  g.appendChild(rect);
  svg.appendChild(g);
}

function sproutLeaves() {
  const numLeaves = 5;
  for (let i = 0; i < numLeaves; i++) {
    const leaf = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    leaf.setAttribute('cx', 100 + Math.sin(i) * 30);
    leaf.setAttribute('cy', 200 - stemLength + i * 20);
    leaf.setAttribute('rx', 15);
    leaf.setAttribute('ry', 5);
    leaf.setAttribute('fill', '#228b22');
    svg.appendChild(leaf);
  }
}

function animate() {
  t += 0.02;
  const wave = Math.sin(t * 3) * 5;
  const leaves = svg.querySelectorAll('ellipse');
  leaves.forEach((leaf, i) => {
    const offset = Math.sin((t + i) * 2) * 3;
    leaf.setAttribute('transform', `translate(0, ${offset})`);
  });
  requestAnimationFrame(animate);
}

createStem();
sproutLeaves();
animate();