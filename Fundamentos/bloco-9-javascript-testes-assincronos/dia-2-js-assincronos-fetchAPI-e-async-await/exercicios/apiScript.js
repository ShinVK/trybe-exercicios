// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

// para fetch necessita de dois argumentos, o primeiro é o URL do API (obrigatório) o segundo é as especificações do Objeto (opcional)
// const h2JokeContainer = document.getElementById('jokeContainer');

const fetchJoke = () => {
  const objEsp = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };
  fetch(API_URL, objEsp)
    .then((response) => response.json())
    .then(
      (data) => (document.getElementById('jokeContainer').innerText = data.joke)
    );
};

window.onload = () => fetchJoke();
// console.log(h2JokeContainer);
