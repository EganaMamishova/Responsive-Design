let burger = document.querySelector(".fa-bars");
const menu = document.querySelector(".burger");
const exitBtn = document.querySelector(".exitBtn");
let firstBlock = document.querySelector(".first-block")
const navHead = document.querySelector(".head");


burger.addEventListener("click", ()=>{
  menu.style.left = "0";
  firstBlock.style.filter = "brightness(0.2)";
  navHead.style.filter = "brightness(0.2)";
  document.body.style.overflow = "hidden";
});

exitBtn.addEventListener("click", ()=>{
  menu.style.left = "-100%";
  firstBlock.style.filter = "brightness(100%)";
  navHead.style.filter = "brightness(100%)";
  document.body.style.overflow = "scroll";
});