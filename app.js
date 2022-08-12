// const slides = document.querySelectorAll(".slide");

// slides.forEach(slide => {
//     slide.addEventListener("click", () => {
//         slides.forEach(slide => slide.classList.remove("active"));
//         slide.classList.add("active");
//     });
// });

const sliderFunction = (activeSlide = 2) => {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.classList.remove("active"));
  slides[activeSlide].classList.add('active');

  slides.forEach(slide => {
    slide.addEventListener("click", () => {
      slides.forEach(slide => slide.classList.remove("active"));
      slide.classList.add("active");
    });
  });
};

const cycleSlides = (slidesNumber) => {
  for (let i = 0; i < slidesNumber; ++i) {
        sliderFunction(i);
        //if (i === slidesNumber - 1) i = 0;
  }
} 

//sliderFunction();
const slidesNumber = 5;
cycleSlides(slidesNumber);

