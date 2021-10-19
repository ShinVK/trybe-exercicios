// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) =>
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name));

// implemente seus testes aqui

describe('Testing fetch API', () => {
  it('Expect return True', async () => {
    const gtRep = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(gtRep).toContain(
      'sd-01-week4-5-project-todo-list',
      'sd-01-week4-5-project-meme-generator'
    );
  });
});
