// **NOTE -- Added E.C. task of clearing input field

// itemName is the text of the item that should be added to the grocery list, the input variable should be of type string
const addItem = (itemName) => {
  // Create a new element and store it in a variable.
  var newEl = document.createElement("li");

  // Create a text node and store it in a variable.
  var newText = document.createTextNode(itemName);

  // Attach the new text node to the new element.
  newEl.appendChild(newText);

  // Find the position where the new element should be added.
  var position = document.getElementsByTagName("ul")[0];

  // Insert the new element into its position.
  position.appendChild(newEl);
};

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => {
  const newItem = document.getElementById("newItem");
  let isEmpty = false;

  try {
    // if input is empty, throw error so that it can be caught, logged as an error, and finally logged again for more information in the finally block
    if (!newItem.value || newItem.value.trim() === "") {
      isEmpty = true;
      throw new Error("Entry value is null or empty");
    }
    addItem(newItem.value);

    // E.C. - clears input field by setting the value of input to an empty string
    newItem.value = "";
  } catch (e) {
    console.log(e);
  } finally {
    // only logs the message if the input was empty
    if (isEmpty) {
      console.log(
        "Error message: The entry was empty - no item added to the list"
      );
      return;
    }
  }
});
