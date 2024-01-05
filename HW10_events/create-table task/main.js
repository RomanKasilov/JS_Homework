// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

//доступеємось до тегів
let form = document.forms.table_form;
console.log(form);
let wrapper = document.getElementById("table_wrapper");
console.log(wrapper);
//створюємо таблицю із заголовком
let table = document.createElement('table');
table.classList.add('table')
wrapper.appendChild(table);
let caption = document.createElement('caption');
table.appendChild(caption);


form.onsubmit = function (ev){
    ev.preventDefault();
    // задаємо назву заголовоку
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
    table.replaceChildren(caption, ...arr);//попереджаємо дублювання контенту
    // ev.target.reset();
}

document.getElementsByTagName()

