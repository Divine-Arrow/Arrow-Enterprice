/*var userInterface = function() {
    
}

var calculation = function() {
    
}

var logic = function() {
    
}*/

var socialImg = document.querySelectorAll(".social img");

var socialImages = Array.prototype.slice.call(socialImg);

socialImg = document.querySelectorAll(".social img").addEventListener("click", function() {
    body.style.backgroundColor = 'red';
})

console.log(socialImages);