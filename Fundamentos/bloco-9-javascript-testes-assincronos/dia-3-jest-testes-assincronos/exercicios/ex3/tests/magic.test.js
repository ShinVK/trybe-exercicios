const { getMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  // implemente sua função aqui
  favoriteCards.splice(4, favoriteCards.length - 3);
};

describe(' Testa a função getMagicCard', () => {
  afterEach(() => {
    retrievesFavoriteCards();
  });
  it('Testa se após a execução da função getMagicCard, favoriteCards passa a ter length = 5', async () => {
    expect.assertions(2);
    await getMagicCard('130553');
    expect(favoriteCards).toHaveLength(5);
    expect(favoriteCards[favoriteCards.length - 1].name).toBe(
      'Beacon of Immortality'
    );
  });

  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions();
    await getMagicCard('130553');

    // implemente seus testes aqui
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(2);
    expect(favoriteCards).toHaveLength(4);
    // implemente seus testes aqui
    const onlyNames = favoriteCards.map((card) => card.name);
    expect(onlyNames).toEqual([
      "Ancestor's Chosen",
      'Angel ofdddd Mercy',
      'Aven Cloudchaser',
      'Ballista Squad',
    ]);
  });
});
