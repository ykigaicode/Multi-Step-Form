
    const steps = document.querySelectorAll(".step");
    const progressBar = document.getElementById("progressBar");
    let currentStep = 0;

    function showStep(index) {
      steps.forEach((step, i) => {
        step.classList.toggle("active", i === index);
      });
      updateProgressBar(index);
    }

    function updateProgressBar(index) {
      const progress = ((index + 1) / steps.length) * 100;
      progressBar.style.width = progress + "%";
    }

    document.querySelectorAll(".next").forEach(button => {
      button.addEventListener("click", () => {
        if (currentStep < steps.length - 1) {
          currentStep++;
          showStep(currentStep);
        }
      });
    });

    document.querySelectorAll(".prev").forEach(button => {
      button.addEventListener("click", () => {
        if (currentStep > 0) {
          currentStep--;
          showStep(currentStep);
        }
      });
    });

    document.getElementById("multiStepForm").addEventListener("submit", e => {
      e.preventDefault();
      alert("¡Formulario enviado con éxito!");
    });

    // Inicializa barra al cargar
    updateProgressBar(currentStep);
