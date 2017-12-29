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
    ///google maps api///
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCAULR37vYpaAvEkWPEKG9tb-LpTkGgX8g&callback=initMap">
    function initMap() {
      var uluru = {lat: -25.363, lng: 131.044};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }