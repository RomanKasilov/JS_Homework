// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
console.log("Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль");
let massive = ["a", "b", 10, true, 'name', 20, 10, 8, 10, 333];
console.log(massive[0]);
console.log(massive[1]);
console.log(massive[2]);
console.log(massive[3]);
console.log(massive[4]);
console.log(massive[5]);
console.log(massive[6]);
console.log(massive[7]);
console.log(massive[8]);
console.log(massive[9]);
console.log('==============================')

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: 'book1', pageCount: 300, genre: 'comedy'};
let book2 = {title: 'book2', pageCount: 200, genre: 'not_comedy'};
let book3 = {title: 'book3', pageCount: 400, genre: 'black_comedy'};
console.log('==============================')

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: '', pageCount: 300, genre: 'comedy', authors: [{name: 'name', age: 'age'}]
};

let book5 = {
    title: 'book5', pageCount: 200, genre: 'not_comedy', authors: [{name: 'name', age: 'age'}]
};
console.log(book4)
let book6 = {
    title: 'book6', pageCount: 400, genre: 'black_comedy', authors: [{name: 'name', age: 'age'}]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
console.log('Створити масив з 10 об\'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача')
let Users = [{name: '', uername: '', password: 123}, {name: '', uername: '', password: 125}, {
    name: '',
    uername: '',
    password: 126
}, {name: '', uername: '', password: 123}, {name: '', uername: '', password: 145}, {
    name: '',
    uername: '',
    password: 423
}, {name: '', uername: '', password: 124}, {name: '', uername: '', password: 423}, {
    name: '',
    uername: '',
    password: 143
}, {name: '', uername: '', password: 423}]
console.log(Users[0].password);
console.log(Users[1].password);
console.log(Users[2].password);
console.log(Users[3].password);
console.log(Users[4].password);
console.log(Users[5].password);
console.log(Users[6].password);
console.log(Users[7].password);
console.log(Users[8].password);
console.log(Users[9].password);

//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
console.log('Є змінна х, якій ви надаєте довільне числове значення.Якщо змінна x не дорівнює нулю, виведіть \'Вірно\', інакше виведіть \'Невірно\'.Перевірте  скрипт при a, що дорівнює 1, 0, -3')
let x;
// x=1;
// x=0;
// x=-3;
if (x === 0) {
    console.log('вірно');
} else {
    console.log('не вірно')
}
console.log('-------')

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
console.log('Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,до якої четверті години попадає число (в першу, другу, третю или четверту частину години).')
let time;
// time = 60;
if (time >= 0 && time <= 14) {
    console.log('1st quarter')
} else if (time >= 15 && time <= 29) {
    console.log('2st quarter')
} else if (time >= 30 && time <= 44) {
    console.log('3st quarter')
} else if (time >= 45 && time <= 59) {
    console.log('4st quarter')
} else {
    console.log('Введіть число від 0 до 59, будь ласка.')
}
console.log('-------')

// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
console.log('- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).\n')
let day;
// day = 1;
if (day >= 1 && day <= 10) {
    console.log("перша декада");
} else if (day >= 11 && day <= 20) {
    console.log("друга декада");
} else if (day >= 21 && day <= 31) {
    console.log("третя декада");
} else {
    console.log("Введітья якесь число від 1 до 31");
}
console.log('-------')

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
// на цей день (можна замість плану на день, назву дня англійською).
console.log('- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).')
let week;
// week = 2;
switch (week) {
    case 1:
        console.log('1.почати бігати');
        console.log('2.вставати з будильником');
        console.log('3.купити жінці шубу');
        break;
    case 2:
        console.log('1.почати бігати');
        console.log('2.перестати снідати у McDonalds');
        console.log('3.купити жінці шубу');
        break;
    case 3:
        console.log('1.почати бігати');
        console.log('2.дізнатись скільки кенгуру залишилось в Австралії');
        console.log('3.купити жінці шубу');
        break;
    case 4:
        console.log('1.почати бігати');
        console.log('видалити tik-tok');
        console.log('3.купити жінці шубу');
        break;
    case 5:
        console.log('1.почати бігати');
        console.log('відновити водний баланс після першої пробіжки');
        console.log('3.купити жінці шубу');
        break;
    default:
        console.log('введіть порядковий номер дня тижня. Від 1 до 5.')
}
console.log('-------')
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
console.log(' Користувач вводить або має два числа.Потрібно знайти та вивести максимальне число з тих двох.');
let a;
let b;
// a=-100; b=25.5;
if (a > b) {
    console.log(a + ' max')
} else if (a === b) {
    console.log('a=b')
} else if (a < b) {
    console.log(b + ' max')
} else {
    console.log('введіть два числа')
}
console.log('-------')
//
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподібні, тобто приводиться до false)
console.log('є змінна х, яка може прийняти будь-яке значення за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy')
let xxx;
// xxx = " ";
// xxx = "";
// xxx = 0;

// xxx = xxx || 'default';
// console.log(xxx);
if (!!xxx) {
    console.log(xxx);
} else {
    console.log('Default')
}
console.log('-------')
// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
console.log('з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".')
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let JS = coursesAndDurationArray[0];
if (JS['monthDuration'] > 5){   console.log(JS['title']+' Супер!')}
else {    console.log(JS['title']+" Ну такоє...")}

let Java = coursesAndDurationArray[1];
if (Java['monthDuration'] > 5){   console.log(Java['title']+' Супер!')}
else {    console.log(Java['title']+" Ну такоє...")}

let Python = coursesAndDurationArray[2];
if (Python['monthDuration'] > 5){   console.log(Python['title']+' Супер!')}
else {    console.log(Python['title']+" Ну такоє...")}

let QA = coursesAndDurationArray[3];
if (QA['monthDuration'] > 5){   console.log(QA['title']+' Супер!')}
else {    console.log(QA['title']+" Ну такоє...")}

let Full = coursesAndDurationArray[4];
if (Full['monthDuration'] > 5){   console.log(Full['title']+' Супер!')}
else {    console.log(Full['title']+" Ну такоє...")}

let Frontend = coursesAndDurationArray[5];
if (Frontend['monthDuration'] > 5){   console.log(Frontend['title']+' Супер!')}
else {    console.log(Frontend['title']+" Ну такоє...")}











