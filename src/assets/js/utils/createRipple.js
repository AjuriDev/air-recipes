const createRipple = (event) => {
  const button = event.currentTarget;

  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  const rect = button.getBoundingClientRect();

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - rect.left - radius}px`;
  circle.style.top = `${event.clientY - rect.top - radius}px`;
  circle.classList.add('ripple');
  circle.addEventListener('animationend', ({ animationName }) => {
    if (animationName === 'ripple') {
      button.removeChild(circle);
    }
  });

  const ripple = button.getElementsByClassName('ripple')[0];

  if (ripple) {
    button.removeChild(ripple);
  }

  button.appendChild(circle);
};

export default createRipple;
