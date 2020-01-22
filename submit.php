<?php

if(isset($_POST['table'])) {
    $table = $_POST['table'];
    $people = $_POST['people'];
    $date = $_POST['date'];
    $time = $_POST['time'];

    $connect = mysql_connect("localhost", "root", "", "booking");
    $sql = "INSERT INTO `booking`.`table_booking` (`id`, `table_num`, `num_of_people`, `date`, `time`) VALUES ('$table', '$people','$date', '$time');";

    $result = mysql_query($connection, $sql);
    
    if($result == true) {
        echo "<h1>Inserted!</h1>";
    }
}

// $table = $_POST['table'];
// $people = $_POST['people'];
// $date = $_POST['date'];
// $time = $_POST['time'];

// $connection = mysql_connect("localhost", "root", ""); 
// $db = mysql_select_db("booking", $connection);
// if (isset($_POST['table'])) {
// $query = mysql_query("insert into table_booking(table, people, date, time)
//  values ('$table', '$people', '$date','$time')");
// echo "Form Submitted succesfully";
// }
// mysql_close($connection);

?>
