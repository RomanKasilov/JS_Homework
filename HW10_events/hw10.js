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


let rand_num = () =>            //для наповнення 100 об'єктів використовую функцію-генератор рандомної string з hw8.js
    Math.round((Math.random()) * 10 + (1 + Math.random()) * 10); //ну дуууже мудрьона формула рандомного числа, але +1 виключає rand_num=0

let rand_str = () => {               // ф-ія  яка генерує рандомний string
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let str = '';
    for (let i = 0; i < ((rand_num() / 2) - 4); i++) {          // не менш мудрьона формула, але для примітивного наповнення доволі весела
        str += alphabet[rand_num()]
    }
    return str;
};


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
wrapper.append(prev_button, next_button,box);

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
        if (startIndex===0){
            prev_button.setAttribute('disabled','disabled');
        }else {
            prev_button.removeAttribute('disabled');
        }
        if (endIndex >=arrayOfObjects.length){
            next_button.setAttribute('disabled','disabled');
        }else{
           next_button.removeAttribute('disabled');
        }

}
showPage(); // викликаємо функцію та створюємо першу пачку елементів

// наповнюємо кнопки
prev_button.innerText = '<--- PREV PAGE';
prev_button.addEventListener('click', function () {
    endIndex = startIndex;
    startIndex = startIndex-step;
    showPage()
});

next_button.innerText = 'NEXT PAGE --->';
next_button.addEventListener('click', function () {
    startIndex = endIndex;
    endIndex = endIndex+step;
    showPage()
});



// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
//
//
//

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається