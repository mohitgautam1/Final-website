var i= 0; 
var images=[];
var time=3000;

images[0]='home2.png';
images[0]='home3.png';

function changeIMG(){
    document.webdeveloper.src = images[i];
    if(i< images.lenght - 1){
        i++;
    
    } else {
         i=0;
     }
     setTimeout("changeIMG(" , time);


}
window.onload=changeIMG;


