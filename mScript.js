$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    $('.nav-link').toggleClass('scrolledText', $(this).scrollTop() > 50);
    $('.apps').toggleClass('active', $(this).scrollTop() > 50);
})

var slideIndex = 1;
showSlides(slideIndex);

var slideIndex2 = 1;
showSlides2(slideIndex);

/* Slider1 */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = $(".mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

/* Slider 2 */
function plusSlides2(m) {
    showSlides2(slideIndex2 += m);
}

function currentSlide2(m) {
    showSlides2(slideIndex2 = m);
}

function showSlides2(m) {
    var j;
    var slides2 = $(".mySlides2");
    if (m > slides2.length) {slideIndex2 = 1}
    if (m < 1) {slideIndex2 = slides2.length}
    for(j = 0; j < slides2.length; j++) {
        slides2[j].style.display = "none";
    }
    slides2[slideIndex2-1].style.display = "block";
}

/* Scrolling animation */
$(document).ready(function(){
    $("a").on("click", function(event){
        if(this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top-50
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});