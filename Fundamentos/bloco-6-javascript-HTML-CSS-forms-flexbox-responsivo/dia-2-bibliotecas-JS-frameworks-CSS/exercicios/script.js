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
  validation.init();
  validation.highlight();

  // Hide all errors
  validation.hideAll();

  // Check if all the input fields inside of a container are valid (body by default)
  // returns true or false

  // isValid() + highlight()
  validation.validate(); // returns true or false

  if (validation.isValid()) {
    event.preventDefault();
    render();
  }
}

function render() {
  if (document.getElementsByClassName("form-sub").length > 0) {
    document.querySelector(".form-sub").remove();
  }
  const objetoElem = mkeObj();
  const newSection = document.createElement("section");
  newSection.className = "form-sub";
  const bodysl = document.querySelector("body");
  bodysl.appendChild(newSection);
  const newDiv = document.createElement("div");
  newDiv.className = "container";
  newDiv.innerHTML = `<h1 class="title-sub display-1"> ${objetoElem["name"]} </h1>
  <p class="lead txtSub"> ${objetoElem["email"]} </p> 
  <p class="lead txtSub"> ${objetoElem["cpf"]} </p> 
  <p class="lead txtSub"> ${objetoElem["adress"]}, ${objetoElem["city"]}, ${objetoElem["state"]}, ${objetoElem["houseTy"]} </p> <br><br>
  <h1 class="display-1"> Carreira </h1>
  <h2> Currículo </h2>
  <p class="lead txtSub"> <b> Último emprego:</b>  ${objetoElem["job"]} <br>Início em:  ${objetoElem["data_inicio"]} </p>
  <p class="lead txtSub"> Descrição do último emprego: <br> ${objetoElem["job_description"]} </p>
  <p class="lead txtSub"> ${objetoElem["abstractCur"]} </p> `;
  newSection.appendChild(newDiv);
}

function mkeObj() {
  const classInput = document.getElementsByClassName("form-control");
  let objClass = {};
  for (let i = 0; i < classInput.length; i += 1) {
    let elemAtual = classInput[i];
    let nameAtual = elemAtual.getAttribute("name");
    objClass[nameAtual] = elemAtual.value;
  }
  const radiobuton = document.getElementsByName("house_type");
  for (let i = 0; i < radiobuton.length; i++) {
    if (radiobuton[i].checked) {
      objClass["houseTy"] = radiobuton[i].value;
    }
  }
  return objClass;
}

function resetAll() {
  const classInput = document.getElementsByClassName("form-control");
  for (let i = 0; i < classInput.length; i += 1) {
    let elemAtual = classInput[i];
    elemAtual.value = "";
  }
  if (document.getElementsByClassName("form-sub").length > 0) {
    document.querySelector(".form-sub").remove();
  }
}

const btnSub = document.querySelector("#subm");
btnSub.addEventListener("click", handleSubmit);

const btnRes = document.querySelector("#res");
btnRes.addEventListener("click", resetAll);
window.onload = createStateOptions();
document.getElementById("data_inicio").DatePickerX.init();
