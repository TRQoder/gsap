
let tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
});
tl.from("h4", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  stagger:0.2
});
tl.from("#page1 h1",{
    y:20,
    opacity:0,
    duration:1,
    scale:.2

})



gsap.to("#page2 h1",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -130%",
        scrub:2,
        pin:true
    }
})

//page 3
let path = `M 10 100 Q 500 10 990 100`;

let finalPath = `M 10 100 Q 500 100 990 100`;

let string = document.querySelector("#string");

string.addEventListener("mousemove", (dets) => {
  (path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`),  //by search curve path
    gsap.to("svg path", {
      attr: { d: path },
      duration: 0.2,
      ease: "power3.out",
     
    });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});
