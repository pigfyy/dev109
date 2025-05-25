// function to create rhombus, this is called in the html onclick handler
function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  pHeight = parseInt(pHeight);

  if (isNaN(pHeight) || pHeight <= 0) {
    alert("Please enter a positive number for the height");
    return;
  }

  upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  upRight(pHeight, pColorEven, pColorOdd, pSymbol);
  downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  downRight(pHeight, pColorEven, pColorOdd, pSymbol);
}

// creates upper left rhombus
function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
  let rLine = "";

  // loops through the height of the rhombus
  for (let i = 0; i < pHeight; i++) {
    rLine += "<p>";

    // creates spaces before the symbols
    for (let s = 0; s < pHeight - i - 1; s++) {
      rLine += "<span style='color:white;'>" + pSymbol + "</span>";
    }

    for (let j = 0; j <= i; j++) {
      // Is the position even or odd so we change the color
      if (!(j % 2)) {
        rLine +=
          "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      } else {
        rLine +=
          "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
      }
    }

    rLine += "</p>";
  }

  document.getElementById("upLeft").innerHTML = rLine;
}

// the rest work very similarly to the upLeft function, with only the direction of loops being different to create four seperate quadrants
function downLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
  let rLine = "";

  for (let i = pHeight; i > 0; i--) {
    rLine += "<p>";

    for (let s = 0; s < pHeight - i; s++) {
      rLine += "<span style='color:white;'>" + pSymbol + "</span>";
    }

    for (let j = 0; j < i; j++) {
      if (!(j % 2)) {
        rLine +=
          "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      } else {
        rLine +=
          "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
      }
    }

    rLine += "</p>";
  }

  document.getElementById("downLeft").innerHTML = rLine;
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
  let rLine = "";

  for (let i = 0; i < pHeight; i++) {
    rLine += "<p>";

    for (let j = 0; j <= i; j++) {
      if (!(j % 2)) {
        rLine +=
          "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      } else {
        rLine +=
          "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
      }
    }

    for (let s = 0; s < pHeight - i - 1; s++) {
      rLine += "<span style='color:white;'>" + pSymbol + "</span>";
    }

    rLine += "</p>";
  }

  document.getElementById("upRight").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
  let rLine = "";

  for (let i = pHeight; i > 0; i--) {
    rLine += "<p>";

    for (let j = 0; j < i; j++) {
      if (!(j % 2)) {
        rLine +=
          "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      } else {
        rLine +=
          "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
      }
    }

    for (let s = 0; s < pHeight - i; s++) {
      rLine += "<span style='color:white;'>" + pSymbol + "</span>";
    }

    rLine += "</p>";
  }

  document.getElementById("downRight").innerHTML = rLine;
}
