"use strict"

// SELECCIONAMOS LOS NODOS DE NUESTRO HTML, CON JAVASCRIPT
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnClose = document.querySelector(".close-modal")
const btnOpen = document.querySelector(".show-modal")

//Funciones que tiene la logica
function openModal() {
  modal.classList.remove("hidden")
  overlay.classList.remove("hidden")
  return
}

function closeModal() {
  modal.classList.add("hidden")
  overlay.classList.add("hidden")
  return
}
//Activamos eventos de click
btnOpen.addEventListener("click", openModal)
btnClose.addEventListener("click", closeModal)

overlay.addEventListener("click", closeModal)

// CERRAR EL MODAL, PRESIONANDO LA TECLA "ESC"
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal()
  }
})