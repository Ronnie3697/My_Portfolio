"use strict";

const copyright = document.querySelector(".js--copyright");
const year = new Date().getFullYear();

copyright.innerHTML = `© Copyright 2021–${year}. <br> All rights reserved.`;

const hamburger = document.querySelector(".hamburger");
const navUL = document.querySelector(".navUL");

hamburger.addEventListener("click", function (e) {
  navUL.classList.toggle("show");
});
