 /*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()
        1-Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2-Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3-Crie uma função que mude a cor do quadrado vermelho para branco.
        4-Crie uma função que corrija o texto da tag <h1>.
        5-Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6-Crie uma função que exiba o conteúdo de todas as tags <p> no console.
      */
  //ex1      
 function exerc1(n, p) {
  let ex1 = document.getElementsByTagName("p");
  ex1[n].innerText = p;
  }
  txt2years = "Como estarei daqui 2 anos";
  exerc1(0, txt2years);

  //ex2
 function exerc2(n, color) {
    let ex2 = document.getElementsByClassName("main-content");
    ex2[n].style.background = color;
  } 

  exerc2(0, "rgb(76,164,109");

  //ex3
  function exerc3(n, color) {
    let ex3 = document.getElementsByClassName("center-content");
    ex3[n].style.background = color;
  }

  exerc3(0, "white");

  //ex4
  function exerc4(n, p) {
    let ex4 = document.getElementsByTagName("h1");
    ex4[n].innerText = p;
  }

  let correctStr = "Exercício 5.1 - JavaScript"
  exerc4(0, correctStr);

  //ex5
  function exerc5(s) {
    let ex5 = document.getElementsByTagName("p");
    for(let i = 0; i < ex5.length; i += 1){
      ex5[i].style.textTransform = s;
    }
  }

  exerc5("uppercase")

  