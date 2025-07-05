// Función para reservar turno
function reservarTurno() {
  const nombre = prompt("Ingresa tu nombre:");
  const fecha = prompt("Ingresa la fecha del turno (YYYY-MM-DD):");
  const hora = prompt("Ingresa la hora (HH:mm):");
  if (nombre && fecha && hora) {
    alert(`Turno reservado para ${nombre} el ${fecha} a las ${hora}.`);
  } else {
    alert("Por favor completa todos los datos para reservar el turno.");
  }
}

// Función para enviar reclamos
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#reclamos form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Tu reclamo ha sido enviado. Nos comunicaremos pronto.");
      form.reset();
    });
  }
});

// Mostrar recomendación aleatoria
const recomendaciones = [
  "“Excelente atención médica. Muy agradecida.” – Carmen R.",
  "“Los doctores son profesionales y amables.” – Luis M.",
  "“Me ayudaron rápidamente y con calidad.” – Diana F."
];

function mostrarRecomendacion() {
  const indice = Math.floor(Math.random() * recomendaciones.length);
  const contenedor = document.querySelector("#recomendaciones p");
  if (contenedor) {
    contenedor.textContent = recomendaciones[indice];
  }
}

// Llamamos a la función cuando la página carga
mostrarRecomendacion();
