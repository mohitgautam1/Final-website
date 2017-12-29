//Get all elements within the DOM with id names below
const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");
let toggle = false;
//the function will be called when the event of click has occured
menuButton.addEventListener("click", toggleMenu);


function toggleMenu() {
	if (toggle) {
		navMenu.classList.remove("show-menu"),
			toggle = false
	} else {
		navMenu.classList.add("show-menu"),
			toggle = true
	}
}


   ///Timeline script//
   (function() {
    
          'use strict';
    
          var items = document.querySelectorAll(".timeline li");
    
          function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
          }
    
          function callbackFunc() {
            for (var i = 0; i < items.length; i++) {
              if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
              }
            }
          }
    
          window.addEventListener("load", callbackFunc);
          window.addEventListener("resize", callbackFunc);
          window.addEventListener("scroll", callbackFunc);
        
    
    })();