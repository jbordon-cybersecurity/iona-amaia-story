document.addEventListener("DOMContentLoaded", () => {
  // Particle background
  particlesJS("magicParticles", {
    particles: {
      number: { value: 80 },
      size: { value: 3 },
      move: { speed: 1 },
      color: { value: "#FFD700" },
      line_linked: { enable: false },
      opacity: { value: 0.8 }
    }
  });

  // Button link functionality
  const navButtons = document.querySelectorAll("button[data-link], button[data-target]");
  navButtons.forEach(button => {
    const target = button.dataset.link || button.dataset.target;
    if (target) {
      button.addEventListener("click", () => {
        window.location.href = target;
      });
    }
  });

  // Hover effect on story images
  const thumbnails = document.querySelectorAll(".story-thumbnail");
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("mouseenter", () => {
      thumbnail.style.transform = "scale(1.05)";
    });
    thumbnail.addEventListener("mouseleave", () => {
      thumbnail.style.transform = "scale(1)";
    });
  });
});
