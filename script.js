
let resultInput = document.getElementById("result");


function appendCharacter(character) {
  resultInput.value += character;
}


function clearResult() {
  resultInput.value = "";
}


function deleteLast() {
  resultInput.value = resultInput.value.slice(0, -1);
}


function calculate() {
  try {

    resultInput.value = eval(resultInput.value);
  } catch (error) {
    
    alert("Invalid input!");
    clearResult();
  }
}
