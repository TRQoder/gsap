let btn = document.querySelector("#btn1");
let aboutUs = document.querySelector("#aboutUs");

function navigateNewTab(element, url) {
  element.addEventListener("click", () => {
    window.open(url, "_blank");
  });
}

function navigateOnSameTab(element, url) {
  element.addEventListener("click", () => {
    window.location.href = url;
  });
}

navigateNewTab(aboutUs, "aboutUs.html");
navigateOnSameTab(btn, "anotherPage.html");

// gsap

function page1Animation() {
  let tl = gsap.timeline();

  tl.from("nav h1,nav h4,nav button", {
    y: -30,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.15,
  });

  tl.from(
    ".center-part1 h1",
    {
      x: -300,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  );
  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });
  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  );
  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  });
}
page1Animation()

function page2Animation(){
    let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section2",
          scroller: "body",
          start: "top 50%",
          end: "top 0%",
          scrub: 2,
        },
      });
      
      tl2.from(".services", {
        y: 30,
        opacity:0,
        duration:0.5
      });
      
      
      //Line 1
      tl2.from(".elem.line1.left",{
          x:-300,
          opacity:0,
          duration:1,
      },"anim1")
      tl2.from(".elem.line1.right",{
          x:300,
          opacity:0,
          duration:1,
      },"anim1")
      
      
      
      //Line2
      tl2.from(".elem.line2.left",{
          x:-300,
          opacity:0,
          duration:1,
      },"anim2")
      tl2.from(".elem.line2.right",{
          x:300,
          opacity:0,
          duration:1,
      },"anim2")
}
page2Animation();