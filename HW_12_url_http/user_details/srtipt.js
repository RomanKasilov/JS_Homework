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
        // let key = key;
        // let value = object[key];
        let ul = document.createElement("ul");

        if (typeof object[key] !== 'object'){
            ul.innerText = `${key}: ${object[key]}`
            wrapper.appendChild(ul);
        }else {
            ul.innerText = `${key}`
            let li = document.createElement('li');

            getInfo(object[key]);
            // let ul = document.createElement('ul');
            // ul.innerText = `${key}`;
            // wrapper.appendChild(ul);

            ul.appendChild(li);

            // getInfo(object[key]);

        }
    }
}

getInfo(user,);

// let obj = {};
// console.log(typeof obj === 'object');