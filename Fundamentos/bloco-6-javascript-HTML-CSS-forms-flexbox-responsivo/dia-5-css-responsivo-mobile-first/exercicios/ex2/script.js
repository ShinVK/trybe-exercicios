const btnChapter = document.querySelector("#btn_chapters");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const mdlChpt = document.querySelector(".chapters__content");

function showModal() {
  mdlChpt.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  mdlChpt.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnChapter.addEventListener("click", showModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !mdlChpt.classList.contains("hidden")) {
    closeModal();
  }
});
