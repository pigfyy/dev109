let slideIndex = 1;
let autoSlideInterval;
let timerInterval;
let timeLeft = 4;

showSlide(slideIndex);
startAutoSlide();
addButtonEventListeners();

// display a slide of n index
function showSlide(n) {
  let slides = document.getElementsByClassName("slide");

  // if n is out of bounds (for example if user clicks next when on last slide) reset to first slide
  if (n > slides.length) {
    slideIndex = 1;
  }

  // same but for the opposite side
  if (n < 1) {
    slideIndex = slides.length;
  }

  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // show the current slide
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }
}

// start auto slide
function startAutoSlide() {
  // resets
  clearInterval(autoSlideInterval);
  clearInterval(timerInterval);

  timeLeft = 4;
  updateTimerDisplay();

  // every 1000ms decrease time left by 1s until reset to 4s and show next slide
  timerInterval = setInterval(function () {
    timeLeft--;

    if (timeLeft <= 0) {
      showSlide((slideIndex += 1));
      timeLeft = 4;
    }

    updateTimerDisplay();
  }, 1000);
}

// updates the timer display to time left (basically always 4s)
function updateTimerDisplay() {
  const timerElement = document.getElementById("timer-text");
  if (timerElement) {
    timerElement.textContent = timeLeft;
  }
}

// adds listeners so that hte prev and next buttons work
// if nav buttons are clicked, startAutoSlide() is triggered to force reset the timer
function addButtonEventListeners() {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  if (prevButton) {
    prevButton.addEventListener("click", function () {
      showSlide((slideIndex -= 1));
      startAutoSlide();
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", function () {
      showSlide((slideIndex += 1));
      startAutoSlide();
    });
  }
}
