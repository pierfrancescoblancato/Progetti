<?php

$prezzo = 120;
$sale = 0.2;

if($prezzo > 100){
    $prezzo= $prezzo - ($prezzo * $sale);
    echo "new price: $prezzo ";
}else{
    echo "sale non applicated";
}

?>