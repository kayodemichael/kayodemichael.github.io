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

    
    




    // var indexVal=0
    // function slideShow() {
    //   console.log('yehsjhihiww')
    //   var x
    //   var slides=document.querySelectorAll('.Containers')
    //   console.log('eys')
    //   slides.forEach(slide => {
    //     if(indexVal>=slides.length){
    //       indexVal=0
    //       console.log('reached')
    //       console.log('slide show')
    //     }
    //     else{
    //       console.log(slide)
    //       slide.style.display='none'
    //       console.log('index', indexVal)
    //     }
    //     slides[indexVal].style.display='block'
    //     indexVal++
    //   });
    //   setTimeout(slideShow,500)
    // }

    // slideShow()
    // [1,23,4,3].forEach(element => {
    //   setInterval(slideShow,2500)
      
    // });

    // var slidePosition = 1;
    // SlideShow(slidePosition);
    
    // function slideShow(n) {
      // count=0
      // slides.forEach(slide => {
      //   ++count
      //   console.log(slide)
      //   if (slide.style.display=='block') {
      //     slide.classList+=' fade'
      //   }
      //   if (n==count) {
      //     slide.style.display = "block";
      //   }
      // });
            // var i;
      // var slides = document.querySelectorAll(".Containers");
      // // if (n > slides.length) {slidePosition = 1}
      // if (n < 1) {slidePosition = slides.length}
      // for (i = 0; i < slides.length; i++) {
      //     slides[i].style.display = "none";
      // }
      // for (i = 0; i < circles.length; i++) {
      //     circles[i].className = circles[i].className.replace(" enable", "");
      // }
      // n.classList+='fade'
      // circles[slidePosition-1].className += " enable";
    // }
    // console.log('work')
    // intervalID() 
    // var slides = document.querySelectorAll(".Containers");
    // var slideIndex=-1
    // function advSlide() {
    //   ++slideIndex
    //   if (slideIndex>=slides.length) {
    //     slideIndex=0
    //   }

    //   slideShow(slideIndex)
    //   // console.log(slides[slideIndex])
    // }

    // setInterval(advSlide, 2000)
    

    // console.log(navLinks)
    // navLinks.forEach(link => link.addEventListener("click", scrollToTheSection));

    // function scrollToTheSection(e) {
    //     console.log(e.target.textContent)
    //     var idToScrollTo=e.target.textContent
    //     var idDiv=document.getElementById(idToScrollTo)
    //     // console.log('iddiv', idDiv.offsetTop)
    //     // window.focus()
    //     console.log(window.screenY)
    //     window.scrollTo({top:window.screenY+200, behavior:'smooth'})
    //     // console.log(name)
    //     // hamburger.classList.remove("active");
    //     // navMenu.classList.remove("active");
    // }
}


