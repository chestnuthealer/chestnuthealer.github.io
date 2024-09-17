document.getElementById("menu-icon").addEventListener("click", function () {
    let menu = document.querySelector(".menu");

    menu.classList.toggle("active");
});

document.getElementById("q").addEventListener("click", function () {
    let shop = document.getElementById("a");

    shop.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", (event) => {
    const shopElement = document.querySelector(".shop");

    const angleDownIcon = shopElement.querySelector(".fa-angle-down");

    shopElement.addEventListener("click", () => {
        angleDownIcon.classList.toggle("rotate-up");
    });
});

document.getElementById("login1").addEventListener("click", function (e) {
    e.preventDefault();

    var loginForm = document.getElementById("login-form");

    loginForm.classList.toggle("active");
});

// Animated Slider
const sections = document.querySelectorAll("section");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 350;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height) {
            sec.classList.add("show-animate");
        }
         else {
            sec.classList.remove("show-animate");
        }
    });
};
