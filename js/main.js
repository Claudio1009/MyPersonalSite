

window.addEventListener("scroll",function(){
    const header = document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY > 0);
});

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll",function(){
    scrollTopBtn.classList.toggle("active",window.scrollY > 500);
});

scrollTopBtn.addEventListener("click",() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
   const sections = document.querySelectorAll("section");
   const scrollY = window.pageYOffset;

   sections.forEach(current => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
    
    }
    else {
        document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
    }
   });
});



//Dark/Light code

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      themeBtn.classList.toggle("sun");

      localStorage.setItem("saved-theme", getCurrentTheme());
      localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Navigation Responsive

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav-items a");


menuBtn.addEventListener("click", () => {
   navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
 });

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

//Common reveal options

ScrollReveal({
   // reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal('.home .info h2, .sec-title-1, .sec-title-2',{delay: 500, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn1',{delay: 600, origin: 'right'});
ScrollReveal().reveal('.home .info .btn1',{delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.media i, .contact-left li',{delay: 500, origin: 'left', interval: 200});
ScrollReveal().reveal('.home-image, .about-image',{delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.about .description, .contact-right',{delay: 600, origin: 'right'});
ScrollReveal().reveal('.skills-description, .contact-left h2',{delay: 700, origin: 'left'});
ScrollReveal().reveal('.education, .portfolio .img-card',{delay: 800, origin: 'bottom', interval: 200});
ScrollReveal().reveal('footer .group',{delay: 500, origin: 'top',interval: 200});

document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true, // Activează bucla infinită
    });
});

