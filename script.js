"use strict";

const imgContainer = document.querySelector(".images");
let image;

// Part 1

const wait = function (seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    image = document.createElement("img");
    image.src = imgPath;
    image.addEventListener("load", function () {
      imgContainer.append(image);
      resolve(image);
    });
    image.addEventListener("error", function () {
      reject(new Error("rejected promise"));
    });
  });
};
createImage("img/img-1.jpg")
  .then((currentImage) => {
    currentImage = image;
    console.log("Image 1 loaded successfully");
    return wait(5);
  })
  .then(() => {
    image.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((currentImage) => {
    currentImage = image;
    console.log("Image 2 loaded successfully");
    return wait(2);
  })
  .then(() => {
    image.style.display = "none";
  })
  .catch((err) => console.error("Image not found"));
