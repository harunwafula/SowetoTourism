var slideIndex = 0; //starting index
var jumbotronImages = document.getElementsByClassName('imageSlides'); // get all images
var ctaSlides = document.getElementsByClassName('CTAslides');
var curImageSlide = jumbotronImages[0];
var curCTASlide = ctaSlides[0];
showSlides();



function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides() {
  var i;
  // set the display for all of them to none
  // for (i = 0; i < jumbotronImages.length; i++) {
  //   jumbotronImages[i].style.display = "none";
  //   jumbotronImages[i].classList.remove()
  //   ctaSlides[i].style.display = "none"
  // }
  swipeSlideToLeft();
  // ctaSlides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); //Change slide every 5 seconds
}

function swipeSlideToLeft() {
  curImageSlide.classList.remove("active");
  curCTASlide.classList.remove("active");

  slideIndex++;
  if (slideIndex > jumbotronImages.length) {slideIndex = 1}
  
 
  // curImageSlide[slideIndex-1].className += " active"
  curImageSlide = jumbotronImages[slideIndex-1];
  curCTASlide = ctaSlides[slideIndex-1];
  curImageSlide.className += " active"
  curCTASlide.className += " active"
}

function swipeSlideToRight() {
  curImageSlide.classList.remove("active");
  curCTASlide.classList.remove("active");

  slideIndex--;
  if (slideIndex < 1) {slideIndex = jumbotronImages.length}
  
 
  // curImageSlide[slideIndex-1].className += " active"
  curImageSlide = jumbotronImages[slideIndex-1];
  curCTASlide = ctaSlides[slideIndex-1];
  curImageSlide.className += " active"
  curCTASlide.className += " active"
}

let touchstartX = 0
let touchendX = 0


// Swipe to change image on jumbotron
const slider = document.getElementById('jumbotron');

function handleGesture() {
  if (touchendX < touchstartX) {
    swipeSlideToLeft();
  }
  if (touchendX > touchstartX){
    swipeSlideToRight();  
  }
}

slider.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

slider.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  handleGesture()
})


// Scroll animations
const scrollElements = document.querySelectorAll(".js-scroll");
console.log(scrollElements);
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      console.log("true")
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 

  handleScrollAnimation();
});