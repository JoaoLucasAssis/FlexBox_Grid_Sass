//grabbing the target HTML elements
const list = document.querySelector(".gallery-carousel__img-container__list");
const imgs = Array.from(list.children);
const imgWidth = imgs[0].getBoundingClientRect().width;

const previousButton = document.querySelector(".gallery-carousel__btn-left");
const nextButton = document.querySelector(".gallery-carousel__btn-right");

const carouselNav = document.querySelector(".gallery-carousel__nav");
const dots = Array.from(carouselNav.children);

//Arrow Function
const setImgPosition = (img, index) => {
    img.style.left = imgWidth * index + "px";
};
imgs.forEach(setImgPosition);

//hide/show arrows
const hideShowArrows = (imgs, previousButton, nextButton, targetIndex) => {
    if (targetIndex == 0) {
        previousButton.classList.add("hidden");
        nextButton.classList.remove("hidden");
    } else if (targetIndex == imgs.length - 1) {
        previousButton.classList.remove("hidden");
        nextButton.classList.add("hidden");
    } else {
        previousButton.classList.remove("hidden");
        nextButton.classList.remove("hidden");
    }
};

//move images to the left or to the right
const moveToImg = (list, currentImg, targetImg) => {
    list.style.transform = "translateX(-" + targetImg.style.left + ")";

    currentImg.classList.remove("current-img");
    targetImg.classList.add("current-img");
};

//updating the color of the dots on click
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-img");
    targetDot.classList.add("current-img");
};

//set images to move to the left
nextButton.addEventListener("click", (e) => {
    const currentImg = list.querySelector(".current-img");
    const nextImg = currentImg.nextElementSibling;
    const currentDot = carouselNav.querySelector(".current-img");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = imgs.findIndex((img) => img === nextImg);

    moveToImg(list, currentImg, nextImg);
    updateDots(currentDot, nextDot);   
    hideShowArrows(imgs, previousButton, nextButton, nextIndex);
});

//set images to move to the right
previousButton.addEventListener("click", (e) => {
    const currentImg = list.querySelector(".current-img");
    const previousImg = currentImg.previousElementSibling;
    const currentDot = carouselNav.querySelector(".current-img");
    const previousDot = currentDot.previousElementSibling;
    const previousIndex = imgs.findIndex((img) => img === previousImg);

    moveToImg(list, currentImg, previousImg);
    updateDots(currentDot, previousDot);
    hideShowArrows(imgs, previousButton, nextButton, previousIndex);
});

//switch the images using the carousel nav
carouselNav.addEventListener("click", (e) => {
    const targetDot = e.target.closest("button");

    if (!targetDot) return;

    const currentImg = list.querySelector(".current-img");
    const currentDot = carouselNav.querySelector(".current-img");
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    const targetImg = imgs[targetIndex];

    moveToImg(list, currentImg, targetImg);
    updateDots(currentDot, targetDot);
    hideShowArrows(imgs, previousButton, nextButton, targetIndex);
});