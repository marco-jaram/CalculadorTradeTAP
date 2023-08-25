document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate-button");
    const clearButton = document.getElementById("clear-button");
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    const resultElement = document.getElementById("result");
  
    calculateButton.addEventListener("click", calcular);
    clearButton.addEventListener("click", limpiar);
  
    function calcular(event) {
      event.preventDefault();
  
      let totalScore = 0;
  
      checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
          totalScore += parseInt(checkbox.value);
        }
      });
  
      resultElement.textContent = `Resultado:  ${totalScore}%`;
  
      if (totalScore < 70) {
        resultElement.style.color = "red";
      } else {
        resultElement.style.color = "green";
      }
    }
  
    function limpiar() {
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
  
      resultElement.textContent = "Resultado: ";
      resultElement.style.color = "initial";
    }
  });
  