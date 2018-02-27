var reviews = document.querySelectorAll(".review");
var circles = document.querySelectorAll(".circles");
var innerCircles = document.querySelectorAll(".inner_circle");
var review_wrapper = document.querySelector(".review_wrapper")
var curr = 1,
    access = true;

review_wrapper.addEventListener("mouseover", function () {
    access = false;
});

review_wrapper.addEventListener("mouseout", function () {
    access = true;
});

var slider = function () {
    if (access) {

        for (var x = 0; x < 3; x++) {
            reviews[x].style.display = "none";
            circles[x].classList.remove("active_review");
            innerCircles[x].classList.remove("active_inner_circle");
        }
        reviews[curr].style.display = "block";
        circles[curr].classList.add("active_review");
        innerCircles[curr].classList.add("active_inner_circle");
        curr++;
        if (curr > 2) {
            curr = 0;
            currentCircle = 0;
        }
    }
}
window.setInterval(slider, 4000);
