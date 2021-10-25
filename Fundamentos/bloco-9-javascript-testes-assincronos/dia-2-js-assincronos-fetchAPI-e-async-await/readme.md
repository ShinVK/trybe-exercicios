<img src="https://user-images.githubusercontent.com/87394535/129942939-007fc304-2ac0-431d-b018-685951e5750f.png" alt="drawing" width="300"/>

## 📚 Aula 9.2 - JavaScript Assíncrono e API's

## Bloco 9 - JavaScript e Testes Assíncronos

#### 🗓️ Segunda-Feira, 16 de outubro de 2021

### 📖 Aula 45

### 📓 Exercícios

#### Exercícios Antes da Aula ao Vivo

1. Foram questões teóricas relacionadas à Fetch API e promisse;

#### Exercícios depois da Aula ao Vivo

1. - Fetch: criar um site simples gerador de piadas ruins!
     1.1. - Fazer uma requisição via browser.
     1.2. - Requisição via terminal.
     1.3. - Requisição via terminal ustilizando Accept: text/plain.
     1.4. - Requisição via terminal, formato: JSON (application/json)
     1.5. - Fazer requisição no JS, via Fetch, como especificação method: GET e headers: application/json
     1.6. - Testar o response da promisse com then, utilizando console log
     1.7. - Converter o conteúdo do body da Response que retorna outra promisse. Método: json();
     1.8. - Faça a piada aparecer no DOM da página.

2. - Exercícios para coletar as principais CryptoMoedas Atualmente
     2.1. - Função para pegar o array com as moedas
     2.2. - Criar um arquivo HTML deve conter uma tag para listar as cryptoMoedas.
     2.3. - Formato: Nome da moeda (símbolo da moeda): valor em dólares . Exemplo: Bitcoin (BTC): 46785.06 .
     2.4. - HOF(filter) para as 10 primeiras.

#### Recapitulando a execução do exercício 2

Colete a Url da API, armazena ela em uma variável para facilitar a utilização. const apiCoins = 'https//api.....';
Utiliza-se o async para mostrar que a função é assíncrona, ou seja, rodada em segundo plano. Junto com o async utilizamos o await. Await(esperar) faz com que as função **espere** uma resposta (_promise_) para continuar a execução.

#### Em que local utilizamos o **async** e o **await**?

- Async - utilizamos antes de iniciar a função geral que vai ter as promisses e o fetch, ela vai antes dos parâmetros.

## 1ª Maneira

```
ex: const formatAndPost = async () => {
const coins = await cryptoCoin();
const coinsList = document.getElementById('top5crypto');


- Await - antes do fetch e da cadeia de promisses (se tiver).

const result = await fetch(url)
.then((response) => response.json())
.then((data) => console.log(data.value))
.catch((error) => console.log(`Algo deu errado :( \n${error}`));


A maneira demonstrada é vinculando o catch com await async e then();
1. Async - no escopo geral da função, antes do parâmetro;
2. Await- antes do fetch(url)
3. Catch - no final da cadeia de promisses, se tiver algum erro retornar o erro.

```

## 2ª Maneira

A segunda maneira é utilizando o try e catch
const fetch = require('node-fetch');

```
const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();
```

#### Voltando ao exercício 2

Após isso fazemos o primeiro promisse - response.json - coleta o arquivo em formato json da api.
Coletamos a data.data - retorna array com as 100 principais crypto moedas.
Como temos uma array, conseguimos utilizar os métodos HOF aprendidos no último bloco.
Em uma nova função, utilizando o retorno obtido e armazenado na função anterior:
A princípio fizemos um forEach, e depois incrementamos o filter para filtrar as top 10 moedas.
Lembrando que o forEach não retorna nada, nesse caso utilizamos ele para fazer com que cada item da array criasse um novo elemento (li), depois colocamos o texto do array no formato esperado em cada array, e adicionamos ele ao elemento pai (tag) no html com appendChild.

Na primeira parte, a parte da coleta, armazenamos a array em uma constante, e colocamos ela para retornar na primeira função. Para que na segunda função possamos utilizar ela com os HOF's aprendidos.

### BONUS

https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/

- Converter o valor de Dólar para Real.
- Primeiro foi necessário pegar o valor em dólar, em seguida converter para real.
- Colocamos o valor pego em uma constante e retornamos ele na função.
- Em seguida colocamos a função junto com o **await** em uma constante

```
const dolarToReal = await fetchDolarReal();
```

Após isso o valor retornado dessa constante pegamos o brl(real brasileiro) => dolarToReal.brl

- Depois foi só multiplicar o dólar por esse valor
