const text = "Husen Portfolio";

let i = 0;

function ketik(){

if(i < text.length){

document
.getElementById("typing")
.innerHTML += text.charAt(i);

i++;

setTimeout(
ketik,
100
);

}

}

ketik();



// tombol masuk

document
.querySelector("button")
.addEventListener(
"click",

function(){

document
.getElementById("about")
.scrollIntoView({

behavior:"smooth"

});

}

);

let angka1 = 0;
let angka2 = 0;
let angka3 = 0;

setInterval(() => {

if (
document.getElementById("projectCount")
&& angka1 < 12
){

angka1++;
document.getElementById("projectCount").innerText = angka1;

}

if(
document.getElementById("learnCount")
&& angka2 < 250
){

angka2 += 5;
document.getElementById("learnCount").innerText = angka2;

}

if(
document.getElementById("coffeeCount")
&& angka3 < 999
){

angka3 += 20;
document.getElementById("coffeeCount").innerText = angka3;

}

},50);

window.addEventListener("load",()=>{

const kataList=[

"Belajar pelan lebih baik daripada berhenti.",

"Upgrade value diri tiap hari.",

"Progress kecil yang dilakukan setiap hari akan menjadi progress besar suatu hari nanti.",

"Do the best you can until you know better, then when you know better, do better.",

"for your future life, do anything you can do now..."

];

let i=0;

setInterval(()=>{

let teks =
document.getElementById("kata");

if(teks){

teks.innerText=
kataList[i];

i++;

if(i>=kataList.length){

i=0;

}

}

},3000);

});

window.onscroll=function(){

if(document.body.scrollTop>200){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo(0,0);

};

document
.getElementById("topBtn")
.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

window.addEventListener(
"load",

()=>{

setTimeout(()=>{

document
.getElementById("loader")
.style.opacity="0";

setTimeout(()=>{

document
.getElementById("loader")
.style.display="none";

},1000);

},2000);

});

const particles =
document.querySelector(".particles");

for(let i=0;i<40;i++){

let bintang =
document.createElement("span");

bintang.style.left=
Math.random()*100+"%";

bintang.style.animationDuration=
(5+Math.random()*10)+"s";

bintang.style.opacity=
Math.random();

particles.appendChild(bintang);

}

const tombolTema=
document.getElementById("themeBtn");

tombolTema.onclick=()=>{

document.body.classList.toggle(
"light-mode"
);

if(
document.body.classList.contains(
"light-mode"
)
){

tombolTema.innerHTML="🌙";

}else{

tombolTema.innerHTML="☀️";

}

};

const muncul=
document.querySelectorAll(".hidden");

const observer=
new IntersectionObserver(

(entries)=>{

entries.forEach(

(entry)=>{

if(
entry.isIntersecting
){

entry.target
.classList.add(
"show"
);

}

}

);

}

);

muncul.forEach(

(el)=>observer.observe(el)

);

const universeCards =
document.querySelectorAll(".universe-box a");

universeCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform=
"translateY(-15px) scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"translateY(0px) scale(1)";

});

});

document.querySelectorAll(
".universe-box a"
).forEach(link=>{

link.addEventListener(
"click",

()=>{

document.body.style.opacity=".95";

}

);

});

let time=1500;

let timerRunning;

function startTimer(){

timerRunning=setInterval(()=>{

let minutes=
Math.floor(time/60);

let seconds=
time%60;

document.getElementById(
"timer"
).innerHTML=

minutes+":"

+(seconds<10?
"0":"")+seconds;

time--;

if(time<0){

clearInterval(
timerRunning
);

alert(
"Fokus selesai 🔥"
);

}

},1000);

}

function resetTimer(){

clearInterval(
timerRunning
);

time=1500;

document.getElementById(
"timer"
).innerHTML=
"25:00";

}

const card=document.querySelector(".tilt-card");

card.addEventListener("touchmove",(e)=>{

let touch=e.touches[0];

let rect=card.getBoundingClientRect();

let x=touch.clientX-rect.left;

let center=rect.width/2;

let move=(x-center)/12;

card.style.transform=
`translateX(${move}px)`;

});

card.addEventListener("touchend",()=>{

card.style.transition=
".5s";

card.style.transform=
"translateX(0px)";

setTimeout(()=>{

card.style.transition=
".15s";

},500);

});