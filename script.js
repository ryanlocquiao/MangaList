const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuButtonIcon = menuButton.querySelector("i");

menuButton.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuButtonIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");

    menuButtonIcon.setAttribute("class", "ri-menu-line");
});