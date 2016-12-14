<?php
if(!$_POST) exit;

    $to 	  = 'aarohan.querry@gmail.com'; #Replace your email id...
    $name = trim($_POST['name1']);
    $email = trim($_POST['email1']);
    $message = trim($_POST['message1']);
	// $name	  = $_POST['name'];
	// $email    = $_POST['email'];
	// $phone	  = $_POST['mno'];
	// $enq	  = $_POST['enquiry'];
    // $comment  = $_POST['msg'];

	if(get_magic_quotes_gpc()) { $message = stripslashes($message); }

	 //$e_subject = 'You\'ve been contacted by ' . $name . '.';
     $e_subject = 'Website visitor : ' . $name . '.';

	 $msg  = "You have been contacted by $name \r\n\n";
	 $msg .= "You can contact $name via email, $email.\r\n\n";
	 $msg .= "Message: $message\r\n\n";
	 $msg .= "-------------------------------------------------------------------------------------------\r\n";

	 if(@mail($to, $e_subject, $msg, "From: $email\r\nReturn-Path: $email\r\n"))
	 {
		 echo "Message sent Successfully";
		 //header('Location: http://www.mitaarohan.com/#hero_section/contact_us');
	}
	 else
	 {
		 echo "Sorry your message not sent, Try again Later";
		 //header('Location: http://www.mitaarohan.com');
	 }
?>
