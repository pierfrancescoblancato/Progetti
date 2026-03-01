<?php
$fruits = ["apple","banana","cherry","strawberry"];
foreach ($fruits as $fruit){
    echo "<button onclick='fruitStamp(\"$fruit\")'>Frutto: $fruit</button>";
}
?>
<script>
    function fruitStamp(fruit){
        if(confirm("Vuoi selezionare " + fruit + "?")) {
            alert(fruit);
        }
    }
</script>