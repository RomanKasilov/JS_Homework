let url = new URL('https://jsonplaceholder.typicode.com/users');
console.log(url);

fetch(url)
    .then(value => value.json())
    .then(value => console.log(value));
