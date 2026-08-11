// Mobile nav toggle
const siteHeader = document.getElementById("siteHeader");
const navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", () => {
  const isOpen = siteHeader.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.getElementById("siteNav").addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    siteHeader.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// Click-triggered Memphis confetti — reuses the site's locked 5-motif set.
const shapeClasses = ["motif-triangle", "motif-circle", "motif-zigzag", "motif-squiggle", "motif-arc"];
const motifColors = [
  "var(--color-primary)",
  "var(--color-secondary)",
  "var(--color-accent)",
  "var(--color-ink)",
];

document.addEventListener("click", (event) => {
  if (event.target.closest("a, button")) return;

  for (let i = 0; i < 3; i++) {
    const particle = document.createElement("span");
    const shape = shapeClasses[Math.floor(Math.random() * shapeClasses.length)];
    particle.className = `motif ${shape} confetti-particle`;
    particle.style.left = `${event.clientX + (Math.random() * 40 - 20)}px`;
    particle.style.top = `${event.clientY + (Math.random() * 40 - 20)}px`;
    particle.style.setProperty("--motif-color", motifColors[Math.floor(Math.random() * motifColors.length)]);
    particle.style.width = "1.4rem";
    particle.style.height = "1.4rem";
    particle.style.animationDelay = `${i * 40}ms`;

    document.body.appendChild(particle);
    particle.addEventListener("animationend", () => particle.remove());
  }
});
