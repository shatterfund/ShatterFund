!function(){!function(e,n,i){i=i||window;var t=!1,o=function(){t||(t=!0,requestAnimationFrame(function(){i.dispatchEvent(new CustomEvent(n)),t=!1}))};i.addEventListener(e,o)}("resize","optimizedResize")}();var spy=new ScrollSpy("#js-scrollspy",{nav:".js-scrollspy-nav .nav__link",className:"is-inview"}),swiper=new Swiper(".swiper-container",{pagination:".swiper-pagination",paginationClickable:!0,autoplay:!1,loop:!0,grabCursor:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev"}),MobileMenu=function(){function e(){o&&n()}function n(){o.addEventListener("click",i);for(var e=0;e<r.length;e++)r[e].addEventListener("click",t)}function i(){a.classList.toggle("is-open")}function t(){i()}var o=document.querySelector("#mobileMenuToggle"),r=document.querySelectorAll(".js-nav__mobile-menu__menu .nav__link"),a=document.querySelector(".nav__mobile-menu");return{init:e}}();MobileMenu.init();var GoogleMapHeight=function(){function e(){n(),window.addEventListener("optimizedResize",n)}function n(){window.innerWidth>960?t.style.height=parseInt(i.clientHeight)+"px":t.style.height="500px"}var i=document.querySelector(".js-google-map__height"),t=document.querySelector(".js-google-map__iframe");return{init:e}}();GoogleMapHeight.init();