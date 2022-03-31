function openModal() {
    document.getElementById('myModal').style.opacity = "1";
    document.getElementById('myModal').style.visibility = "visible";
    document.getElementById('myModal').style.transition = "all .3s"
    document.getElementById('myBtn');
}
function closeModal() {
    document.getElementById('myModal').style.opacity = "0";
    document.getElementById('myModal').style.visibility = "hidden";
    document.getElementById('myModal').style.transition = "all .3s"
}
var slideIndex = 1;
showSlides(slideIndex);
// Next/Previous controls 
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlide'); // grab each of the slides making the variable an array
    var captionText = document.getElementById("caption"); // grab the element container to put the caption text
    var blurbText = document.getElementById('blurb'); // grab the element container to put the blurb description
    var altText = document.getElementsByClassName("img"); // grab the alt text from the image 
    var blurbFull = document.getElementsByClassName('imgBlurb'); // grab the blurb/description 
    // if n (whatever parameter is passed into the function) is larger than the total amount of slides,
    // then reset the slide index to 1. This ensures that the modal controls always loop from the 
    // last image back to the first
    if (n>slides.length) {
        slideIndex = 1;
    }
    if (n<1) {
        slideIndex = slides.length;
    }
    // a for loop to iterate throught the slides array
    for(i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    captionText.innerHTML = altText[slideIndex-1].alt;
    blurbText.innerHTML = blurbFull[slideIndex-1].innerHTML;
}
// this function shows the current slide based on the value of n 
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function displayTop() {
    var mybtn = document.getElementById('top');

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        mybtn.style.display = "block";
    } else {
        mybtn.style.display = "none";
    }
}
// Theme Toggle
function toggleTheme() {
    var theme = document.getElementsByTagName('link')[2];

    if (theme.getAttribute('href') == 'style.css') {
        theme.setAttribute('href', '90s.css');
        localStorage.setItem("retromode", "on");
    } else {
        theme.setAttribute('href', 'style.css');
        localStorage.clear();
    }
}
function checkTheme() {
    var theme = document.getElementsByTagName('link')[2];
    if (localStorage.getItem("retromode") === "on") {
        theme.setAttribute('href', '90s.css');
        console.log("checkTheme works")
    } else {
        theme.setAttribute('href', 'style.css');
        console.log("checkTheme works")
    }
}