// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let areaOfSquare = (a, b) => a * b;
console.log('площа прямокутника ' + areaOfSquare(5, 10));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let areaOfCircle = (radius) => Math.PI * Math.pow(radius, 2);
console.log('площа кола ' + areaOfCircle(6));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let areaOfCylinder = (height, radius) => 2 * Math.PI * Math.pow(radius, 2) + Math.PI * radius * height;
console.log('площа циліндра ' + areaOfCylinder(10, 5));
// - створити функцію яка приймає масив та виводить кожен його елемент
let loop = (array) => {
    for (const element of array) {
        console.log(element)
    }
}
let massive = ["a", "b", 10, true, 'name', 20, 10, 8, 10, 333];
loop(massive);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createParagraph = (text) => document.write(`<p>${text}</p>`);
createParagraph('hello');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUlx3li = (text) => document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`);
createUlx3li('lorem support');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createUl = (text, liLength) => {
    document.write(`<ul>`)
    for (let i = 0; i < liLength; i++) {
        document.write(`<li>${text}</li> `)
    }
    document.write(`</ul>`);
}
createUl('driemal hoh', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayItemList = (array) => {
    document.write(`<ul>`)
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
};
let someArray = [1, 2, true, 'abc', {id: 0, name: 'user'}, [1, 2, 3]];
arrayItemList(someArray);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let usersOfArray = (arrayOfUsers) => {
    for (const user of arrayOfUsers) {
        document.write(`
        <ul>
            <li><span style="color: deepskyblue">id:</span> ${user.id}</li>
            <li><span style="color: mediumblue">name</span> ${user.name}</li>
            <li><span style="color: mediumblue">age</span> ${user.age}</li>
        </ul>`)
    }
}
let users = [
    {id: 0, name: 'vasya', age: 31, status: false},
    {id: 1, name: 'petya', age: 30, status: true},
    {id: 2, name: 'kolya', age: 29, status: true},
    {id: 3, name: 'olya', age: 28, status: false},
    {id: 4, name: 'max', age: 30, status: true},
    {id: 5, name: 'anya', age: 31, status: false},
];
usersOfArray(users);
// - створити функцію яка повертає найменьше число з масиву
let minNumber = (array) => {
    let x = array[0];
    for (const number of array) {
        if (number < x) {
            x = number;
        }
    }
    return x;
}
let numbers = [1, 3, 10, -12, 11, 4, 9, 5, -3, 14, 22, 7];
let a = minNumber(numbers);
console.log(a);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumOfArray = (array) => {
    let sum = 0;
    for (const number of array) {
        sum += number;
    }
    return sum;
}
let sumOfArray1 = sumOfArray(numbers);
console.log(sumOfArray1);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
let swap = (arr, index1, index2) => {
    let a = arr[index1]
    arr[index1] = arr[index2];
    arr[index2] = a;
    console.log(arr);
}
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const curr of currencyValues) {
        if (exchangeCurrency === curr.currency) {
            console.log(sumUAH / curr.value);
        }
    }
}
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD');