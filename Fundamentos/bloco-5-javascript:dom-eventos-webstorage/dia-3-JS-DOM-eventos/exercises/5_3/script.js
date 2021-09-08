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
