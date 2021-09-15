function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
//ex1

function createDaysOfTheMonth() {
  const daysCal = document.querySelector("#days");
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const currDay = dezDaysList[i];
    const listDay = document.createElement("li");
    listDay.className = "day";
    if (currDay === 24 || currDay === 31) {
      listDay.className = "holiday day";
    } else if (currDay === 4 || currDay === 11 || currDay === 18) {
      listDay.className = "friday day";
    } else if (currDay === 25) {
      listDay.className = "holiday friday day";
    }

    listDay.innerHTML = currDay;
    daysCal.appendChild(listDay);
  }
}

createDaysOfTheMonth();

function createBtnFeriados(feriados) {
  const btnCnt = document.querySelector(".buttons-container");
  const newBtn = document.createElement("button");
  newBtn.id = "btn-holiday";
  newBtn.innerText = feriados;
  btnCnt.appendChild(newBtn);
}

createBtnFeriados("Feriados");

function holidayShine() {
  const btnHoliday = document.getElementById("btn-holiday");
  const daysTotals = document.getElementsByClassName("holiday");
  const newColor = "green";
  const defaultColor = "rgb(238,238,238)";

  btnHoliday.addEventListener("click", function () {
    for (let i = 0; i < daysTotals.length; i += 1) {
      if (daysTotals[i].style.backgroundColor === newColor) {
        daysTotals[i].style.backgroundColor = defaultColor;
      } else {
        daysTotals[i].style.backgroundColor = newColor;
      }
    }
  });
}

holidayShine();

function createBtnFriday(sexta) {
  const btnCnt = document.querySelector(".buttons-container");
  const newBtn = document.createElement("button");
  newBtn.id = "btn-friday";
  newBtn.innerText = sexta;
  btnCnt.appendChild(newBtn);
}

createBtnFriday("sexta-feira");

function fridayShines() {
  const btnFriday = document.getElementById("btn-friday");
  const daysTotals = document.getElementsByClassName("friday");
  const newColor = "blue";
  const defaultColor = "rgb(238,238,238)";

  btnFriday.addEventListener("click", function () {
    for (let i = 0; i < daysTotals.length; i += 1) {
      if (daysTotals[i].style.backgroundColor === newColor) {
        daysTotals[i].style.backgroundColor = defaultColor;
      } else {
        daysTotals[i].style.backgroundColor = newColor;
      }
    }
  });
}

fridayShines();

//ex6
function zoomDay(event) {
  event.target.style.fontSize = "35px";
}
function diszoomDay(event) {
  event.target.style.fontSize = "20px";
}
const daySelect = document.getElementById("days");
daySelect.addEventListener("mouseover", zoomDay);
daySelect.addEventListener("mouseout", diszoomDay);

//ex7
function tasks(tarefa) {
  const myTasks = document.querySelector(".my-tasks");
  const newTask = document.createElement("span");
  newTask.innerText = tarefa;
  myTasks.appendChild(newTask);
}

tasks("enviar readme B5d3");

//ex8
function lgndColor(cor) {
  const myTasks = document.querySelector(".my-tasks");
  const newDiv = document.createElement("div");
  newDiv.className = "task";
  newDiv.style.backgroundColor = cor;
  myTasks.appendChild(newDiv);
}

lgndColor("red");

//ex9

function tskSlct() {
  const divColor = document.querySelector(".task");
  divColor.addEventListener("click", function () {
    if (divColor.className === "task") {
      divColor.className = "task selected";
    } else {
      divColor.className = "task";
    }
  });
}
// tskSlct();

//jeito dois ex 9 utilizando event
function tskSlct2() {
  const taskSel = document.getElementsByClassName("task selected");
  const taskNSel = document.querySelector(".task");
  taskNSel.addEventListener("click", function (event) {
    if (taskSel.length === 0) {
      event.target.className = "task selected";
    } else {
      event.target.className = "task";
    }
  });
}

tskSlct2();

//ex10
//primeiro setamos a cor que queremos

function setAColor() {
  const colortest = document.querySelector(".task").style.backgroundColor;
  const daysCalendar = document.querySelector("#days");
  daysCalendar.addEventListener("click", function (event) {
    if (event.target.style.color !== colortest) {
      event.target.style.color = colortest;
    } else {
      event.target.style.color = "rgb(119,119,119)";
    }
  });
}

setAColor();

//ex bonus
//keycode enter = 13
//para adicionar o enter como keycode, colocamos um evento como parâmetro, e declaramos uma variável como key = evento.wich || evento.keyCode
//após isso setamos para que quando teclarmos a tecla enter(keycode=13 ele execute a função) if (key == 13) expressao
//para selecionar o input box e usar no javascript utilizar do .value no final

function addComp() {
  const inputest = document.querySelector("#task-input").value;
  const newDivContainer = document.querySelector(".compro");
  if (inputest !== "") {
    const newP = document.createElement("p");
    newP.innerText = inputest;
    newDivContainer.appendChild(newP);
    document.querySelector("#task-input").value = "";
  } else {
    alert("digite um texto valido");
  }
}

const inputest2 = document.querySelector("#task-input");
inputest2.addEventListener("keyup", function (event) {
  let inputest = document.querySelector("#task-input").value;
  const newDivContainer = document.querySelector(".compro");
  let key = event.which || event.keyCode;
  if (key === 13) {
    if (inputest !== "") {
      const newP = document.createElement("p");
      newP.innerText = inputest;
      newDivContainer.appendChild(newP);
      document.querySelector("#task-input").value = "";
    } else {
      alert("digite um texto valido");
    }
  }
});

const btnadd = document.querySelector("#btn-add");
btnadd.addEventListener("click", addComp);
