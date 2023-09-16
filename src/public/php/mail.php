<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer-master/src/DSNConfigurator.php';
require 'PHPMailer-master/src/OAuthTokenProvider.php';
require 'PHPMailer-master/src/OAuth.php';
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
require 'PHPMailer-master/src/POP3.php';

try{
    $to = "sales@bilumix.ru";
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $from = $data->email??"sales@bilumix.ru";
    $subject = $data->subject??"Email from Bilumix.ru";

    $content = jsonToDebug($json);

    $out = emailSend($from, $to, $subject, $content);
    if(!$out){
        echo "error";
        return;
    }
    echo "ok";
}catch (Exception $e){
    echo "error";
}

function jsonToDebug($jsonText = '')
{
    $arr = json_decode($jsonText, true);
    $html = "";
    if ($arr && is_array($arr)) {
        $html .= _arrayToHtmlTableRecursive($arr);
    }
    return $html;
}

function _arrayToHtmlTableRecursive($arr) {
    $str = "<table><tbody>";
    foreach ($arr as $key => $val) {
        $keyStr = ucfirst($key);
        $valStr = ucfirst($val);
        $str .= "<tr>";
        $str .= "<td>$keyStr</td>";
        $str .= "<td>";
        if (is_array($val)) {
            if (!empty($val)) {
                $str .= _arrayToHtmlTableRecursive($val);
            }
        } else {
            $str .= "<strong>$valStr</strong>";
        }
        $str .= "</td></tr>";
    }
    $str .= "</tbody></table>";

    return $str;
}

function emailSend(string $from, string $to, string $subject, string $content){
    $mail = new PHPMailer();

    $mail->IsSMTP();

    $mail->SMTPDebug = 3;

    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "tls";
    $mail->Host = "ssl://smtp.yandex.com";
    $mail->Port = 465;

    $mail->Username = "sales@bilumix.ru";
    $mail->Password = "aigjzsxotmpsewsa";

    $mail->CharSet = 'windows-1251';
//    $mail->CharSet = 'utf-8';
    $mail->SetFrom ($from, 'Form');
//    $mail->AddBCC ( '', '');
    $mail->Subject = $subject;
    $mail->ContentType = 'text/plain';
    $mail->IsHTML(true);

    $mail->Body = $content;

    $mail->AddAddress ($to, '');
    if(!$mail->Send())
    {
        $error_message = "Mailer Error: " . $mail->ErrorInfo;
        return false;
    }
    return true;
}
?>
