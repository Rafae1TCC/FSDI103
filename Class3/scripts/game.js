let position = 175;
let character = document.getElementById("character");
document.addEventListener("keydown", (event) => {
  const instructions = document.getElementById("instructions");
  if (instructions) {
    instructions.style.display = "none";
  }

  switch (event.key) {
    case "ArrowLeft":
    case "a":
      if (position > 10) {
        position = position - 10;
        character.style.left = position + "px";
      }
      break;
    case "ArrowRight":
    case "d":
      if (position < 340) {
        position = position + 10;
        character.style.left = position + "px";
      }
      break;
  }
});
