 document.addEventListener("DOMContentLoaded", function(event) {
    fadePageIn();
});

function fadePageIn(){
  let elements = document.getElementsByClassName("fadein");
  let i;
  let delay = 0;
  for (i = 0; i < elements.length; i++) {
    let element = elements[i];
    setTimeout(function() { 
      fadeInObject(element);
    }, delay);
    delay += 350;
  }
}

function fadeInObject(element){
  element.style.transform = "translateY(0)";
  element.style.opacity = 1;
}

function fadeOutObject(element){
  element.style.transform = "translateY(0)";
  element.style.opacity = 0;
}