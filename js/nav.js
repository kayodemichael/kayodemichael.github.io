window.addEventListener('DOMContentLoaded', start)
function start() {
    console.log('dom fully loaded')
    var hamburger = document.querySelector('.hamburger');
    var navMenu = document.querySelector(".nav-menu");
    // console.log(hamburger)
    hamburger.addEventListener("click", mobileMenu);
    activeLink()
    
    function mobileMenu() {        
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }
}
function activeLink(){
  var title= document.querySelector('title').textContent.split('-')[0].trim()
  console.log(title)
  // console.log(title)
  var navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    if(title==link.textContent){
      link.classList+=' active-link'
    }
  });
}