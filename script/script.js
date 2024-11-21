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

// WorkMethode function to changevalue on click
function changeWMList(index) {
    let methodWorkImg = document.getElementById("methodWorkImg");
    let mwthodWorkTitle = document.getElementById("mwthodWorkTitle");
    let mwthodWorkText = document.getElementById("mwthodWorkText");

    let methodWorkList1 = document.getElementById("methodWorkList1");
    let methodWorkList2 = document.getElementById("methodWorkList2");
    let methodWorkList3 = document.getElementById("methodWorkList3");
    let methodWorkList4 = document.getElementById("methodWorkList4");
    
    if (index === 1) {
        methodWorkImg.src = "images/index-1.jpg"
        mwthodWorkTitle.innerText = "MEET AND DEFINE GOALS";
        let text = `
            The first thing we do is meeting with our clients and talk through their goals on a future project. 
            During this meeting, feel free to communicate your ideas and ask lots of questions.
            <br>
            <br>
            This stage is highly decisive as you can evaluate the work of your potential architect by browsing their portfolio. 
            As a client, you may also assess whether the architect listens to your needs and confirms that he or she understands them.
        `;
        mwthodWorkText.innerHTML = text;
    } else if (index === 2) {
        methodWorkImg.src = "images/index-2.jpg"
        mwthodWorkTitle.innerText = "WORKING ON THE CONCEPT";
        let text = `
            The next step of our cooperation lies in developing the concept of your future home. 
            It helps us define every single factor that makes the construction process of your home successful.
            <br>
            <br>
            Our team of designers and architects has to plan every single step of the project to make sure that the final result 
            will meet not only your requirements but also international construction and safety standards. 
            This is when monitoring & control begin.
        `;
        mwthodWorkText.innerHTML = text;
    } else if (index === 3) {
        methodWorkImg.src = "images/index-3.jpg"
        mwthodWorkTitle.innerText = "BUILDING YOUR HOME";
        let text = `
            There’s no doubt that the most important and responsible part of building a home is its construction process. 
            As we work with reliable contractors, a great result is guaranteed.
            <br>
            <br>
            This stage is one of the most complex ones as it includes a variety of tasks that must be controlled - 
            from preparing the construction site to installing insulation and completing drywall as well as working on exterior.
        `;
        mwthodWorkText.innerHTML = text;
    } else if (index === 4) {
        methodWorkImg.src = "images/index-4.jpg"
        mwthodWorkTitle.innerText = "COMPLETING A PROJECT";
        let text = `
            When the project gets to its final stage, our quality control team conducts the final check of the building 
            to make sure everything has been carried out the proper way.
            <br>
            <br>
            Our employees will also make sure that all interior elements & fixtures are correctly installed during this final step. 
            After everything is completed, we invite our client to assess the final result and experience the quality performance of our project.
        `;
        mwthodWorkText.innerHTML = text;
    }
}

// Automatic SlideShows
let clientSlideIndex = 0;
autoShowSlides();

function autoShowSlides() {
  let i;
  let slides = document.getElementsByClassName("diapo");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  clientSlideIndex++;
  if (clientSlideIndex > slides.length) {clientSlideIndex = 1}
  slides[clientSlideIndex-1].style.display = "block";
  setTimeout(autoShowSlides, 4000); // Change image every 2 seconds
}

/*
let clientSlideIndex = 1;
showClientSlides(clientSlideIndex);
*/
// Thumbnail image controls
function clientCurrentSlide(n) {
    showClientSlides(clientSlideIndex = n);
}

function showClientSlides(n) {
    let i;
    let slides = document.getElementsByClassName("diapo");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {clientSlideIndex = 1}
    if (n < 1) {clientSlideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[clientSlideIndex-1].style.display = "block";
    dots[clientSlideIndex-1].className += " active";
}


// Header Menu hamburger
const hamMenu = document.querySelector(".logoMenu__menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});