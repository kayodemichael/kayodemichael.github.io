window.addEventListener('DOMContentLoaded', start)
function start() {
    console.log('dom fully loaded')
    var hamburger = document.querySelector('.hamburger');
    var navMenu = document.querySelector(".nav-menu");
    console.log(hamburger)
    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        
        
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    const navLinks = document.querySelectorAll(".nav-link");
    console.log(navLinks)
    navLinks.forEach(link => link.addEventListener("click", scrollToTheSection));

    function scrollToTheSection(e) {
        console.log(e.target.textContent)
        var idToScrollTo=e.target.textContent
        var idDiv=document.getElementById(idToScrollTo)
        // console.log('iddiv', idDiv.offsetTop)
        // window.focus()
        console.log(window.screenY)
        window.scrollTo({top:window.screenY+200, behavior:'smooth'})
        // console.log(name)
        // hamburger.classList.remove("active");
        // navMenu.classList.remove("active");
    }
}

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 

