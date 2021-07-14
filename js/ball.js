"use strict";

const ball = document.querySelector(".ball");
const ballWidth = ball.clientWidth;
const ballHeight = ball.clientHeight;
const container = document.querySelector(".container");
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;
const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");
const btnTop = document.querySelector(".btn-top");
const btnBottom = document.querySelector(".btn-bottom");
const btnPause = document.querySelector(".btn-pause");
const btnReset = document.querySelector(".btn-reset");

console.log("Beginning");

let timer;
let positionLeft = 0;
let positionTop = 0;

// STOP THE MOVEMENT
const clearInt = function () {
  clearInterval(timer);
};

// MOVING RIGHT
btnRight.addEventListener("click", function () {
  clearInt();

  timer = setInterval(moveRight, 10);

  function moveRight() {
    if (positionLeft >= containerWidth - ballWidth - 1) {
      clearInt();
      positionLeft = containerWidth - ballWidth - 1;
    }
    positionLeft += 1;
    ball.style.left = `${positionLeft}px`;
  }
});

// MOVING LEFT
btnLeft.addEventListener("click", function () {
  clearInt();

  timer = setInterval(moveLeft, 10);

  function moveLeft() {
    if (positionLeft <= 1) {
      clearInt();
      positionLeft = 1;
    }

    positionLeft -= 1;
    ball.style.left = `${positionLeft}px`;
  }
});

// MOVING TOP
btnTop.addEventListener("click", function () {
  clearInt();

  timer = setInterval(moveTop, 10);

  function moveTop() {
    if (positionTop <= 0) {
      clearInt();
      positionTop = 1;
    }

    positionTop -= 1;
    ball.style.top = `${positionTop}px`;
  }
});

// MOVING BOTTOM
btnBottom.addEventListener("click", function () {
  clearInt();

  timer = setInterval(moveBottom, 10);

  function moveBottom() {
    if (positionTop >= containerHeight - ballHeight - 1) {
      clearInt();
      positionTop = containerHeight - ballHeight - 1;
    }
    positionTop += 1;
    ball.style.top = `${positionTop}px`;
  }
});

// A STOP BUTTON
btnPause.addEventListener("click", function () {
  clearInt();
});

// A RESET BUTTON
btnReset.addEventListener("click", function () {
  clearInt();
  positionLeft = 0;
  positionTop = 0;
  ball.style.top = `${positionTop}px`;
  ball.style.left = `${positionLeft}px`;
});
