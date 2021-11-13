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

