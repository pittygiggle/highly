export const particlesOptions = {
  particles: {
    number: { value: 120 },
    color: { value: "ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 1 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00FFC2",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
};
