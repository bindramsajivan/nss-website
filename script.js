// =======================================
// PRELOADER
// =======================================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 800);
});


// =======================================
// STICKY NAVBAR
// =======================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "#0d47a1";
        navbar.style.padding = "14px 8%";
    } else {
        navbar.style.background = "rgba(13,71,161,.75)";
        navbar.style.padding = "18px 8%";
    }

});


// =======================================
// MOBILE MENU
// =======================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// =======================================
// SMOOTH SCROLL
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


// =======================================
// HERO BACKGROUND SLIDER
// =======================================

const heroImages = [

"nss-group(1).jpg",
"imagesphoto1.jpg",
"imagesphoto2.jpg",
"imagesphoto3.jpg",
"imagesphoto4.jpg",
"imagesphoto5.jpg",
"imagesphoto6.jpg"

];

let current = 0;

setInterval(()=>{

current++;

if(current>=heroImages.length){
current=0;
}

document.querySelector(".hero").style.backgroundImage=

`linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),
url('${heroImages[current]}')`;

},5000);


// =======================================
// SCROLL ANIMATION
// =======================================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});


// =======================================
// ACHIEVEMENT COUNTER
// =======================================

const counters=document.querySelectorAll(".achievement-card h1");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.innerText.replace("+","");

const current=+counter.getAttribute("data-count")||0;

const increment=Math.ceil(target/80);

if(current<target){

counter.setAttribute("data-count",current+increment);

counter.innerText=current+increment+"+";

setTimeout(update,25);

}else{

counter.innerText=target+"+";

}

};

update();

});


// =======================================
// BACK TO TOP BUTTON
// =======================================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// =======================================
// ACTIVE NAV LINK
// =======================================

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let currentSection="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

currentSection=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+currentSection){

link.classList.add("active");

}

});

});


// =======================================
// JOIN FORM
// =======================================

const form=document.querySelector(".join-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank You ❤️\n\nYour NSS Registration Request has been submitted successfully.");

form.reset();

});

}


// =======================================
// GALLERY IMAGE POPUP
// =======================================

const galleryImages=document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.left="0";
overlay.style.top="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.85)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;
image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="15px";
image.style.boxShadow="0 15px 40px rgba(0,0,0,.5)";

overlay.appendChild(image);

document.body.appendChild(overlay);

overlay.addEventListener("click",()=>{

overlay.remove();

});

});

});


// =======================================
// CONSOLE
// =======================================

console.log("================================");
console.log(" NSS WEBSITE V3.0 ");
console.log(" Developed by Ram Sajivan Bind ");
console.log("================================");


// =======================================
// ACTIVITY FILTER
// =======================================

const filterBtns = document.querySelectorAll(".filter-btn");
const activityCards = document.querySelectorAll(".activity-card");

filterBtns.forEach(btn => {

btn.addEventListener("click", () => {

document.querySelector(".filter-btn.active")?.classList.remove("active");

btn.classList.add("active");

const filter = btn.dataset.filter;

activityCards.forEach(card => {

if(filter === "all" || card.dataset.category === filter){

card.style.display = "block";

setTimeout(()=>{
card.style.opacity = "1";
card.style.transform = "scale(1)";
},100);

}else{

card.style.opacity="0";
card.style.transform="scale(.8)";

setTimeout(()=>{
card.style.display="none";
},300);

}

});

});

});


// =======================================
// SEARCH ACTIVITY
// =======================================

const searchInput = document.getElementById("searchActivity");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value = searchInput.value.toLowerCase();

activityCards.forEach(card=>{

const text = card.innerText.toLowerCase();

card.style.display = text.includes(value)
? "block"
: "none";

});

});

}


// =======================================
// COUNTDOWN TIMER
// =======================================

const eventDate = new Date("2026-07-20T08:00:00").getTime();

const timer = setInterval(()=>{

const now = new Date().getTime();

const distance = eventDate-now;

if(distance<0){

clearInterval(timer);

document.getElementById("countdown").innerHTML=
"<h2>🎉 Event Started</h2>";

return;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;

},1000);


// =======================================
// ACTIVITY MODAL
// =======================================

const modal=document.getElementById("activityModal");

const close=document.querySelector(".close-modal");

activityCards.forEach(card=>{

card.addEventListener("click",()=>{

modal.style.display="flex";

document.getElementById("modalTitle").innerText=
card.querySelector("h3").innerText;

document.getElementById("modalDescription").innerText=
card.querySelector("p").innerText;

document.getElementById("modalCategory").innerText=
card.dataset.category;

});

});

if(close){

close.onclick=()=>{

modal.style.display="none";

};

}

window.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

};


// =======================================
// TIMELINE ANIMATION
// =======================================

const timeline=document.querySelectorAll(".timeline-item");

const timelineObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateX(0)";

}

});

},{threshold:.2});

timeline.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateX(-80px)";
item.style.transition=".8s";

timelineObserver.observe(item);

});


// =======================================
// CARD HOVER EFFECT
// =======================================

activityCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});


// =======================================
// FINISHED
// =======================================

console.log("Activities Module Loaded Successfully");