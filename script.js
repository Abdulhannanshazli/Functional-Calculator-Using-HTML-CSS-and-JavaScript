// Select the result input
let resultInput = document.getElementById("result");

// Append character to result input
function appendCharacter(character) {
  resultInput.value += character;
}

// Clear the result input
function clearResult() {
  resultInput.value = "";
}

// Delete the last character
function deleteLast() {
  resultInput.value = resultInput.value.slice(0, -1);
}

// Calculate the result
function calculate() {
  try {
    // Evaluate the expression
    resultInput.value = eval(resultInput.value);
  } catch (error) {
    // Handle invalid input
    alert("Invalid input!");
    clearResult();
  }
}
