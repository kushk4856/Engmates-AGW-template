<?php
if(isset($_REQUEST['submit'])) 
{
// EDIT THE 2 LINES BELOW AS REQUIRED 
$email_to = "4exult@gmail.com, gchauhan.dm@gmail.com, info@acesgroups.com, anmol.wasan@acesgroups.com, nt@acesgroups.com, sa@acesgroups.com";
$email_subject = "Query for Waterproofing";
// validation expected data exists
if(!isset($_POST['name']) || !isset($_POST['phone']) || !isset($_POST['message']))
{
die('We are sorry, but there appears to be a problem with the form you submitted.');      
}
$name =$_POST['name']; // required
//$code=$_POST['code'];//required
$phone=$_POST['phone'];//required
//$email_from = $_POST['email']; // optional
$message =$_POST['message']; // optional
$ipFormInput=$_POST['ipFormInput'];
function clean_string($string) 
{
$bad = array("content-type","bcc:","to:","cc:","href");
return str_replace($bad,"",$string);
}
@$email_message .= "Name: ".clean_string($name)."\n";
//@$email_message .= "Email: ".clean_string($email_from)."\n";
//@$email_message .= "Country Code: ".clean_string($code)."\n";
@$email_message .= "Phone: ".clean_string($phone)."\n";
@$email_message .= "Message: ".clean_string($message)."\n";
@$email_message .= "IP Address: ".clean_string($ipFormInput)."\n";
// create email headers
$headers = 'From: leads@agwtrading.mu'."\r\n" .
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers); 
}
else if(isset($_REQUEST['submit_bottom'])) 
{
// EDIT THE 2 LINES BELOW AS REQUIRED 
$email_to = "gchauhan.dm@gmail.com";
$email_subject = "Query for Waterproofing";
// validation expected data exists
if(!isset($_POST['fPhone']))
{
die('We are sorry, but there appears to be a problem with the form you submitted.');      
}
$phone=$_POST['fPhone'];//required
function clean_string($string) 
{
$bad = array("content-type","bcc:","to:","cc:","href");
return str_replace($bad,"",$string);
}
@$email_message .= "Phone: ".clean_string($phone)."\n";
// create email headers
$headers = 'From: leads@abhishekbakshi.in
'."\r\n" .
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();

$SpamErrorMessage = "No Websites URLs permitted";

if (preg_match("/http/i", "$name")) {echo "$SpamErrorMessge"; exit();}
if (preg_match("/http/i", "$email")) {echo "$SpamErrorMessge"; exit();}
if (preg_match("/http/i", "$phone")) {echo "$SpamErrorMessge"; exit();}
if (preg_match("/http/i", "$message")) {echo "$SpamErrorMessge"; exit();}

@mail($email_to, $email_subject, $email_message, $headers); 
}
?>
<html>
<body>
<div align="center">
<h1 style="text-align: center;"><span style="color: #333399;">Thank You for submitting your Information</span></h1>
<h2 style="text-align: center;"><span style="color: #333399;">We will contact you shortly</span></h2>
<h2 style="text-align: center;"><span style="color: #333399;">You can also reach us on: <a href="tel: 58275795">5827-5795</a></span></h2>
</div>
<!--<meta http-equiv="refresh" content="3; url=http://aihp.in/" />-->

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11173189306"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11173189306');
</script>

</body>

<!-- IP Address -->
<script type="application/javascript">
    const ipFormInput = document.getElementById('ipFormInput');

    fetch('https://api.ipify.org?format=json')
        .then((response) => { return response.json() })
        .then((json) => {
            const ip = json.ip;
            ipFormInput.value = ip;
        })
        .catch((err) => { console.error(`Error getting IP Address: ${err}`) })
</script>



<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11173189306"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11173189306');
</script>



<!-- Event snippet for Submit lead form conversion page -->
<script>
  gtag('event', 'conversion', {'send_to': 'AW-11173189306/YoR6CLHx3Z0YELqt5c8p'});
</script>


</html>