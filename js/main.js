var image =  document.getElementById("img1");

function changeColor() {
if (image.getAttribute('src') == "image/projecticon.png")
 {
    image.src = "image/projecticon 2.png"; 
} else {
    image.src = "image/projecticon.png";
}}