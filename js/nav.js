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