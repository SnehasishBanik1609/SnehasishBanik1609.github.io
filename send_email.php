<?php
// Display errors for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $message = htmlspecialchars($_POST['message']);
    if (empty($message)) {
        echo "Message is required.";
        exit;
    }

    // Email details
    $to = "rana2013.banik@gmail.com";
    $subject = "New Contact Form Message";
    $headers = "From: portfolio@snehasish.com\r\n";
    $headers .= "Reply-To: noreply@snehasish.com\r\n";
    $headers .= "Content-type: text/html\r\n";

    // Email body
    $email_message = "<html><body>";
    $email_message .= "<h1>New Message from Portfolio</h1>";
    $email_message .= "<p><strong>Message:</strong> " . nl2br($message) . "</p>";
    $email_message .= "</body></html>";

    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message failed to send.";
    }
} else {
    echo "Invalid Request";
}
?>
