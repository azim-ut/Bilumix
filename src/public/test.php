<?php
$targetEmail = "9420183@gmail.com";
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);


$summary = "No title";
$content = [];
if(isset($data->summary) && !empty($data->summary)){
    $summary = wordwrap($data->summary,150);
}
if(isset($data->email) && !empty($data->email)){
    $content[] = "From email: ".$data->email;
}
if(isset($data->name) && !empty($data->name)){
    $content[] = "Name: ".$data->name;
}
if(isset($data->text) && !empty($data->text)){
    $content[] = $data->text;
}

// send email
mail($targetEmail, $summary, implode("\r\n", $content));
?>