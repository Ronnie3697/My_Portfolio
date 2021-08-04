"use strict";

const copyright = document.querySelector(".js--copyright");
const year = new Date().getFullYear();

copyright.innerHTML = `© Copyright 2021–${year}. <br> All rights reserved.`;

const hamburger = document.querySelector(".hamburger");
const navUL = document.querySelector(".navUL");

hamburger.addEventListener("click", function (e) {
  navUL.classList.toggle("show");
});

const nav = document.querySelector(".main-nav");

window.addEventListener("scroll", function () {
  nav.classList.toggle("fixed", window.scrollY > 670);
});

const anchorsNav = document.querySelectorAll(".hover-nav");

anchorsNav.forEach((anchor) => {
  anchor.addEventListener("click", function () {
    navUL.classList.toggle("show");
  });
});
