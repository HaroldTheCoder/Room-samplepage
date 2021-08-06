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

