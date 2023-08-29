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
  


 // Función para imprimir los resultados
 document.getElementById("print-button").addEventListener("click", function () {
  const formData = collectFormData();
  const resultText = formatFormData(formData);

  // Obtén el contenido del elemento con id "result"
  const resultContent = document.getElementById("result").textContent;

  // Abre una ventana emergente para mostrar los resultados y el contenido de "result"
  const printWindow = window.open("", "_blank", "width=600,height=400");
  printWindow.document.write("<pre>" + resultText + "\n\n" + resultContent + "</pre>");
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

// fecha y hora
function mostrarFechaHora() {
  const fechaHoraElement = document.getElementById("fecha");

  const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
      timeZoneName: "short"
  };

  setInterval(() => {
      const fechaHoraActual = new Date();
      const fechaHoraTexto = fechaHoraActual.toLocaleString("es-ES", options);
      fechaHoraElement.textContent = fechaHoraTexto;
  }, 1000); // Actualizar cada segundo (1000 ms)
}

mostrarFechaHora(); // Llamar a la función para iniciarla
