const slide = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let counter = 0;

slide.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideImg = () => {
  slide.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

prevBtn.addEventListener("click", function () {
  counter--;
  if (counter < 0) {
    counter = slide.length - 1;
  }

  slideImg();
});

nextBtn.addEventListener("click", function () {
  counter++;
  if (counter >= slide.length) {
    counter = 0;
  }

  slideImg();
});
