class Reservation {
    constructor(tableNum, people, date, time) {
        this.tableNum = tableNum;
        this.people = people;
        this.date = date;
        this.time = time;
    }
}

class Info {
    static displayInformation() {

        let reservation = Store.getInfo();

        reservation.forEach((e) => Info.addInformation(e));

    }

    static addInformation(e) {
        let list = document.getElementById("list");
        let row = document.createElement('tr');

        row.innerHTML = `
        <td>${e.tableNum}</td>
        <td>${e.people}</td>
        <td>${e.date}</td>
        <td>${e.time}</td>
        `;

        list.appendChild(row);
    }

    static clearField() {
        document.getElementById('tableNum').value = '';
        document.getElementById('people').value = '';
        document.getElementById('date').value = '';
        document.getElementById('time').value = '';

    }

}

class Store {
    static getInfo() {
        let arr;

        if (localStorage.getItem('information') === null) {
            arr = [];
        } else {
            arr = JSON.parse(localStorage.getItem('information'));
        }

        return arr;
    }

    static addInfo(i) {
        let array = Store.getInfo();

        array.push(i);
        localStorage.setItem('information', JSON.stringify(array));
    }
}

//Display info:

document.addEventListener('DOMContentLoaded', Info.displayInformation);

//Add info:

document.getElementById("form").addEventListener('submit', function (ev) {

    ev.preventDefault();

    let table = document.getElementById('tableNum').value;
    let people = document.getElementById('people').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;

    if (table === '' || people === '' ||
        date === '' || time === '') {

        alert('Please fill in all fields');

    } else {
        let reservation = new Reservation(table, people, date, time);

        Info.addInformation(reservation);

        Store.addInfo(reservation);

        Info.clearField();

    }
});

//Disable past days 

let today = new Date().toISOString().split('T')[0];
document.getElementsByName("date")[0].setAttribute('min', today);
