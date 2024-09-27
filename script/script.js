// Automatic Carousel
let slideIndex = 0;
let clickIndex = 0;
showSlides();

function showSlides() {
    if (clickIndex === 0) {
        let i;
        let slides = document.getElementsByClassName("slider");

        let sliderAdress = document.getElementsByClassName("sliderAdress");
        let sliderStreet = document.getElementsByClassName("sliderStreet");
        let sliderPrice = document.getElementsByClassName("sliderPrice");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            sliderAdress[i].style.display = "none";
            sliderStreet[i].style.display = "none";
            sliderPrice[i].style.display = "none";
        }
    
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";

        sliderAdress[slideIndex-1].style.display = "block";
        sliderStreet[slideIndex-1].style.display = "block"
        sliderPrice[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 4000); // Change image every 4 seconds
    }
}

// Next/previous controls
function plusSlides(n) {
    clickIndex ++;
    showSlidesOnClick(slideIndex += n);
}

function showSlidesOnClick(n) {
    let i;
    let slides = document.getElementsByClassName("slider");

    let sliderAdress = document.getElementsByClassName("sliderAdress");
    let sliderStreet = document.getElementsByClassName("sliderStreet");
    let sliderPrice = document.getElementsByClassName("sliderPrice");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        sliderAdress[i].style.display = "none";
        sliderStreet[i].style.display = "none";
        sliderPrice[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";

    sliderAdress[slideIndex-1].style.display = "block";
    sliderStreet[slideIndex-1].style.display = "block"
    sliderPrice[slideIndex-1].style.display = "block";
}