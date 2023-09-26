const btnAbrirModal = document.getElementById("btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.getElementById("modal");

btnAbrirModal.addEventListener("click", () => {
    modal.showModal();
    console.log("Hola gente");
  });

  
btnCerrarModal.addEventListener("click", () => {
    modal.close();
    console.log("Hola gente");
  });