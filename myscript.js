// Hamburger Responsive Menu bar: https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci

function changeLocation(){
    window.location = "https://i6.cims.nyu.edu/~ata386/finalProject/about.html";    // 
}

var i = 0;
var txt = "Hi, I'm Ariana";
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("heading").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("MyLogo").src = "images/logo_white.png";
 } 

 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}