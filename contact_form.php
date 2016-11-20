<?php
    // Fetching Values from URL.
    $name = trim($_POST['name1']);
    $email = trim($_POST['email1']);
    $message = trim($_POST['message1']);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail address.
    // After sanitization Validation is performed
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $subject = "Website visitor query from: ".$name;
            // To send HTML mail, the Content-type header must be set.
            $headers = 'MIME-Version: 1.0' . "\r\n";
            $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
            $headers .= 'From:' . $email. "\r\n"; // Sender's Email
            $sendmessage = "<div style=\"background-color:#7E7E7E; color:white;\">" . $message . "</div>";
            // Message lines should not exceed 70 characters (PHP rule), so wrap it.
            $sendmessage = wordwrap($sendmessage, 70);
            // Send mail by PHP Mail Function.
            mail("aarohan.querry@gmail.com", $subject, $sendmessage, $headers);

            $subject = "Contact Confirmation mail";
            $headers = 'MIME-Version: 1.0' . "\r\n";
            $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
            $headers .= 'From: aarohan.querry@gmail.com \r\n';
            $template = '<div style="padding:50px; color:white;">Hello ' . $name . ',<br/>'
                . '<br/>Thank you...! For Contacting Us.<br/><br/>'
                . 'This is a Contact Confirmation mail.'
                . '<br/>'
                . 'We Will contact You as soon as possible .</div>';
            $sendmessage = "<div style=\"background-color:#7E7E7E; color:white;\">" . $template . "</div>";
            $sendmessage = wordwrap($sendmessage, 70);
            mail($email, $subject, $sendmessage, $headers);
            echo "Your Query has been received, We will contact you soon.";
        }
    } else {
        echo "<span>* invalid email *</span>";
    }

?>
