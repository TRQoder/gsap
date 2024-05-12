let tl = gsap.timeline();
let menu = document.querySelector(".nav i");
let cross = document.querySelector(".full i");

tl.to(".full", {
  right: 0,
  duration: 0.4,
});

tl.from(".full h4", {
  x: 100,
  duration: 0.4,
  stagger: 0.18,
  opacity: 0,
});

tl.from(".full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});

cross.addEventListener("click", () => {
  tl.reverse();
});

gsap.from(".nav h2", {
  y: -25,
  opacity: 0,
  duration: 1,
  delay: 1,
  scale: 0.5,
});
