const openButton = document.querySelector('.open');
const closeButton = document.querySelector('.close');
const navBar = document.querySelector('#main-navbar');
const navLink = document.querySelectorAll('.mobile-link')
const mobileMenu = document.querySelector('.link-container-mobile');
const content = document.querySelector('#overlay');

openButton.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);
navLink.forEach((i) => i.addEventListener('click', closeNav));

function openNav() {
    navBar.classList.toggle('nav-active');
    mobileMenu.classList.toggle('menu-active');
    content.classList.toggle('active');
};
function closeNav() {
    navBar.classList.remove("nav-active");
	mobileMenu.classList.remove("menu-active");
    content.classList.remove("active");
}
var slideIndex = 1;
showSlides(slideIndex);

var prev = document.querySelectorAll(".prev");
var next = document.querySelectorAll(".next");
prev.forEach((p) => p.onclick = function() {
    plusSlides(-1)
});
next.forEach((n) => n.onclick = function() {
    plusSlides(1)
});


function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-box");
    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = slides.length
    }
    for( i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block'
};

