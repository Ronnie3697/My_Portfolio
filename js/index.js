"use strict";

const copyright = document.querySelector(".js--copyright");
const year = new Date().getFullYear();

console.log(year);

copyright.textContent = `© Copyright 2021–${year}. All rights reserved.`;
