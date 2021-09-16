function createStateOptions() {
  let states = document.getElementById("state");
  let stateOptions = [
    "AC",
    "AL",
    "AM",
    "AP",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MG",
    "MS",
    "MT",
    "PA",
    "PB",
    "PE",
    "PI",
    "PR",
    "RJ",
    "RN",
    "RO",
    "RR",
    "RS",
    "SC",
    "SE",
    "SP",
    "TO",
  ];

  for (let index = 0; index < stateOptions.length; index += 1) {
    let createOptions = document.createElement("option");
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}

function handleSubmit(event) {
  event.preventDefault();
  render();
}

function render() {
  const newSection = document.createElement("section");
  newSection.className = "form-sub";
  const bodysl = document.querySelector("body");
  bodysl.appendChild(newSection);
  const nameInput = document.querySelector("#name_input").value;
  const formData = document.querySelector(".form-sub");
  const divTest = document.createElement("div");
  const newP = document.createElement("p");
  newP.innerHTML = `<h1> ${nameInput} </h1>`;
  formData.appendChild(divTest);
  divTest.appendChild(newP);
}

const btnSub = document.querySelector("#subm");
btnSub.addEventListener("click", handleSubmit);

window.onload = createStateOptions();
