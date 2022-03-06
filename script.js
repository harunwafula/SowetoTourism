var slideIndex = 0; //starting index
var jumbotronImages = document.getElementsByClassName('imageSlides'); // get all images
var ctaSlides = document.getElementsByClassName('CTAslides');
var curImageSlide = jumbotronImages[0];
var curCTASlide = ctaSlides[0];
console.log(jumbotronImages)
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
  curImageSlide.classList.remove("active");
  curCTASlide.classList.remove("active");

  slideIndex++;
  if (slideIndex > jumbotronImages.length) {slideIndex = 1}
  
 
  // curImageSlide[slideIndex-1].className += " active"
  curImageSlide = jumbotronImages[slideIndex-1];
  curCTASlide = ctaSlides[slideIndex-1];
  curImageSlide.className += " active"
  curCTASlide.className += " active"
  // ctaSlides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); //Change slide every 5 seconds
}