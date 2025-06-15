// Get references to controls
var clearButton = document.querySelector("#clear-btn");
var colorSelect = document.querySelector("#color-select");
var sizeInput = document.querySelector("#size-input");

// stop adding dots when clicking on controls
colorSelect.addEventListener("click", function (event) {
  event.stopPropagation();
});

sizeInput.addEventListener("click", function (event) {
  event.stopPropagation();
});

// clears all dots
clearButton.addEventListener("click", function (event) {
  var elements = document.getElementsByClassName("dot");

  var elementsArray = Array.from(elements);
  elementsArray.forEach(function (element) {
    element.parentNode.removeChild(element);
  });

  event.stopPropagation();
});

document.addEventListener("click", function (event) {
  var dot = document.createElement("div");
  dot.className = "dot";

  var selectedColor = colorSelect.value;
  var selectedSize = parseInt(sizeInput.value);

  // dot position is determined using the selected size
  dot.style.left = event.pageX - selectedSize / 2 + "px";
  dot.style.top = event.pageY - selectedSize / 2 + "px";

  // make dot styling consistent with user settings
  dot.style.width = selectedSize + "px";
  dot.style.height = selectedSize + "px";
  dot.style.background = selectedColor;

  // z of negative 1 so that the dots are behind the controls and don't cover them
  dot.style.zIndex = -1;

  document.body.appendChild(dot);
});
