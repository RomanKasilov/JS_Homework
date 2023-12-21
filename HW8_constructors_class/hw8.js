//Для наповнення значень характеристик user, створюємо примітивні генератори rand_num(for numbers) , rand_str(for string)
// що робить примітивну симуляцію динамічності даних. При оновленні сторінки браузера отримаємо нові об'єкти.

// ф-ія яка генерує рандомний number
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


// console.log(shoppingCart_array());

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}


// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];
for (let i = 0; i < 10; i++) {
    users.push(new User(
        `${Math.pow(rand_num(), 2) + rand_num() + rand_num()}`,    // "супер орригінальний номер id"
        `${rand_str()}`,
        `${rand_str()}`,
        `${rand_str()}@${rand_str()}`, //  email: string@string
        `${rand_num()}-${rand_num()}-${rand_num()}`)) //номер у форматі **-**-**
}
console.log(users);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let honest_id = users.filter(user => user.id % 2 === 0);
console.log(honest_id);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let usersSort_ascending = users.sort((a, b) => a.id - b.id);
console.log(usersSort_ascending);
// let usersSort_descending = users.sort((a, b) => b.id - a.id);
// let usersSort_descending = usersSort_ascending.reverse();
//     console.log(usersSort_descending);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

let shoppingCart_array = () => {  //Ф-ія генерує масив з покупками(item), з рандомною довжиною. Для заповнення характеристик user.order
    let arr = [];
    for (let i = 0; i < (rand_num() / 2); i++) {
        arr.push(`item${rand_num()}`)
    }
    return arr;
}
// try{
//     function Client(id, name, surname, email, phone, order) {
//         User.apply(this, arguments);
//         this.order = order;
//     }
// }catch (e) {
//     console.log(e);
// }
// finally {
//     console.log('Error using ' +
//         'function Client(id, name, surname, email, phone, order) {\n' +
//         '        User.apply(this, arguments);\n' +
//         '        this.order = order;\n' +
//         '    }')
// }
class Client extends User {

    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];
for (let i = 0; i < 10; i++) {
    clients.push(new Client(
        users[i].id,
        users[i].name,
        users[i].surname,
        users[i].email,
        users[i].phone,
        shoppingCart_array()));     // генерує масив  order
}
console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortItem = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortItem);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
console.log('-----constructor Cars-------');

function Cars(model, country, year, maxSpeed, motor) {
    this.model = model;
    this.country = country;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.motor = motor;
    this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    this.info = () => {
        let properties = JSON.parse(JSON.stringify(this));  // за допомогою JSON відрізаємо ф-ії конструктора
        for (const key in properties) {         // використовуємо for in
            console.log(key, properties[key]);
        }
        console.log('------');
    }   // JSON+for in
    this.increaseMaxSpeed = (newSpeed) => this.maxSpeed = newSpeed;
    this.changeYear = (newValue) => this.year = newValue;
    this.addDriver = (driver) => this.driver = driver;


}

let car1 = new Cars('Alpha Romeo', 'Italy', 1987, 210, 5);
// console.log(car1);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// car1.drive();

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
car1.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// console.log(car1.increaseMaxSpeed(500));

// -- changeYear (newValue) - змінює рік випуску на значення newValue
// console.log(car1.changeYear(1999));

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

let card1 = car1.addDriver({name: 'kokos', age: 1990, wife:{name: 'sliva', age: 1992}});
car1.info.apply(card1);

console.log('------------');
//
// - (Те саме, тільки через клас)
console.log('-----class Car-------');

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car {
    constructor(model, country, year, maxSpeed, motor) {
        this.model = model;
        this.country = country;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.motor = motor;
    }

    drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    // info = () => {
    //     for (const key in this.constructor) {
    //         console.log(key, this.constructor[key]);
    //         // let {model,country,year,maxSpeed,motor} = this;
    //         // console.log(this.constructor);
    //     }
    // }
    info = () => {
        let properties = JSON.parse(JSON.stringify(this));  // за допомогою JSON відрізаємо ф-ії конструктора
        for (const key in properties) {         // використовуємо for in
            console.log(key, properties[key]);
        }
        console.log('------');
    }   // JSON+for in
    increaseMaxSpeed = (newSpeed) => this.maxSpeed = newSpeed;
    changeYear = (newValue) => this.year = newValue;
    addDriver = (driver) => this.driver = driver;
}   // JSON+for in
let car2 = new Car('Mustang', 'USA', 1988, 260, 5);
// console.log(car2);
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// car2.drive();
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
car2.info();
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// console.log(car2.increaseMaxSpeed(300));
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// console.log(car2.changeYear(1998));
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
let card2 = car2.addDriver({name: 'kokos', age: 1990, wife:{name: 'sliva', age: 1992}});
// car1.info.apply(card1);
car2.info();
// car2.info();
console.log('------------');
//

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок
class Cinderella {
    constructor(name, age, feetSize) {
        this.name = name;
        this.age = age;
        this.feetSize = feetSize;
    }
}

let cinderellas = []; // массив з 10 п..люшек
for (let i = 0; i < 10; i++) {
    cinderellas.push(new Cinderella(
        `Cinderella`,
        10 + rand_num(),
        20 + rand_num())
    )
}
console.log(cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prinz extends Cinderella {     // створюємо клас для Принців
    constructor(name, age, lookingForSize) {
        super(name, age);
        this.lookingForSize = lookingForSize;
    }
}

let prinz1 = new Prinz('Lancelott', 22, 39);      //створюємо Принца
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let findCinderella = (cinderellas_array, prinz) => {
    let arr = [];
    for (const cinderella of cinderellas_array) {

        if (cinderella.age >= 18) {
            // Перевірка чи є нашій п...люшці 18 років.
            if (cinderella.feetSize === prinz.lookingForSize) {
                arr.push(cinderella);
            }
        }
    }

    if (arr.length>0){
        return arr;
    }
    else {
        console.log('Prinz, Sorry, but No matches now...Try again')//  якщо нема совпадань за розміром (arr undefined)
    }
}
console.log(findCinderella(cinderellas, prinz1)); // може видавати undefined якщо нема співпадінь

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let prinz1NeedsCinderella = cinderellas.find(cinderella => cinderella.feetSize === prinz1.lookingForSize);
console.log(prinz1NeedsCinderella);