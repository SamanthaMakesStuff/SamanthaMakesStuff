// Mobile nav toggle
const navSlab = document.getElementById("navSlab");
const navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", () => {
  const isOpen = navSlab.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.getElementById("navLinks").addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navSlab.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// Click-triggered Memphis confetti burst — hand-built CSS shapes, not emoji.
const shapeClasses = ["shape-circle", "shape-triangle", "shape-zigzag"];
const brandColors = [
  "var(--color-brand-pink)",
  "var(--color-brand-violet)",
  "var(--color-brand-gold)",
  "var(--color-brand-cyan)",
];

document.addEventListener("click", (event) => {
  if (event.target.closest("a, button")) return;

  const particle = document.createElement("span");
  const shape = shapeClasses[Math.floor(Math.random() * shapeClasses.length)];
  particle.className = `shape ${shape} confetti-particle`;
  particle.style.left = `${event.clientX}px`;
  particle.style.top = `${event.clientY}px`;

  const color = brandColors[Math.floor(Math.random() * brandColors.length)];
  if (shape === "shape-triangle") {
    particle.style.borderBottomColor = color;
  } else {
    particle.style.background = color;
  }

  document.body.appendChild(particle);
  particle.addEventListener("animationend", () => particle.remove());
});
