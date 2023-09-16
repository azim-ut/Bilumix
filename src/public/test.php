<?php
$targetEmail = "sales@bilumix.ru";
$json = file_get_contents('php://input');


// send email
$out = mail($targetEmail, "Email from Bilumix.ru", jsonToDebug($json));
if(!$out){
    echo "error";
    return;
}
echo "ok";

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

function emailSend(string $to){
    $mail = new PHPMailer();

    $mail->IsSMTP();                       // telling the class to use SMTP

    $mail->SMTPDebug = 0;
// 0 = no output, 1 = errors and messages, 2 = messages only.

    $mail->SMTPAuth = true;                // enable SMTP authentication
    $mail->SMTPSecure = "tls";              // sets the prefix to the servier
    $mail->Host = "smtp.gmail.com";        // sets Gmail as the SMTP server
    $mail->Port = 587;                     // set the SMTP port for the GMAIL

    $mail->Username = "info@example.com";  // Gmail username
    $mail->Password = "yourpassword";      // Gmail password

    $mail->CharSet = 'windows-1250';
    $mail->SetFrom ('info@example.com', 'Example.com Information');
    $mail->AddBCC ( 'sales@example.com', 'Example.com Sales Dep.');
    $mail->Subject = $subject;
    $mail->ContentType = 'text/plain';
    $mail->IsHTML(false);

    $mail->Body = $body_of_your_email;
// you may also use $mail->Body = file_get_contents('your_mail_template.html');

    $mail->AddAddress ('your.recipient@domain.com', 'Recipients Name');
// you may also use this format $mail->AddAddress ($recipient);

    if(!$mail->Send())
    {
        $error_message = "Mailer Error: " . $mail->ErrorInfo;
    } else
    {
        $error_message = "Successfully sent!";
    }
}
?>
