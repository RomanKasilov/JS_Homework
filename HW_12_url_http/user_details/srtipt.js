console.log('hello');
let url = new URL(location.href);
console.log(location.href);
let wrapper = document.getElementsByClassName('wrapper')[0];

let user = JSON.parse(url.searchParams.get('user'));
console.log(user);
function getInfo(object) {
    for (let key in object) {
        // console.log(key);
        console.log(typeof object[key] !== 'object');

        if (typeof object[key] !== 'object'){
            let ul = document.createElement("ul");
            ul.innerText = `${key}: ${object[key]}`
            wrapper.appendChild(ul);
        }else {
            // p.innerText = `${key}: error`

            let ul = document.createElement('ul');
            ul.innerText = `${key}`;
            wrapper.appendChild(ul);
            let li = document.createElement('li');
            ul.appendChild(li);

            // getInfo(object[key]);

        }
    }
}

getInfo(user,);

// let obj = {};
// console.log(typeof obj === 'object');