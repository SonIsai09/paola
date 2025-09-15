onload = () => {
  document.body.classList.remove("container");
};


const audio = document.getElementById("miAudio");

// Cuando el usuario haga clic en cualquier parte
document.addEventListener("click", () => {
  audio.muted = false; // quitar mute
  audio.play();        // iniciar con sonido
  console.log("✅ Música activada");
}, { once: true }); 