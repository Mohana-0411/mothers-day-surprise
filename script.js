const pages = document.querySelectorAll(".page");
const music = document.getElementById("bgMusic");
const clickSound =document.getElementById("clickSound");
const typingText = document.getElementById("typing-text");

let currentPage = 0;

/* page change */

function nextPage(pageIndex){
    clickSound.currentTime = 0;
    clickSound.play();

    pages[currentPage].classList.remove("active");

    currentPage = pageIndex;

    pages[currentPage].classList.add("active");

    /* music start */

    if(currentPage === 1){
        music.currentTime = 42;
        music.play();
    }

}

/* floating hearts */

const floating = document.getElementById(
    "floating-hearts"
);

const hearts = [
    "💖",
    "❤️",
    "❤️‍🩹",
    "💝",
    "💞",
    "💗"
];

function createFloatingHeart(){

    const heart =
    document.createElement("div");

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];

    heart.style.position =
    "absolute";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.bottom =
    "-50px";

    heart.style.fontSize =
    Math.random() * 20 + 20 + "px";

    heart.style.animation =
    "floatHeart 8s linear forwards";

    /* love message */

    if(Math.random() > 0.6){

        const text =
        document.createElement("div");

        text.innerHTML =
        "I Love You Maa ❤️";

        text.style.position =
        "absolute";

        text.style.color =
        "#ffd6ff";

        text.style.fontSize =
        "12px";

        text.style.marginTop =
        "30px";

        heart.appendChild(text);
    }

    floating.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);
}

setInterval(
    createFloatingHeart,
    500
);

/* typing letter */

const message = `
Amma ❤️

Nenu eppudu direct ga
cheppakapovachu...

kani naa life lo
strongest person nuvve.

Nenu badha lo unna,
happy ga unna,
nuvvu eppudu naaku dhairyam chepthav ❤️

I will find my happiness in my own deeds.

Thank you for teaching me everything.

Thank you for everything Momy ❤️

Love You Forever Amma 💖
`;

let i = 0;

function typeWriter(){

    if(i < message.length){

        typingText.innerHTML +=
        message.charAt(i);

        i++;

        setTimeout(
            typeWriter,
            45
        );
    }

}

setTimeout(typeWriter,2000);

/* final explosion */

function heartExplosion(){

    for(let i=0;i<120;i++){

        const heart =
        document.createElement("div");

        heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];

        heart.style.position =
        "fixed";

        heart.style.left =
        "50%";

        heart.style.top =
        "50%";

        heart.style.fontSize =
        Math.random()*30+20+"px";

        heart.style.zIndex =
        "999";

        const x =
        (Math.random()-0.5)
        *1200;

        const y =
        (Math.random()-0.5)
        *1200;

        heart.animate([
            {
                transform:
                "translate(0,0)",
                opacity:1
            },

            {
                transform:
                `translate(${x}px,
                ${y}px)`,
                opacity:0
            }

        ],{
            duration:2500
        });

        document.body
        .appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },2500);
    }
    /* ending popup */

setTimeout(()=>{

alert(
`Happy Mother's Day Amma ❤️

Thank you for everything...

We Love You Forever ❤️

— From Your Loving Daughters 💖`
);

},1200);

}
/* soft floating hearts */

setInterval(()=>{

const heart =
document.createElement("div");

const items = [
"💖","❤️",
"💞","💗",
"💝","❤️‍🩹"
];

heart.innerHTML =
items[
Math.floor(
Math.random()*
items.length
)
];

heart.style.position =
"fixed";

heart.style.left =
Math.random()*100+"vw";

heart.style.bottom =
"-20px";

heart.style.fontSize =
Math.random()*20+18+"px";

heart.style.opacity =
"0.6";

heart.style.zIndex =
"0";

heart.animate([

{
transform:
"translateY(0)",
opacity:.6
},

{
transform:
"translateY(-120vh)",
opacity:0
}

],{
duration:8000
});

document.body
.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

},700);