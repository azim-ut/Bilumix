<?php
$targetEmail = "9420183@gmail.com";
$text = $_REQUEST["text"]?'no_text';
$name = $_REQUEST["name"]?'no_email';
$summary = $_REQUEST["summary"]?'no_email';

// use wordwrap() if lines are longer than 70 characters
$summary = wordwrap($summary,150);
$content = [];
if(isset($_REQUEST["email"]) && !empty($_REQUEST["email"])){
    $content[] = "From email: ".$_REQUEST["email"];
}
$content[] = "Name: ".$name;
if(isset($_REQUEST["text"]) && !empty($_REQUEST["text"])){
    $content[] = $text;
}

// send email
mail($targetEmail, $summary, implode("\r\n", $content));
?>