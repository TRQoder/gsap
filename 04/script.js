let cursor = document.querySelector(".cursor");

window.addEventListener("mousemove",(dets)=>{
    console.log(dets.x);
    gsap.to(".cursor",{
        x:dets.x,
        y:dets.y,
        ease:"elastic.out",
        duration:1
    })
})

