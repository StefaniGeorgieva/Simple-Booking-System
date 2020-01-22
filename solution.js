function solution() {
    let table = document.getElementById('tableNumber').value;
    let people = document.getElementById('people').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;

    let httpr = new XMLHttpRequest();
    httpr.open("POST", "submit.php", true);

    httpr.setRequestHeader('Content-Type', 'application/json');
    httpr.onreadystatechange = function () {
        if (httpr.readyState == 4 && httpr.status == 200) {
            alert('Error');
        }
    }

    httpr.send("table=" + table + "people=" + people + "date=" + date + "time=" + time);
    

    // //Може да си допуснала грешка
    // let dataString = 'table=' + table + 'people=' + people + 'date=' + date + 'time=' + time;


    // //Checking if all fields are fill

    // if (table == '' || people == '' || date == '' || time == '') {
    //     alert("Please, fill all fields");
    // } else {
    //     $.ajax({
    //         method: "POST",
    //         url: "submit.php",
    //         data: dataString,
    //         chache: false,
    //         success: function (html) {
    //             alert(html);
    //         }
    //     });
    // }

    // return false;
}


