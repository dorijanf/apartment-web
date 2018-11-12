<?php
if(!isset($_POST['submit']))
{
    echo "error; you need to submit the form!";
    echo '<a href="/">Return to the website.</a>'
}

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

if(empty($name)||empty($visitor_email)) 
{
    echo "Name and email are mandatory!";
    echo '<a href="/">Return to the website.</a>'
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    echo '<a href="/">Return to the website.</a>'
    exit;
}
$myEmail = "davorka.fabijanic@apartments-davorka.com";
$email_subject = "NOVI UPIT ZA APARTMAN";
$email_body = "Primili ste poruku od korisnika $name s email adresom: $visitor_email \n".
    "Poruka:\n $message".

mail($myEmail,$email_subject,$email_body);
echo 'Thank you for submitting! You will be contacted shortly.'
echo '<a href="/">Return to the website.</a>'

// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
?> 