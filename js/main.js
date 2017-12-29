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

function checkForm() {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    comment = document.getElementById("comment").value;
    
    if (name == "")
    {
    hideAllErrors();
    document.getElementById("nameError").style.display = "inline";
    document.getElementById("name").select();
    document.getElementById("name").focus();
    return false;
    }
    else if (email == "")
    {
    hideAllErrors();
    document.getElementById("emailError").style.display = "inline";
    document.getElementById("email").select();
    document.getElementById("email").focus();
    return false;
    }
    else if (comment == "")
    {
    hideAllErrors();
    document.getElementById("commentError").style.display = "inline";
    document.getElementById("comment").select();
    document.getElementById("comment").focus();
    return false;
    }
    if (!checkEmail(email))
    {
    alert('Email address is invalid');
    return false;
    }
    return true;
   }
    
   function hideAllErrors() {
    document.getElementById("nameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("commentError").style.display = "none";
   }
    
   function checkEmail(inputvalue) {
    var pattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    return pattern.test(inputvalue);
   }

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