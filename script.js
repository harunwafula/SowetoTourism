var slideIndex = 0; //starting index
var jumbotronImages = document.getElementsByClassName('imageSlides'); // get all images
var ctaSlides = document.getElementsByClassName('CTAslides');
console.log(jumbotronImages)
showSlides();

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides() {
  var i;

  for (i = 0; i < jumbotronImages.length; i++) {
    jumbotronImages[i].style.display = "none";
    ctaSlides[i].style.display = "none"
  }
  slideIndex++;
  if (slideIndex > jumbotronImages.length) {slideIndex = 1}
  jumbotronImages[slideIndex-1].style.display = "block";
  ctaSlides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}