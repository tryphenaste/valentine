// Get references to elements
const start = document.getElementById("start");
const letter = document.getElementById("letter");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");

// Function to show the love letter and play music
function showLetter() {
  start.classList.remove("active");   // hide start screen
  letter.classList.add("active");     // show letter screen
  music.play();                       // play background music
}

/* Make NO button run away */
noBtn.addEventListener("mouseover", () => {
  // Keep the button inside the screen by limiting translate values
  const x = Math.random() * 200 - 100; // move -100 to 100px horizontally
  const y = Math.random() * 200 - 100; // move -100 to 100px vertically
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
