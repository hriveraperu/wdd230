// Wednesday, 24 July 2020 id="time"

// year id="year"

// modification time="modification-time"


//Year
document.getElementById("year").innerHTML = new Date().getFullYear(); 

//Modification Time 
document.getElementById('modification').textContent = document.lastModified;

//Todays date
document.getElementById('time').innerHTML = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(new Date());

function toggleMenu() {
    document.getElementById("main-nav").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}

const x = document.getElementById("hamburger");

x.onclick = toggleMenu;

const bannerWeek = document.createElement("p");

bannerWeek.textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'

const actualDate = new Date();
let dayWeek = actualDate.getDay();



if (dayWeek >= 1 && dayWeek <=2 ) {
    document.querySelector("header").insertBefore(bannerWeek, document.querySelector("#header"));
    };


