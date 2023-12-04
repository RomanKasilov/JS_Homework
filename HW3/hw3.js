// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>lorem</div>');
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0, n = 1; i < 10; i++, n++) {
    document.write(`<div>Lorem index=${n}</div>`)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let a = 0;
while (a < 20) {
    document.write('<h1>Lorem ipsum dolor.</h1>')
    a++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let b = 0;
c = 1;
while (b < 20) {
    document.write(`<h1>Lorem ipsum. index=${c}</h1>`)
    b++;
    c++
}

//  Використовуючи данні з масиву, побудувати список з даними з масивe

let skills = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>')
for (const skill of skills) {
    document.write(`<li>${skill}</li>`)
}
document.write('</ul>')

//Використовуючи данні з масиву побудувати структуру по шаблону

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let product of products) {
    document.write(` 
    <div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="image" class="product-image">
    </div>`)
}
// за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
]
let trueUsers = [];
let falseUsers = [];
let over30 = [];
for (const user of users) {
    if (user.status) {
        trueUsers[trueUsers.length] = user.name
    } else {
        falseUsers[falseUsers.length] = user.name
    }
    if (user.age > 30) {
        over30[over30.length] = user.name
    }
}
document.write(`<p>Real True Users: ${trueUsers}</p>`)
document.write(`<p>Real False Users: ${falseUsers}</p>`)
document.write(`<p>All over 30 ${over30}</p>`)









