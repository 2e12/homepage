  document.addEventListener("DOMContentLoaded", function(event) {
    fadePageIn();
    loadCards();
  });
function loadCards(){
    let cards = document.getElementsByClassName("card");
    let i;
    for (i = 0; i < cards.length; i++) {
      let card = cards[i];
      card.style.opacity = 0;
      let dataUrl = card.getAttribute("data-json");
      if(dataUrl !== null){

        fetch(dataUrl).then(function(response) {
          return response.json();
        })

        .then(function(json) {
          card.onclick = function(){
            showReference(json);
          }

          let imageUrl = json.image;
          let image = new Image();
          image.src = imageUrl;
          image.onload = function(){
            card.style.background = "url(" + imageUrl + ")";
            fadeInObject(card);
          }

          card.getElementsByTagName("h3")[0].innerHTML = json.name;

        });

      }
    } 
}

function fadePageIn(){
  let elements = document.getElementsByClassName("fadein");
  let i;
  let delay = 0;
  for (i = 0; i < elements.length; i++) {
    let element = elements[i];
    setTimeout(function() { 
      fadeInObject(element);
    }, delay);
    delay += 200;
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

function showReference(data){
  

  document.getElementById("ref_header").style.background = "url(" + data.image + ")";
  document.getElementById("ref_title").innerHTML = data.name;
  document.getElementById("ref_slogan").innerHTML = data.slogan;
  document.getElementById("ref_description").innerHTML = data.description;
  if(data.preview !== undefined){
    document.getElementById("ref_preview").style.display = "inline-block";
    document.getElementById("ref_preview").href = data.preview;
  }else{
    document.getElementById("ref_preview").style.display = "none";
  }
  if(data.video !== undefined){
    document.getElementById("ref_video").style.display = "inline-block";
    document.getElementById("ref_video").href = data.video;
  }else{
    document.getElementById("ref_video").style.display = "none";
  }

  if(data.git !== undefined){
    document.getElementById("ref_git").style.display = "inline-block";
    document.getElementById("ref_git").href = data.git;
  }else{
    document.getElementById("ref_git").style.display = "none";
  }

  document.getElementById("ref_back").onclick = function(){
    document.getElementById("detail_view").style.display = "none";
    document.getElementById("main").style.display = "grid";
    document.documentElement.scrollTop = 0;
  };
  document.getElementById("main").style.display = "none";
  document.getElementById("detail_view").style.display = "grid";


}