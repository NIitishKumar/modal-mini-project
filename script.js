"use strict";

const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = () => {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

const closeModal = () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (key) {
  if (key.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
