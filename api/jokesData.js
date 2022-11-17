const getJokes = () => new Promise((resolve, reject) => {
  fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getJokes();
