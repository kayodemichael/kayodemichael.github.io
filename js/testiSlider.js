window.addEventListener('DOMContentLoaded', start)
function start() {
    var counter=1
    var testiFirstDiv=document.querySelector('.testi-flex').querySelector('div')
    var marginLeft=0
    setInterval(() => {
        var screenSize=window.matchMedia("(max-width: 1000px)")
        screenSize.matches?(marginLeft-=100,maxCount=6):(marginLeft-=50, maxCount=5)
        counter++
        if (counter>maxCount) {
            counter=1
            marginLeft=0

            testiFirstDiv.style.marginLeft=0
        }
        else{

            testiFirstDiv.style.marginLeft=marginLeft+'%'
        }
         
    }, 10000);
      
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
