"use strict";

const copyright = document.querySelector(".js--copyright");
const year = new Date().getFullYear();

console.log(year);

copyright.innerHTML = `© Copyright 2021–${year}. <br> All rights reserved.`;
