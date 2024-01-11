let users_url = new URL('https://jsonplaceholder.typicode.com/users');
console.log(users_url);
let wrapper = document.getElementsByClassName('wrapper')[0];
// console.log(wrapper);
fetch(users_url)
    .then(value => value.json())
    .then(value => {
        console.log(value)
        for (let user of value) {
            console.log(user);
            let {id: userID,name: userName} = user;

            let div = document.createElement('div');
            div.classList.add('user');

            let a = document.createElement('a');
            a.innerText = `${userID} - ${userName}`;
            a.target = "_blank" // сторінка відкр. у новому вікні
            a.href = "../HW_12_url_http/user_details/user_details.html?user=" + JSON.stringify(user);
            wrapper.appendChild(div);
            div.appendChild(a);

        }
    });
