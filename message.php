<?php 


// DEFINING SERVER INFORMATION
define('SERVER_NAME' , 'localhost');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'data');


//DEFINING VARIABLES	
$name = $_POST['text'];
$email = $_POST['email'];
$msg = $_POST['your-message'];
$to = 'mindaugaz.marc@gmail.com';
$subject = "My subject";
$headers = "From: " . $email . "\r\n";

// echo "<pre>";
// echo $name . "\n" . $email . "\n" . $msg;
// echo "</pre>";

if(mail($to, $subject, $msg, $headers)) {
	echo 'Email sent successfully!';
} else {
	die('Failure: Email was not sent!');
}

?>
