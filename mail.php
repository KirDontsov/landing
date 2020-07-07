<?php
    echo "<h1>Привет</h1>";
    
    $_POST = json_decode(file_get_contents("php://input"), true);

    var_dump($_POST);
    
         
    $message .= "Email: " . $_POST['email'] . "<br/>";
    $message .= "Телефон: " . $_POST['phone'] . "<br/>";
    
    if($_POST['chosenItem']) {
        $message .= "Наименование товара: " . $_POST['chosenItem'] . "<br/>";
    }
    if($_POST['item']) {
        $message .= "Наименование товара: " . $_POST['item'] . "<br/>";
    }
    if($_POST['firstName']) {
        $message  = "Имя пользователя: " . $_POST['firstName'] . "<br/>";
    }
    if($_POST['lastName']) {
        $message .= "Фамилия: " . $_POST['lastName'] . "<br/>";
    }
    if($_POST['selectedOption']) {
        $message .= "Выбрано: " . $_POST['selectedOption'] . "<br/>";
    }
    if($_POST['city']) {
        $message .= "Город: " . $_POST['city'] . "<br/>";
    }
    
    send_mail($message); 
     
    function send_mail($message){
        $mail_to = ["rukav@rti-torg.ru", "kir.dontsov@gmail.com"];
        $subject = "Заявка с сайта";
         
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; 
        $headers .= "From: Заявка с сайта <no-reply@rti-torg.com>\r\n"; 

        mail($mail_to, $subject, $message, $headers);
    }
    

?>