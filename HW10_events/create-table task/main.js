// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

//доступеємось до тегів
let form = document.forms.table_form;
console.log(form);
let wrapper = document.getElementById("table_wrapper");
console.log(wrapper);

let table = document.createElement('table');
table.classList.add('table')
document.body.appendChild(table);
let caption = document.createElement('caption');
tr_wrapper = document.createElement('div');
table.append(caption,tr_wrapper);

form.onsubmit = function (ev){
    ev.preventDefault();
    // створюємо заголовок таблиці
    caption.innerText = 'Your Table'

// виводимо значення інпутів
    let rows = this.row.value;
    let columns = this.column.value;
    let texts = this.text.value;
    console.log(rows, columns, texts);

//створюємо таблицю
    let arr = [];
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');

        for (let i = 0; i < columns; i++) {
            let td = document.createElement('td');
            td.innerText = `${texts}`;
            tr.appendChild(td);
        }
        arr.push(tr);
    }
    tr_wrapper.replaceChildren(...arr);
    // ev.target.reset();
}

