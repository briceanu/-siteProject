const date = document.getElementById("footer-h1");
date.innerText += " " + new Date().getFullYear() + " " + "Briceanu Teodor";
let togglecls = document.querySelectorAll(".navbar")[0];
let togglebtn = document.querySelectorAll(".hamburger-menu")[0];
togglebtn.addEventListener("click", function(e) {
    togglecls.classList.toggle("toggle");
});

