var slider = document.getElementsByClassName("slider")[0]
slider.style.backgroundImage = "url('images/1.jpg')";
var left = document.getElementsByClassName("fa-chevron-left");
var right = document.getElementsByClassName("fa-chevron-right");
var recent = 1;
var interval;

function nextImage() {
    if (recent == 6) {
        recent = 0
    }
    recent++
    slider.style.backgroundImage = `url('images/${recent}.jpg')`;
}
function previousImage() {
    if (recent == 1) {
        recent = 7
    }
    recent--
    slider.style.backgroundImage = `url('images/${recent}.jpg')`;
}

function play(){
    interval=setInterval(nextImage,2000)
}

function stop(){
    clearInterval(interval)
}