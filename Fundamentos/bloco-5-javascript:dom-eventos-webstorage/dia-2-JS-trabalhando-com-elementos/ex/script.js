// O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript , o qual deve ser inserido entre as tags <script> e </script> .
// Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:
// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ; ok
// 2. Adicione a tag main com a classe main-content como filho da tag body ; ok
// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2; ok
// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

//ex1
const newTitle = document.createElement('h1');
newTitle.className = 'title-heading';
const bodyElement = document.querySelector('body');
bodyElement.appendChild(newTitle);
const titleH = document.querySelector('.title-heading');
titleH.innerText = "Exercício 5.2 JavaScript DOM com filho da tag Body";

//ex2
const newMain = document.createElement('main');
newMain.className = 'main-content';
bodyElement.appendChild(newMain);

//ex3
const newSection = document.createElement('section');
const section1 = newSection;
const mainContent = document.querySelector('.main-content');
mainContent.appendChild(section1);
section1.className = 'center-content';

//ex4
const newP = document.createElement('p');
const p1 = newP;
const centerContent = document.querySelector('.center-content');
centerContent.appendChild(p1);
p1.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe non quam ipsam doloribus necessitatibus adipisci quae autem ut sed. Quia repudiandae deserunt dignissimos laboriosam dolores, eligendi eum aliquid id praesentium.';

