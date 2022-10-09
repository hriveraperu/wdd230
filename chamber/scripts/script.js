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

const x = document.getElementById("hamburger")

x.onclick = toggleMenu