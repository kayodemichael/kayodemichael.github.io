window.addEventListener('DOMContentLoaded', start)
function start() {

      var hasScrollPass=false
      var navbar=document.querySelector('.navbar')
      var sliderHeight=document.querySelector('.img-slider').offsetHeight
      //Navbar slide
      window.onscroll=()=>{
        onScrollNav(navbar,sliderHeight, hasScrollPass)
      }
    activeLink()
}

function onScrollNav(navbar,sliderHeight, hasScrollPass){
    if(window.scrollY>(navbar.offsetHeight+sliderHeight)){
        if (!hasScrollPass){
            hasScrollPass=true
            navbar.style.animation='drop 1.2s ease-in'
        }
    }
    else{
      hasScrollPass=false
      navbar.style.animation='none'
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