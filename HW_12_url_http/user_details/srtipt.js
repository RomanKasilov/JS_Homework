console.log('hello');
let url = new URL(location.href);
console.log(location.href);
let wrapper = document.getElementsByClassName('wrapper')[0];

let user = JSON.parse(url.searchParams.get('user'));
console.log(user);
//використовуємо функцію з  рекурсєію
function getInfo(object,father,tag) {
    // object: об'єкт ітерації,
    // father: вибір батьківського елементу для appendChild,
    // tag: назва тегу для виводу інфо. (ul,li)
    for (let key in object) {
        // console.log(key);
        // console.log(typeof object[key] !== 'object');
        if (typeof object[key] !== 'object'){
            let place = document.createElement(tag);
            father.appendChild(place);
            place.innerText = `${key}: ${object[key]}`
        }else {
            let ul = document.createElement("ul");
            father.appendChild(ul);
            ul.innerText = `${key}`

            getInfo(object[key],ul, 'li');
        }
    }
}
getInfo(user,wrapper,'ul');
