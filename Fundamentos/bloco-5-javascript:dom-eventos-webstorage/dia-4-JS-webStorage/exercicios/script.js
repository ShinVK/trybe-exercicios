function bgcolorGen() {
  const mainPage = document.querySelector(".main-page");

  const btnBG = document.querySelector("#bg-color");
  btnBG.addEventListener("click", function () {
    const bgC = mainPage.style.backgroundColor;
    if (bgC !== "rgb(223, 230, 233)") {
      mainPage.style.backgroundColor = "rgb(223, 230, 233)";
    } else {
      mainPage.style.backgroundColor = "rgb(45, 52, 54)";
    }
  });
}

function txtcolorGen() {
  const txt2 = document.querySelector(".main-content-text");
  const txt1 = document.querySelector(".title-heading-principal");
  const btnTxtColor = document.querySelector("#txt-color");
  btnTxtColor.addEventListener("click", function () {
    const txtC = txt2.style.color;
    const txtC2 = txt1.style.color;
    if (txtC !== "rgb(0, 0, 0)" && txt2 !== "rgb(99, 110, 114)") {
      txt2.style.color = "rgb(0, 0, 0)";
      txt1.style.color = "rgb(99, 110, 114)";
    } else {
      txt2.style.color = "rgb(255, 234, 167)";
      txt1.style.color = "rgb(129, 236, 236)";
    }
  });
}

function changeFsize() {
  const txt = document.querySelector("html");
  const btnFSize = document.querySelector("#font-size");
  btnFSize.addEventListener("click", function () {
    const txt2 = txt.style.fontSize;
    if (txt2 !== "62.5%") {
      txt.style.fontSize = "62.5%";
    } else {
      txt.style.fontSize = "55%";
    }
  });
}

function changeLH() {
  const txt2 = document.querySelector(".main-content-text");
  const btnline = document.querySelector("#lspacing");
  btnline.addEventListener("click", function () {
    const txt = txt2.style.lineHeight;
    if (txt !== "normal") {
      txt2.style.lineHeight = "normal";
    } else {
      txt2.style.lineHeight = "35px";
    }
  });
}

function changeFontFamily() {
  const bodyFont = document.querySelector("body");
  const btnFontFamily = document.querySelector("#font-family");
  btnFontFamily.addEventListener("click", function () {
    const txt = bodyFont.style.fontFamily;
    if (txt !== "Glory, sans-serif") {
      bodyFont.style.fontFamily = "Glory, sans-serif";
    } else {
      bodyFont.style.fontFamily = "monospace";
    }
  });
}

const saveDataBg = function () {
  if (localStorage.getItem("bgColor") === "true") {
    localStorage.setItem("bgColor", false);
  } else {
    localStorage.setItem("bgColor", true);
  }
};

const saveDataTxtColor = function () {
  if (localStorage.getItem("txtColor") === "true") {
    localStorage.setItem("txtColor", false);
  } else {
    localStorage.setItem("txtColor", true);
  }
};

const saveDataFontSize = function () {
  if (localStorage.getItem("fontsize") === "true") {
    localStorage.setItem("fontsize", false);
  } else {
    localStorage.setItem("fontsize", true);
  }
};

const saveDataLineHeigth = function () {
  if (localStorage.getItem("lineHeight") === "true") {
    localStorage.setItem("lineHeight", false);
  } else {
    localStorage.setItem("lineHeight", true);
  }
};

const saveDataFontFamily = function () {
  if (localStorage.getItem("fontFamily") === "true") {
    localStorage.setItem("fontFamily", false);
  } else {
    localStorage.setItem("fontFamily", true);
  }
};

changeFontFamily();
changeFsize();
bgcolorGen();
txtcolorGen();
changeLH();
const btnTxtColor = document.querySelector("#txt-color");
const btnBG = document.querySelector("#bg-color");
const btnFSize = document.querySelector("#font-size");
const btnline = document.querySelector("#lspacing");
const btnFontFamily = document.querySelector("#font-family");

btnFontFamily.addEventListener("mousedown", saveDataFontFamily);
btnline.addEventListener("mousedown", saveDataLineHeigth);
btnBG.addEventListener("mousedown", saveDataBg);
btnTxtColor.addEventListener("mousedown", saveDataTxtColor);
btnFSize.addEventListener("mousedown", saveDataFontSize);
window.onload = function () {
  const mainPage = document.querySelector(".main-page");
  const txt2 = document.querySelector(".main-content-text");
  const txt1 = document.querySelector(".title-heading-principal");
  const txt = document.querySelector("html");
  const bodyFont = document.querySelector("body");
  if (localStorage.getItem("bgColor") === "true") {
    mainPage.style.backgroundColor = "rgb(45, 52, 54)";
  } else {
    mainPage.style.backgroundColor = "rgb(223, 230, 233)";
  }
  if (localStorage.getItem("txtColor") === "true") {
    txt2.style.color = "rgb(255, 234, 167)";
    txt1.style.color = "rgb(129, 236, 236)";
  } else {
    txt2.style.color = "rgb(0, 0, 0)";
    txt1.style.color = "rgb(99, 110, 114)";
  }
  if (localStorage.getItem("fontsize") === "true") {
    txt.style.fontSize = "62.5%";
  } else {
    txt.style.fontSize = "55%";
  }
  if (localStorage.getItem("lineHeight") === "true") {
    txt2.style.lineHeight = "normal";
  } else {
    txt2.style.lineHeight = "35px";
  }
  if (localStorage.getItem("fontFamily") === "true") {
    bodyFont.style.fontFamily = "Glory, sans-serif";
  } else {
    bodyFont.style.fontFamily = "monospace";
  }
};
