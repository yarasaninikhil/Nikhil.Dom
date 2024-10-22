let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let cards = document.querySelector(".card2")
let more = document.querySelector(".more");
let btn = document.querySelector(".btn");
 let img1=document.querySelector(".item1")
 let img2=document.querySelector(".item2")
 let img3=document.querySelector(".item3")
 let img4=document.querySelector(".item4")


 
setInterval(() => {
  let currenttime = new Date();

  hrs.innerHTML =
    (currenttime.getHours() < 10 ? "0" : "") + currenttime.getHours();
  min.innerHTML =
    (currenttime.getMinutes() < 10 ? "0" : "") + currenttime.getMinutes();
  sec.innerHTML =
    (currenttime.getSeconds() < 10 ? "0" : "") + currenttime.getSeconds();
}, 1000);
// console.log(currenttime)

// card
// btn.addEventListener("click",()=>{
//   card.style.display="block"
// })
btn.addEventListener("click", () => {
  card.style.display = "block"

})
//  grid
document.querySelectorAll(".grid-item img").forEach(image=>{
  image.onclick= ()=>{
    document.querySelector(".pop-image").style.display="block"
    document.querySelector(".pop-image img") .src=image.getAttribute(`src`)
  }
})
document.querySelector(".pop-image span").onclick=()=>{
  document.querySelector(".pop-image").style.display="none"

}


