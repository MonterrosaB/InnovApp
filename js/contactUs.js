document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById("progressBar");
    const progressHandle = document.getElementById("progressHandle");
    const budgetAmount = document.getElementById("budgetAmount");
    const minBudget = 1000;
    const maxBudget = 100000;
  
    function updateProgressBar(width) {
      progressBar.style.width = width + "%";
      const budget = minBudget + (maxBudget - minBudget) * (width / 100);
      budgetAmount.textContent = "Presupuesto: $" + budget.toLocaleString();
    }
  
    function handleMouseDown(event) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  
    function handleMouseMove(event) {
      const containerWidth = progressBar.parentElement.offsetWidth;
      let newX = event.clientX - progressBar.parentElement.getBoundingClientRect().left;
      if (newX < 0) newX = 0;
      if (newX > containerWidth) newX = containerWidth;
      const progress = (newX / containerWidth) * 100;
      updateProgressBar(progress);
      progressHandle.style.left = newX - progressHandle.offsetWidth / 2 + "px";
    }
  
    function handleMouseUp() {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
  
    progressHandle.addEventListener("mousedown", handleMouseDown);
});
  

const formulario = document.getElementById('formularioContacto');
const enviarBtn = document.getElementById('enviarBtn');

formulario.addEventListener('submit', function(event)
{
    event.preventDefault();

    const nombreInput = document.getElementById('nombre')
    const nombreValor = nombreInput.value;
    const motivo = document.getElementById("motivo")
    const motivoValor = motivo.value;
    const mensaje = document.getElementById("mensaje")
    const mensajeValor = mensaje.value;
    const correo = document.getElementById("correo")
    const correoValor = correo.value;

    Swal.fire({
      icon: 'success',
      title: 'Mensaje Enviado!',
      text: `Gracias por contactarnos ${nombreValor}, Tu mensaje ha sido enviado correctamente`
    });

    formulario.reset();

});
