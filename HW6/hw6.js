//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
strings.forEach(string => console.log(string + " = " + string.length));
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
strings.forEach(string => console.log(string.toUpperCase()));
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
strings.forEach(string => console.log(string.toUpperCase().toLowerCase()));
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyString = ' dirty string   ';
const trimStr = dirtyString.trim();
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let stringToArray = (str) => str.split('');
let str = 'Ревуть воли як ясла повні';
let arr = stringToArray(str);
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrayOfNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let stringsArray = arrayOfNumbers.map(value => value + '');
// let stringsArray = arrayOfNumbers.map(value => String(value));

// stringsArray.forEach(value => console.log(typeof value));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
const nums = [11, 21, 3];
let sortNums = (array, direction) => {
    switch (direction) {
        case 'ascending':
            return array.sort((num1, num2) => num1 - num2);
        case 'descending':
            return array.sort((num1, num2) => num2 - num1);
        default:
            console.log("Please,choose direction: 'ascending' or 'descending'");
    }
}
// console.log(sortNums(nums, 'ascending')); // [3,11,21]
// console.log(sortNums(nums,'descending')); // [21,11,3]
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
const sortOfMonthDuration = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sortOfMonthDuration);

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filterOfMonthDuration = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filterOfMonthDuration);


//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const mapId = coursesAndDurationArray.map((keys, index) => {
    return {
        id: index + 1, //новий ключ id
        ...keys // зберігаємо значення вже існуючих ключів
    }
});
// console.log(mapId);


//  =========================
//  описати колоду карт (від 6 до туза без джокерів)

const labels = ['spade', 'diamond', 'heart', 'club'];
const cards = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
// const jokers = [{card: 'joker', color: 'red'}, {card: 'joker', color: 'black'}];//джокери

let cardsDeck = []; // наша колода
labels.forEach(value => {       //створюємо 36 карт
    for (const card of cards) {
        cardsDeck.push({
            card: card,
            label: value
        });
    }
});
// console.log(cardsDeck);
cardsDeck.map(value => {        //додаємо ключ color:
    if (value.label === 'spade' || value.label === 'club') {
        value.color = 'black'
    } else {
        value.color = 'red'
    }
});
// cardsDeck = cardsDeck.concat(jokers); // додаємо масив з джокерами jokers[]
// console.log(cardsDeck);


//  - знайти піковий туз
const filter = cardsDeck.filter;
let aceSpade = cardsDeck.filter(value => value.label === 'spade' && value.card === 'ace');
console.log(cardsDeck);
console.log(aceSpade);
//  - всі шістки
let allSix = cardsDeck.filter(value => value.card === 6);
console.log(allSix);

//  - всі червоні карти
let allRed = cardsDeck.filter(value => value.color === "red");
console.log(allRed);

//  - всі буби
let allDiamonds = cardsDeck.filter(value => value.label === 'diamond');
console.log(allDiamonds);

//  - всі трефи від 9 та більше
let someClubs = cardsDeck.filter(value => value.label.startsWith('clu')); // фільтр за допомоги startsWith
// console.log(someClubs);
someClubs.splice(0, 3);
console.log(someClubs);

//
// {
//     label: '', // 'spade', 'diamond','heart', 'clubs'
//     card: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker