const square = document.getElementById("square");
const hauteur = document.getElementById("modifier-hauteur");
const masquer = document.getElementById("masquer");
const afficher = document.getElementById("afficher");
const reset = document.getElementById("reset");
const changeColorSquare = document.getElementById("square1");
const bodyColor = document.getElementById("body");
const sizeRange = document.getElementById("size");
const radiusRange = document.getElementById("radius");

let initialHeight = 200;
let initialWight = 200;
let initialColor = "blue";
let initialAffiche = "visible";
let initialLeft = 50;

sizeRange.addEventListener("input", function() {
  square.style.width = sizeRange.value + "px";
  square.style.height = sizeRange.value + "px";
});

radiusRange.addEventListener("input", function() {
  square.style.borderRadius = radiusRange.value + "px";
});


hauteur.addEventListener("click", function(){
    square.style.height = (initialHeight += 10) + "px";
    square.style.maxHeight = "400px";
});

masquer.addEventListener("click", function(){
    square.style.visibility = (initialAffiche = "hidden");
})

afficher.addEventListener("click", function(){
    square.style.visibility = (initialAffiche = "visible");
});

reset.addEventListener("click", function() {
    square.style.width = (initialWight = 200) + "px";
    square.style.height = (initialHeight = 200) + "px";
    square.style.backgroundColor = (initialColor = "blue");
    square.style.visibility = (initialAffiche = "visible");
    square.style.left = (initialLeft = 50) + "%";
    bodyColor.style.backgroundColor = (initialColor = "blue")
  });

bodyColor.addEventListener("change", function(){
    console.log("on me clique", bodyColor.value);
    document.body.style.backgroundColor = bodyColor.value;
});  

changeColorSquare.addEventListener("change", function(){
    square.style.backgroundColor = changeColorSquare.value;
});

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    if (initialLeft > 10) {
      square.style.left = (initialLeft -= 1) + "%";
    }
  } else if (event.code === "ArrowRight") {
    if (initialLeft < 90) {
      square.style.left = (initialLeft += 1) + "%";
    }
  }
});






















