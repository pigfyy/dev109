// use prompt() to get number
const table =
  parseInt(prompt("Enter a number for the multiplication table:")) || 0;

var msg = "<h2>Multiplication Table</h2>";

// generate multiplication table
for (let i = 1; i <= 10; i++) {
  msg += i + " x " + table + " = " + i * table + "<br />";
}

// display the generated multiplication table on the blackboard
const el = document.getElementById("blackboard");
el.innerHTML = msg;
