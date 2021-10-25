<img src="https://user-images.githubusercontent.com/87394535/129942939-007fc304-2ac0-431d-b018-685951e5750f.png" alt="drawing" width="300"/>

## 📚 Aula 9.3 - Jest Testes assíncronos

## Bloco 9 - JavaScript e Testes Assíncronos

#### 🗓️ Terça-Feira, 17 de outubro de 2021

### 📖 Aula 46

### TEORIA

1. Teste de retorno de uma API.
2. Se utilizar async e await nos testes, não é obrigatório o uso dele na chamada API.
3. Lembrar-se de quando for instalar o node-fetch, instalar a versão 2. Ao instalar o 3 o require não funciona mais.
4. Cuidado com os falso Positivo, para verificar se há um falso positivo, você altera o valor do resultado esperado e verifica se o teste irá falhar.

```test('Testa se o resultado é um falso positivo, com async/await', async () => {
    const hero = await getSuperHero();
    expect(hero).toBe('V de Vingança');
  });
```

Relembrando, você coloca o async no teste, antes do parâmetro e o await antes da função chamada.

5. Para testar um erro, você pode alterar a url do arquivo. E no test verificar se o erro é retornado

```test('Testa se o retorno da requisição com url alterada, retorna o erro, com async/await', async () => {
  const error = await getSuperHero();
  expect(error).toMatch('error');
});
```

- Lembrar de fazer o teste para falso positivo, alterando o retorno error para outra palavra.

#### Conclusão da primeira parte

- Nesse ponto vimos que inviável ficar alterando tantas coisas para testar. A questão é como testar sem alterar a função.
- A solução é simular o retorno da API.
- Você pode simular uma falha ou objeto correto.

#### SETUP E TEARDOWN

- Jest possui 3 ciclos. Até o momento trabalhamos com o segundo ciclo (**testes**), além deles temos o inicial **setup** e o terceiro ciclo **tearDown**

- SETUP
  Temos o beforEach que ocorre antes de cada teste
- TEARDOWN
  Temos o afterEach que ocorre depois de cada teste.
  Eles funcionam somente no escopo (describe) escrito. Fora dele não funcionará para outros describes.

### 📓 Exercícios

#### Exercícios Antes da Aula ao Vivo

#### Exercícios depois da Aula ao Vivo

1 - O código abaixo busca, no GitHub de um usuário, de acordo com a URL, seus repositórios e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

2 - Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los e veja se compreendeu bem o funcionamento do beforeEach e do afterEach .

Em relação ao segundo exercício, temos que se o before eo afterEach não estiverem englobadas em um escopo, ele é global. Semelhante as constantes, a constante só funciona se estiver dentro do escopo, se tiver fora é global

3. MagicCard
   Foi dividido em 2 partes
   3.1 -
   I - Abra o arquivo tests/magic.test.js. Nele você encontrará a estrutura inicial dos testes ja montada. Essa estrutura no entanto está incompleta e precisa de ajustes para que a sintaxe do async/await seja aplicada de forma correta. Implemente o que falta para que a sintaxe do async/await esteja completa.

   II - Implemente um teste que verifique se o retorno da função getMagicCardSimulator é igual ao objeto expected. spoiler-alert: você pode desestruturar o objeto response e obter diretamente suas propriedades.

   III - Implemente um teste que verifique se a propriedade types é do tipo Array.

   IV - Implemente um teste que verifique se a propriedade subtypes possui length === 2.

   V - Implemente um teste que verifique se a propriedade rarity possui valor Uncommon.

   VI - Implemente um teste que verifique se a propriedade name possui valor Ancestor's Chosen.

   VII - Implemente um teste que verifique se a propriedade manaCost possui valor {5}{W}{W}.

   3.2 - - Implemente um teste que verifique que após a execução da função getMagicCard, favoriteCards passa a possuir length === 5.

   II - Implemente um teste que verifique que na última posição do array favoriteCards existe um card com o a propriedade name e valor "Beacon of Immortality".

   Para os próximos exercícios descomente o teste dentro do escopo do segundo it.

   III - Após descomentar o teste dentro do segundo it, rode os testes.

   Você vai perceber que o teste falhou. Consegue entender porque ele falha? Isso mesmo, a função getMagicCard modificou o arquivo favoriteCards no escopo do it anterior. Desta maneira, para o Jest, o array favoriteCards não possui quatro cards, mas sim, seis.

   IV - Utilizando a função afterEach crie uma lógica capaz de restaurar o array favoriteCards que faça com que o teste passe.

Bonus
Este exercício será feito na mesma branch do exercício anterior: exercise-two.
Este exercício deve ser realizado após a implementação da função afterEach.
Implemente o teste solicitado dentro do escopo do segundo it.
I - Utilizando a função map, crie um array contendo apenas a propriedade name de todos os cards presentes no deck original, ou seja, no favoriteCards. Este array deve conter quatro nomes e deve ser salvo em uma nova variável.

II - Implemente um teste que verifique que o array que você obteve com o map do exercício anterior contém a seguinte estrutura e valores:
['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad']
