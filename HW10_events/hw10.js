console.log(document);

//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// let f1 = document.forms.form1
let f1 = document.forms[0]
f1.onsubmit = function (ev) {
    ev.preventDefault()             // зупиняємо дефолтну дію submit (перезаванаження сторінки браузера)
    // console.log(ev);
    let info = document.createElement('div');
    info.innerHTML =
        `<p>name: ${this.name.value} </p>
        <p>surname: ${this.surname.value}</p>
        <p> age: ${this.age.value}</p>`
    document.body.appendChild(info);
    ev.target.reset();      // обнуляємо поля вводу інпутів

}
// ==========================


// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let block = document.createElement('div');
let num = localStorage.getItem('num') || 0;      //стартове значення
block.innerText = num;
document.body.appendChild(block);

window.onload = function () {
    num++
    localStorage.setItem('num', num);
}
// створюємо button для очистки localStorage
let clearStorage = document.createElement('button');
clearStorage.innerText = 'clear storage';
document.body.appendChild(clearStorage);
clearStorage.onclick = function () {
    localStorage.clear();
    clearStorage.disabled = true;
}
// ==========================


// Є сторінка main.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки main.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сесію

let sessions = JSON.parse(localStorage.getItem('sessions')) || []; // створюємо масив session в LocalStorage
sessions.push({date: new Date()});                                          // додаемо дату
localStorage.setItem('sessions', JSON.stringify(sessions));             // закидаємо дату у session

// =========================


// зробити масив на 100 об'єктів та дві кнопки prev next

// ---для наповнення 100 об'єктів використовую функцію-генератор рандомної string з hw8.js
let rand_num = () =>
    Math.round((Math.random()) * 10 + (1 + Math.random()) * 10); //ну дуууже мудрьона формула рандомного числа, але +1 виключає rand_num=0

let rand_str = () => {               // ф-ія  яка генерує рандомний string
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let str = '';
    for (let i = 0; i < ((rand_num() / 2) - 4); i++) {          // не менш мудрьона формула, але для примітивного наповнення доволі весела
        str += alphabet[rand_num()]
    }
    return str;
};
// ---

// масив на 100 об'єктів
let arrayOfObjects = [];
for (let i = 0; i < 100; i++) {
    arrayOfObjects.push({id: i + 1, name: `${rand_str()}`});
}
console.log(arrayOfObjects);

//створюємо обгортку  wrapper та кнопки prev next
let wrapper = document.createElement('div');
document.body.appendChild(wrapper);
let box = document.createElement("div");
let prev_button = document.createElement('button');
let next_button = document.createElement('button');
wrapper.append(prev_button, next_button, box);

let step = 10;          // визначає кількість відображаних елементів на сторінці
let startIndex = 0;
let endIndex = startIndex + step;

// створюємо функцію вибору необхідно' кількості об'єктів на сторінку
// за допомогою arrayOfObjects.slice(startIndex, endIndex);
const showPage = () => {
    let slice = arrayOfObjects.slice(startIndex, endIndex);
    console.log(arrayOfObjects.slice(startIndex, endIndex));
    console.log(startIndex, endIndex);

    // наповнюємо сторінку  вибраними елементами
    let page = [];
    slice.forEach(value => {

        let {id: object_id, name: object_name} = value;

        let list = document.createElement('p');
        list.classList.add('list')
        list.innerText = `id: ${object_id}, name: ${object_name}`
        // механізм перезапису виводимого контенту при використанні конпок
        page.push(list);
        box.replaceChildren(...page);
    })
    // додаємо перевірки для блокування кнопок
    if (startIndex === 0) {
        prev_button.setAttribute('disabled', 'disabled');
    } else {
        prev_button.removeAttribute('disabled');
    }
    if (endIndex >= arrayOfObjects.length) {
        next_button.setAttribute('disabled', 'disabled');
    } else {
        next_button.removeAttribute('disabled');
    }

}
showPage(); // викликаємо функцію та створюємо першу пачку елементів
// при завантажені сторінки з'являються перші 10 об'єктів.

// наповнюємо кнопки

// При натисканні prev виводяться попередні 10 об'єктів
prev_button.innerText = '<--- PREV PAGE';
prev_button.addEventListener('click', function () {
    endIndex = startIndex;
    startIndex = startIndex - step;
    showPage()
});
// При натисканні next виводяться настпні 10 об'єктів
next_button.innerText = 'NEXT PAGE --->';
next_button.addEventListener('click', function () {
    startIndex = endIndex;
    endIndex = endIndex + step;
    showPage()
});

// =========================


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let task = document.createElement('div');
let text = document.createElement('h2');
text.setAttribute('id', 'text');
console.log(text.getAttribute('id'));
text.innerText = 'Lorem ipsum dolor sit.'

let btn_hide = document.createElement('button');
btn_hide.innerText = 'Hide';
btn_hide.addEventListener('click', () => text.style.display = 'none');

let btn_show = document.createElement('button');
btn_show.innerText = 'Show';
btn_show.addEventListener('click', () => text.style.display = 'block')

document.body.appendChild(task);
task.append(text, btn_hide, btn_show);

// =========================

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// створюємо форму з інпутом та баттоном
let form2 = document.createElement('form');
let age_input = document.createElement('input');
let age_button = document.createElement('button');
age_button.innerText = 'check';
age_input.setAttribute('type', 'number')
age_input.setAttribute('name', 'age')
age_input.setAttribute('placeholder', 'enter your age')

console.log(age_input);
document.body.appendChild(form2);
form2.append(age_input, age_button);

form2.onsubmit = function (ev) {
    // console.log(ev);
    ev.preventDefault()         // зупиняємо дефолтну дію submit (перезаванаження сторінки браузера)

    if (this.age.value >= 18) {
        alert('age checked!')
    } else {
        alert('age is less than 18');
    }

    ev.target.reset();
}
// =========================

//наступнє завндання знаходиться у папці create_table_task

// =========================


// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
const divUAH = document.createElement('div');
divUAH.style.border = "solid 2px  rgba(10, 225, 225, 0.81)"
divUAH.style.width= "100px"

let count = Number(localStorage.getItem('count')) || 100;
let time = new Date();
const last_reload = JSON.parse(localStorage.getItem('last_reload')) || time;
const diff = time - Date.parse(last_reload); // Date.parse переводить дату у мілісекунди
console.log(last_reload);
console.log(diff);

if (diff > 10000) {
    count += 10;
    localStorage.setItem('count', count);
}
localStorage.setItem('last_reload', JSON.stringify(time));
divUAH.innerText = `${count}UAH`
document.body.appendChild(divUAH);

// =========================
