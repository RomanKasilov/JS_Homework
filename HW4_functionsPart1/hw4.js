// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sSquare(a, b) {
    return a * b;
}

console.log('площа прямокутника ' + sSquare(5, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function sCircle(radius) {
    return Math.PI * radius * radius;
}

console.log('площа кола ' + sCircle(6));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sCylinder(height, radius) {
    return 2 * Math.PI * radius * radius + Math.PI * radius * height;
}

console.log('площа циліндра ' + sCylinder(10, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
function arrItems(array) {
    for (let item of array) {
        console.log(item);
    }
}

let massive = ["a", "b", 10, true, 'name', 20, 10, 8, 10, 333];
arrItems(massive);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text) {
    return `<p>${text}</p>`;
}

document.write(paragraph(`fasfkklasjd`));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function uList(text) {
    document.write(`<ul> 
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
                 </ul>`)
}

uList('Lorem ipsum dolor sit amet.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulList_length(text, length) {
    document.write(`<ul>`)
    for (let i = 0; i < length; i++) {
        document.write(`<li>${text}</li> `)
    }
    document.write(`</ul>`)
}

ulList_length('Lorem ipsum dolor.', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrayItemList() {
        document.write(`<ul>`)
    for (const item of arguments) {

            document.write(`<li>${item}</li> `)
        }
        document.write(`</ul>`)
}

arrayItemList(1, 2, true, 'abc', {id: 0, name: 'user'}, [1, 2, 3]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function showUsersOfArray(array) {
    for (let arr of array) {
        document.write(`<div>id: ${arr.id} name ${arr.name} age ${arr.age}</div>`);
    }
}

// - створити функцію яка повертає найменьше число з масиву
function minNumber() {
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        const argument = arguments[i];

        if (min > argument) {
            min = argument;
        }

    }
    return min;
}

console.log('min number: ' + minNumber(1, 3, 10, -12, 11, 4, 9, 5, -3, 14, 22, 7));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let result = 0;
    for (let index of arr) {
        result += index;
    }
    return result;
}

let arrayOfNumbers = [1, 3, 10, 12, 11, 4, 9, 5, 3, 14, 22, 7]
console.log('sum=' + sum(arrayOfNumbers));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    let a = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = a;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currency of currencyValues){
        if (currency.currency===exchangeCurrency){
            return sumUAH/currency.value;
        }
    }
}

console.log( exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
