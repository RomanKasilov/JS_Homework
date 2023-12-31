document.title = 'hw9';

// - створити блок,
let div1 = document.createElement("div");
//    - додати йому класи wrap, collapse, alpha, beta
div1.classList.add('wrap', 'collapse', 'alpha', 'beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
div1.style.backgroundColor = 'silver';
div1.style.color = 'red';
div1.style.fontSize = '24px';
// console.log(div1.classList);
let wrap = div1.classList.item(0);
// // // - додати цей блок в body.
document.body.append(div1);
// // - клонувати його повністю, та додати клон в body.
// let clone1 = JSON.parse(JSON.stringify(div1));
// console.log(div1 === clone1);
// document.body.appendChild(clone1);
let clone2 = div1.cloneNode(true);
console.log(div1 === clone2);
document.body.appendChild(clone2);
clone2.style.backgroundColor = "purple"

//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let menu = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement('ul');
let span = document.createElement("span");
document.body.appendChild(ul);
ul.classList.add('task2');
ul.appendChild(span);
span.innerText = 'Menu';
span.setAttribute('id', "menu");

for (const item of menu) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = `${item}`
}
//


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
const container = document.createElement('div');
document.body.appendChild(container);

// // version 1
coursesAndDurationArray.forEach(course => {
    let info = document.createElement('div');
    container.appendChild(info);
    info.innerText = `${course.title}: ${course.monthDuration} months`;
})

//version 2
// function getInfo(coursesArr) {
//     for (const course of coursesArr) {
//         let info = document.createElement('div');
//         container.appendChild(info);
//         for (const key in course) {
//             info.innerText+=` ${course[key]} `
//         }
//     }
// }
// getInfo(coursesAndDurationArray);

// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
function wrapper(coursesArr) {
    const box = document.createElement("div");
    document.body.appendChild(box);
    for (const course of coursesArr) {
        const div = document.createElement("div");
        div.classList.add("item");
        box.appendChild(div);
        const h1 = document.createElement("h1");
        h1.classList.add("heading");
        h1.innerText = `${course.title}:`;
        const p = document.createElement("p");
        p.classList.add("description");
        p.innerText = `${course.monthDuration} months`;
        div.append(h1, p);
    }
}

wrapper(coursesAndDurationArray);
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо надлюдською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsonsInfo = () => {
    let arr = document.createElement('div');
    arr.classList.add("container");
    document.body.appendChild(arr);
    simpsons.forEach(member => {
        let simpson = document.createElement('div');
        simpson.classList.add("member");
        arr.appendChild(simpson);
        let description = document.createElement("div"); // div з контентом name, age, info
        description.classList.add('description');
        let name = document.createElement('p');
        let age = document.createElement('p');
        let info = document.createElement('p');
        let img = document.createElement('img');
        simpson.append(description, img);                   // картка Сімпсона
        img.src = member.photo;
        img.alt = member.name;                              // фото
        name.innerText = `${member.name} ${member.surname}` //name+surname
        age.innerText = `age ${member.age}`                 // age
        info.innerText = member.info;                       //info
        description.append(name, age, info);
    })
}
simpsonsInfo()

//
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

// для перевірки роботи рекурсії додатково додав характеристику-массив mentors: та  modules  - з вкладеним массивом
//у перший об'єкт coursesArray[]

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', ['bow hunting', 'cow riding','bingo playing']],
        mentors: ['kokos', 'babos', 'sliva']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let createElement = (name) => document.createElement(name); //ф-ія для створення нових HTML-елементів
let wrapper_box = createElement('div');
wrapper_box.classList.add('flex', 'coursesArray');
document.body.appendChild(wrapper_box);     // обгортка для массиву coursesArray[]

for (const element of coursesArray) {
    const box = createElement('div');// обгортка для кожного ел-та coursesArray[] кожний курс массиву
    box.classList.add('box','flex');
    const duration = createElement('div');    // обгортка для monthDuration + hourDuration
duration.classList.add('duration', 'flex')
    const title = createElement('h2');
    title.innerText = element.title;
    const month = createElement('p');
    month.innerText = `${element.monthDuration} months!`;
    const hour = createElement('p');
    hour.innerText = `${element.hourDuration} hours!!!`;

    let modules = createElement('div'); //
    modules.classList.add('modules','flex');



    wrapper_box.appendChild(box);
    box.append(title, duration, modules);
    duration.append(month, hour);

    for (const key in element) {
        // console.log(element[key],typeof element[key])
        if (Array.isArray(element[key])) {
            let module = element[key];
            let ul = createElement('ul');
            ul.classList.add('main_ul')
            let span = createElement('span');

            span.innerText = `${key}:`;
            modules.appendChild(ul);
            ul.appendChild(span);

            // recursion() ф-ія з рекурсією для створення списків з массивів
            recursion(module, ul);
            function recursion(array, position) {
                for (let item of array) {
                    let li = createElement('li');
                    position.appendChild(li)        // аргумент position дозволяє зробити список у списку
                    console.log(item, typeof item);
                    if (Array.isArray(item)) {          // перевірка чи є массив в массиві
                        let arr = createElement('ul');
                        arr.classList.add('rest_ul')
                        li.appendChild(arr);
                        recursion(item, arr);       // рекурсія
                    } else {
                        li.innerText = item;
                        position.appendChild(li)
                    }
                }
            }



        }

    }
}

//


// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

// ------------------

//
// let xxx = ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', ['bow hunting', 'cow driving', 'bingo playing']];
// for (let x of xxx) {
//     // console.log(typeof xxx);
//     console.log(typeof x)
// }
