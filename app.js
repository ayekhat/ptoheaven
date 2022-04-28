let slideIndex = 1;
let btnStatus = true;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    fadeInDown()
}
function minusSlides(n) {
    showSlides(slideIndex += n);
    fadeInUp();
}
function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slide-left");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    let j;
    let rslides = document.querySelectorAll(".slide-right");
    if (n > rslides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = rslides.length;
    }
    for (j = 0; j < rslides.length; j++) {
        rslides[j].style.display = "none";
    }
    rslides[slideIndex - 1].style.display = "block";


}

function fadeInUp() {
    let slides = document.querySelectorAll(".slide-left");
    let rslides = document.querySelectorAll(".slide-right");
    slides.forEach((e) => {
        e.classList.add("fade-in-up");
        e.classList.remove("fade-in-down");
    });
    rslides.forEach((e) => {
        e.classList.add("fade-in-down");
        e.classList.remove("fade-in-up");
    });
    console.log("Hello");


}
function fadeInDown() {
    let slides = document.querySelectorAll(".slide-left");
    let rslides = document.querySelectorAll(".slide-right");
    slides.forEach((e) => {
        e.classList.add("fade-in-down");
        e.classList.remove("fade-in-up");
    })
    rslides.forEach((e) => {
        e.classList.add("fade-in-up");
        e.classList.remove("fade-in-down");
    });
    // console.log("down");
}
