const navbar = document.querySelector(".navbar");
const up = document.querySelector("#up");
const navbarmenu = document.querySelector(".navbar-menu");
const icon = document.querySelector(".toogle i");

window.onscroll = () => {
    if(window.scrollY >= 450) {
        navbar.classList.add("fixed", "animte__fadeInDown");
    } else {
        navbar.classList.remove("fixed");
        navbar.classList.remove("animate__fadeInDown");
    }
    if(window.scrollY >= 800) {
        up_arrow.style.opacity = "1";
    } else {
        up_arrow.style.opacity = "0";
    }
} 
up.onclick = () => {
    window.scrollTo(0,0);
    window.scrollTo({top:0, behavior: "smooth"})
}

toggle.onclick = () => {
    navbarmenu.classList.toggle("active");
    icon.classList.toggle("fa-xmark");
}
