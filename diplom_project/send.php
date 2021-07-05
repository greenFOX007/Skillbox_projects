<?php
$name = $_POST['name'];
$number = $_POST['number'];

$name = htmlspecialchars($name);
$number = htmlspecialchars($number);

$name = urldecode($name);
$number = urldecode($number);

$name = trim($name);
$number = trim($number);

if (mail("vova280297@gmail.com", "Заявка с сайта", "Имя:".$name.". Телефон: ".$number ,"From: info@diplom-my.tmweb.ru \r\n")) {
  echo "Спасибо, сообщение отправленно"
  ;

} else {
    echo "при отправке сообщения возникли ошибки";
}?>


