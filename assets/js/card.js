const container = document.querySelector('.bio-container');
const card = document.querySelector('.profile-card');
let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
const maxAngle = 15;
const damping = 0.15;

function animate() {
  currentX += (targetX - currentX) * damping;
  currentY += (targetY - currentY) * damping;
  card.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
  requestAnimationFrame(animate);
}

container.addEventListener('mousemove', e => {
  const rect = container.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const deltaX = (x - centerX) / centerX;
  const deltaY = (y - centerY) / centerY;
  targetY = Math.max(Math.min(deltaX * maxAngle, maxAngle), -maxAngle);
  targetX = Math.max(Math.min(-deltaY * maxAngle, maxAngle), -maxAngle);
});

container.addEventListener('mouseleave', () => {
  targetX = 0;
  targetY = 0;
});

animate();
