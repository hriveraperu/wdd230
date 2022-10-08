function toggleMenu() {
    document.getElementById("main-nav").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}

const x = document.getElementById("hamburger")

x.onclick = toggleMenu