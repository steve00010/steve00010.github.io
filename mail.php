<?php
if ($_POST['submit']) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: ContactForm'; 
    $to = 'steve.howie@hotmail.com'; 
    $subject = 'Web Contact';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
	if ($name != '' || $email != '' || $message != '') {
		if (mail ($to, $subject, $body, $from)) { 
			 echo '<p>Your message has been sent!</p>';
		} else { 
			echo '<p>Something went wrong, go back and try again!</p>'; 
		}
	}
	else {
		echo '<p>Please fill out all the boxes!</p>'; 
	}
?>
