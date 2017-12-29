//I took this from the lab of front end web development, it was simple and all i needed to make my nav, the style is different but there was no requirement for me to change the js
//Get all elements within the DOM with id names below
const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");
let toggle = false;
//the function will be called when the event of click has occured
menuButton.addEventListener("click", toggleMenu);

//the toggle will allow when the menuButton has the event of click, it will know the style the menu already is
//the function checks for whether the menu is open or closed with a boolean exp
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