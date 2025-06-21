// Select the h1 element
const h1 = document.getElementById("movingText");

let position = 0;
let direction = 1;

// Move the h1 left and right every 50ms
setInterval(() => {
  position += 5 * direction;

  if (position > 300 || position < 0) {
    direction *= -1; // Reverse direction
  }

  h1.style.left = position + "px";
}, 
            50);
