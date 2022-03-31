const $ = document;

const openModalBtn = $.querySelector(".modal-btn");
const closeModalBtn = $.querySelector(".close-btn");
const modal = $.querySelector("div .modal-overlay");

openModalBtn.addEventListener("click", () => {
      if (modal.classList.contains("close-modal")) {
            modal.classList.remove("close-modal");
      }
      modal.classList.add("open-modal");
});

closeModalBtn.addEventListener("click", () => {
      if (modal.classList.contains("open-modal")) {
            modal.classList.remove("open-modal");
      }
      modal.classList.add("close-modal");
});
