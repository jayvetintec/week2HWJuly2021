let position = 0;


function previousImage(){
    // select the slider element by using getElementID and store in var slider
 const slider = document.getElementById('slider'); 
 // increment position by 400
 position += 400;
    // translate slier by the width (400 px) of the image
  slider.style.transform = `translateX(${position}px)`;
}



