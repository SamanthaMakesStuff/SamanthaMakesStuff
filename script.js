// Little burst of sparkle emoji wherever you click — because why not.
document.addEventListener("click", (event) => {
  const sparkle = document.createElement("span");
  sparkle.textContent = ["✨", "💖", "🌟", "💫"][Math.floor(Math.random() * 4)];
  sparkle.style.position = "fixed";
  sparkle.style.left = `${event.clientX}px`;
  sparkle.style.top = `${event.clientY}px`;
  sparkle.style.fontSize = "1.2rem";
  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = "9999";
  sparkle.style.transition = "transform 0.6s ease, opacity 0.6s ease";
  sparkle.style.transform = "translate(-50%, -50%) scale(1)";
  sparkle.style.opacity = "1";
  document.body.appendChild(sparkle);

  requestAnimationFrame(() => {
    sparkle.style.transform = `translate(-50%, -150%) scale(1.6) rotate(${Math.random() * 60 - 30}deg)`;
    sparkle.style.opacity = "0";
  });

  setTimeout(() => sparkle.remove(), 650);
});
