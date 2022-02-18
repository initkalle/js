"use strict";
var imageCounter = 1;
showDiv(imageCounter);
function changeImage(m) {
showDiv(imageCounter = imageCounter + m);
}
function showDiv(n) {
    var i;
    var imageArray = document.getElementsByClassName("myslides");
    if (n > imageArray.length) {
    imageCounter = 1;
    }
    if (n < 1) {
    imageCounter = imageArray.length;
    }
    for (i = 0; i < imageArray.length; i++) {
    imageArray[i].style.display = "none";
    }
    imageArray[imageCounter - 1].style.display = "block";
}
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}