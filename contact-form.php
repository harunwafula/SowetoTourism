<?php
  require_once("./recaptcha.php");
if($_SERVER['REQUEST_METHOD'] == "POST") {
    $visitor_name = "";
    $visitor_email = "";
    $message_title = "";
    $concerned_department = "";
    $visitor_message = "";
    $email_body = "<div>";
  
    if(isset($_POST['visitor_name'])) {
        $visitor_name = filter_var($_POST['visitor_name'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Visitor Name:</b></label>&nbsp;<span>".$visitor_name."</span>
                        </div>";
    }
 
    if(isset($_POST['visitor_email'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div>
                           <label><b>Visitor Email:</b></label>&nbsp;<span>".$visitor_email."</span>
                        </div>";
    }
      
    if(isset($_POST['message_title'])) {
        $message_title = filter_var($_POST['message_title'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Reason For Contacting Us:</b></label>&nbsp;<span>".$message_title."</span>
                        </div>";
    }
      
  
      
    if(isset($_POST['visitor_message'])) {
        $visitor_message = htmlspecialchars($_POST['visitor_message']);
        $email_body .= "<div>
                           <label><b>Visitor Message:</b></label>
                           <div>".$visitor_message."</div>
                        </div>";
    }
      
  
        $recipient = "zazak@sowetotourism.org.za";
    
  
      
    $email_body .= "</div>";
 
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . 'Soweto Tourism <info@sowetotourism.org.za>' . "\r\n";
    $recaptcha = $_POST['g-recaptcha-response'];
    $res = reCaptcha($recaptcha);
    if($res['success']){
        // Send email
        if(mail($recipient, $message_title, $email_body, $headers)) {
            echo "<p>Thank you for contacting us, $visitor_name. You will get a reply within 24 hours.</p>";
        } else {
            echo '<p>We are sorry but the email did not go through.</p>';
        }
      }else{
        // Error
      }
   
      
} else {
    echo '<p>Something went wrong</p>';
}
?>