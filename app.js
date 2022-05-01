let index = 1;
showImageSlides(index);

// Next/previous controls
function plusImageSlides(n) {
    showImageSlides(index += n);
    fadeInDown()
}
function minusSlides(n) {
    showImageSlides(index += n);
    fadeInUp();
}
function showImageSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slide-left");
    if (n > slides.length) {
        index = 1;
    }
    if (n < 1) {
        index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index - 1].style.display = "block";

    let j;
    let rslides = document.querySelectorAll(".slide-right");
    if (n > rslides.length) {
        index = 1;
    }
    if (n < 1) {
        index = rslides.length;
    }
    for (j = 0; j < rslides.length; j++) {
        rslides[j].style.display = "none";
    }
    rslides[index - 1].style.display = "block";


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

//blur background
let bg = document.getElementsByClassName("card");
let slides = document.getElementsByClassName("mySlides");
let blur = document.getElementById("blur");
let slideIndex = 1;
function active() {
    blur.classList.toggle('active');
}
for (e in bg) {
    bg[e].addEventListener("click", function () {
        // slides.classList.toggle('active');
        active();
        document.body.innerHTML += `
        <div class="slideshow-container">
            <div class="mySlides fade">
                <div class="numbertext">1 / 6</div>
                <img src="./images/background.jpg" style="width:100%;height: 350px;">
                <button class="text" id="close" onclick="closeGallery()">close</button>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">2 / 6</div>
                <img src="./images/background1.jpg" style="width:100%;height: 350px;">
                <button class="text" id="close" onclick="closeGallery()">close</button>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">3 / 6</div>
                <img src="./images/background2.jpg" style="width:100%;height: 350px;">
                <button class="text" id="close" onclick="closeGallery()">close</button>
            </div>
            <div class="mySlides fade">
                <div class="numbertext">4 / 6</div>
                <img src="./images/cm-1.jpg" style="width:100%;height: 350px;">
                <button class="text" id="close" onclick="closeGallery()">close</button>
            </div>
            <div class="mySlides fade">
                <div class="numbertext">5 / 6</div>
                <img src="./images/cover1.jpg" style="width:100%;height: 350px;">
                <button class="text" id="close" onclick="closeGallery()">close</button>
            </div>
            <div class="mySlides fade">
                <div class="numbertext">6 / 6</div>
                <img src="./images/cover2.jpg" style="width:100%;height: 350px;">
                <button class="text" id="close" onclick="closeGallery()">close</button>
            </div>
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        `;

        showSlides(slideIndex);
        buttonVisibility();
    })
}
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function buttonVisibility() {
    document.querySelector('.prev').style.display = "block";
    document.querySelector('.next').style.display = "block";
}

function closeGallery() {
    let blur = document.querySelector('.card-list');
    let last = document.querySelector('.slideshow-container');
    document.body.removeChild(last);
    blur.classList.toggle('active')
}

