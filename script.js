/*function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

document.getElementById("services_ancor").addEventListener('click', () => {
  scrollTo(document.getElementById("team_section"));
});*/

var review = document.querySelectorAll(".review");
var reviews = Array.prototype.slice.call(review);

var curr = 1;

var slider = function () {
    
    
    for(var x=0; x<3; x++) {
        document.querySelectorAll(".review")[x].style.display = "none";
        document.querySelectorAll(".circles")[x].classList.remove("active_review");
    }

    document.querySelectorAll(".review")[curr].style.display = "block";

    document.querySelectorAll(".circles")[curr].classList.add("active_review");


    curr++;

    if (curr == 3) {
        curr = 0;
    }
}

window.setInterval(slider, 4000);
