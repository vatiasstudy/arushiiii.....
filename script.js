/* PAGE NAVIGATION */
const pages = document.querySelectorAll(".page");
const buttons = document.querySelectorAll(".next");
let current = 0;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    pages[current].classList.remove("active");
    current++;
    if(current>=pages.length) current=pages.length-1;
    pages[current].classList.add("active");
  });
});

/* SPRINKLE LOGIC */
const sprinkle = document.getElementById("sprinkle");
const normalItems = ["🌸","✨","💖","🦋","🌼","💫","🌹"];
const lastPageItems = [
  "Will you be my bestieeeeee 💖",
  "Say yess please ✨",
  "Bestieeee 🌸",
  "🌹","💖","✨","🌼"
];

setInterval(()=>{
  const span=document.createElement("span");
  span.style.position="fixed";
  span.style.left=Math.random()*100+"vw";
  span.style.top="-50px";

  if(current===4){
    // LAST PAGE SUPER MAGIC
    span.innerText = lastPageItems[Math.floor(Math.random()*lastPageItems.length)];
    span.style.fontSize=Math.random()*15+22+"px";
    span.style.color=["pink","hotpink","white","#ff69b4"][Math.floor(Math.random()*4)];
    span.style.textShadow="0 0 15px #fff, 0 0 30px pink, 0 0 50px #ff69b4";
  } else {
    // NORMAL PAGES
    span.innerText = normalItems[Math.floor(Math.random()*normalItems.length)];
    span.style.fontSize=Math.random()*10+18+"px";
    span.style.color="white";
    span.style.textShadow="0 0 8px #fff, 0 0 15px #ccc";
  }

  span.style.animation="fall 7s linear";
  sprinkle.appendChild(span);

  setTimeout(()=>span.remove(),7000);
},200);

/* FALL ANIMATION */
const style=document.createElement("style");
style.innerHTML=`
@keyframes fall {
  to {
    transform: translateY(120vh) rotate(360deg);
    opacity:0;
  }
}`;
document.head.appendChild(style);
