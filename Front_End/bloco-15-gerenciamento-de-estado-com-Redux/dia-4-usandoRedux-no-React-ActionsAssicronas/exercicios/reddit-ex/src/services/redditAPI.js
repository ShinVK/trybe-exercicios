const APIurl = 'https://www.reddit.com/r/';

const forumAPI = (forum) =>  (
  fetch(`${APIurl}${forum}.json`)
    .then((r) => r.json()
    .then((json) => (r.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export default forumAPI;