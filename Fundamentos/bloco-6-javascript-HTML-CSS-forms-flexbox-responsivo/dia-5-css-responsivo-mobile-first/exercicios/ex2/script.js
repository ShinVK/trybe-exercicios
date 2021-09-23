const btnChapter = document.querySelector("#btn_chapters");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const mdlChpt = document.querySelector(".chapters__content");
const btnShowInf = document.querySelector("#btnShowInfo");

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

function showInfUl(e) {
  const eTar = e.target;
  const infoText = document.querySelector(".info_ul");
  if (eTar.classList.contains("fa-angle-double-down")) {
    infoText.innerHTML =
      "<ul> <li>Title: Alice's Adventures in Wonderland</li><li>Author: Lewis Carroll</li> <li>Release Date: June 25, 2008 [EBook #11]</li> <li>Last Updated: July 14, 2014</li> <li>Language: English</li> </ul>";
    btnShowInf.classList.remove("fa-angle-double-down");
    btnShowInf.classList.add("fa-angle-double-up");
  } else if (eTar.classList.contains("fa-angle-double-up")) {
    infoText.innerText = "";
    btnShowInf.classList.remove("fa-angle-double-up");
    btnShowInf.classList.add("fa-angle-double-down");
  }
}

btnShowInf.addEventListener("click", showInfUl);

/* <ul>
<li>Title: Alice's Adventures in Wonderland</li>
<li>Author: Lewis Carroll</li>
<li>Release Date: June 25, 2008 [EBook #11]</li>
<li>Last Updated: July 14, 2014</li>
<li>Language: English</li>
</ul> */
