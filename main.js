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
  

// funciona para imprimir

 document.getElementById("print-button").addEventListener("click", function () {
  const formData = collectFormData();
  const resultText = formatFormData(formData);

  // Abre una ventana emergente para mostrar los resultados
  const printWindow = window.open("", "_blank", "width=600,height=400");
  printWindow.document.write("<pre>" + resultText + "</pre>");
  printWindow.document.close();
});

// Función para recopilar los valores de los campos
function collectFormData() {
  const formData = {};
  const campos = document.querySelectorAll("#quiz-form input[type='checkbox'], #activo");
  
  campos.forEach(campos => {
    if (campos.type === "checkbox" && campos.checked) {
      formData[campos.name] = campos.value;
    } else if (campos.type === "text") {
      formData[campos.name] = campos.value;
    }
  });

  return formData;
}

// Función para formatear los resultados
function formatFormData(formData) {
  let resultText = "Resultado:\n\n";
  for (const field in formData) {
    resultText += `${field}: ${formData[field]}%\n`;
  }
  return resultText;
}