const hamburger = document.querySelector("#icon-hamburger");
const menu = document.querySelector("nav");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(el => el.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}))