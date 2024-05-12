let bulb = document.querySelector(".box");
let btn = document.querySelector(".btn");

let flag = 0;

btn.addEventListener("click", () => {
  if (flag == 0) {
    console.log("clicked");
    bulb.style.backgroundColor = "green";
    flag = 1;
  } else {
    console.log("clicked again");
    bulb.style.backgroundColor = "transparent";
    flag = 0;
  }
});

let h = document.querySelectorAll("h1");
// for(let i =0;i<h.length;i++){

//     console.log(h[i]);
// }

h.forEach(e=>{
    console.log(e);
})

