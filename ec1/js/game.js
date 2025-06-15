let currentLevel = 0;
let foundItems = [];
let totalItems = 0;
const totalLevels = 3;

// intantiate all the functions with the event listenrs etc. (also generates the random level)
const randomIndex = Math.floor(Math.random() * totalLevels) + 1;
loadLevel(randomIndex);
setupPlayAgainButton();
setupAreaClickHandlers();

// loads the initial level on dom mount
function loadLevel(levelNumber) {
  currentLevel = levelNumber;
  foundItems = [];

  // hides all images + object lists and only show random selected level
  for (let i = 1; i <= totalLevels; i++) {
    document.getElementById(`game-image-${i}`).style.display = "none";
    document.getElementById(`objects-list-${i}`).style.display = "none";
  }

  document.getElementById(`game-image-${levelNumber}`).style.display = "block";
  document.getElementById(`objects-list-${levelNumber}`).style.display =
    "block";

  const objectsList = document.getElementById(`objects-list-${levelNumber}`);
  totalItems = objectsList.children.length;

  updateProgress();
}

// intantiate the click handlers
function setupAreaClickHandlers() {
  const allAreas = document.querySelectorAll("area");
  allAreas.forEach((area) => {
    area.addEventListener("click", function (e) {
      e.preventDefault();
      foundItem(this.id);
    });
  });
}

// handles when an item is found
function foundItem(itemId) {
  foundItems.push(itemId);

  const listItem = document.getElementById("list-" + itemId);
  if (listItem) {
    listItem.style.textDecoration = "line-through";
    listItem.classList.add("found");
  }
  updateProgress();

  // if game finished, show the play again button
  if (foundItems.length === totalItems) {
    document.getElementById("play-again-btn").style.display = "block";
  }
}

// handles updating the progress text
function updateProgress() {
  const progressText = document.getElementById("progress-text");
  progressText.textContent = `Found ${foundItems.length} of ${totalItems} items`;
}

// pressing play again reloads the page
function setupPlayAgainButton() {
  document
    .getElementById("play-again-btn")
    .addEventListener("click", function () {
      location.reload();
    });
}
