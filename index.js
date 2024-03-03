document.addEventListener("DOMContentLoaded", function () {
    const resultDisplay = document.getElementById("result");
    const buttons = document.querySelectorAll("#buttons button");
    let currentInput = "";
    let previousInput = "";
    let operation = null;
  
    function clear() {
      currentInput = "";
      previousInput = "";
      operation = null;
      updateDisplay();
    }
  
    function updateDisplay() {
      resultDisplay.textContent = currentInput || "";
    }
  
    function calculate() {
      let result;
      const current = parseFloat(currentInput);
      const previous = parseFloat(previousInput);
      if (isNaN(current) || isNaN(previous)) return;
      switch (operation) {
        case "+":
          result = previous + current;
          break;
        case "-":
          result = previous - current;
          break;
        case "*":
          result = previous * current;
          break;
        case "/":
          result = previous / current;
          break;
        default:
          return;
      }
      currentInput = result.toString();
      previousInput = "";
      operation = null;
      updateDisplay();
    }
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const value = this.textContent;
        if (value === "AC") {
          clear();
        } else if (value === "=") {
          calculate();
        } else if (value === "+/-") {
          currentInput = (parseFloat(currentInput) * -1).toString();
          updateDisplay();
        } else if (value === "%") {
          currentInput = (parseFloat(currentInput) / 100).toString();
          updateDisplay();
        } else if (["+", "-", "*", "/"].includes(value)) {
          if (currentInput && previousInput) {
            calculate();
          }
          operation = value;
          previousInput = currentInput;
          currentInput = "";
          updateDisplay();
        } else {
          currentInput += value;
          updateDisplay();
        }
      });
    });
  });
  