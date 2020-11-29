var d = document;
var display = d.getElementById("disp");
var keypad = d.getElementById("keypad");

var keypadDigits = [[7, 8, 9], [4, 5, 6], [1, 2, 3], ["+", 0, "-"]];

for (var i = 0; i < 4; i++) {
  makeRow(i);
}

function makeRow(x){
  var digitRow = keypadDigits[x];
  var row = d.createElement("TR");

  for (var j = 0; j < 3; j++) {
    makeData(row, digitRow[j]);
  }

  keypad.appendChild(row);
 
}

function makeData(myRow, y) {
  var data = d.createElement("TD");
  var button = d.createElement("BUTTON");
  var buttonContent = d.createTextNode(y);

  button.appendChild(buttonContent);
  button.onclick = function () { return keypress(y); };
  data.appendChild(button);

  myRow.appendChild(data);
}

function keypress(input) {
  if (display.innerHTML.length >= 5) { return null; }
  var content = d.createTextNode(input);
  display.appendChild(content);
}

function clr() {
  display.innerHTML = "";
}

function equal() {
  // This is a basic project so no need to worry about eval() or sanitizing.
  display.innerHTML = eval(display.innerHTML);
}
