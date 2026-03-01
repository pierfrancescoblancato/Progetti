<?php
    $max = $_GET["max"]?? 10;

    $i = 0;

    while ($i <= $max) {
        echo "$i <br>";
        $i++;
    }
?>
