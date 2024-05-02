"use strict";

const imgContainer = document.querySelector(".images");

// // Part 1
const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const image = document.createElement("img");
    image.src = imgPath;
    image.addEventListener("load", function () {
      imgContainer.append(image);
      resolve(image);
    });
    image.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

createImage("img/img-1.jpg")
  .then((loadedImg) => console.log("Image 1 is loaded successfully"))
  .catch((err) => console.error(err));
