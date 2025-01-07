<?php

function clean_text($text='') {
	$text = trim($text);
	$text = strip_tags($text);
	$text = addslashes($text);
	$text = htmlspecialchars($text);
	return $text;
}
if (!$_POST) {
	die();
	}

else {
	if (empty($_POST["fPhone"])) {
		echo "all_empty";
	}else {
		// edit this only :)
		$your_email = "4exult@gmail.com, gchauhan.dm@gmail.com, info@acesgroups.com, anmol.wasan@acesgroups.com, nt@acesgroups.com, sa@acesgroups.com";
		$fPhone	 = clean_text($_POST["fPhone"]);
		$ipFormInput	 = clean_text($_POST["ipFormInput"]);
		
		
		$headers  = "From: leads@agwtrading.mu \n";
		/*$headers  = "To: <".$your_email.">\n";
		$headers .= 'Content-type: text/html; charset=UTF-8'. "\r\n";
		$headers .= "Reply-To: $mail\n";*/
		$msg	  = "New Message\n";
	
		$msg 	.= "Phone : \t $fPhone \r\n";
		$msg 	.= "IP Address : \t $ipFormInput \r\n";
		$subject  = "Phone Query for Waterproofing"; 
		//echo "done";
		$done = @mail($your_email, $subject, $msg, $headers);
	}
}
?>
<html>
		<body>
		<div align="center">
		<h1 style="text-align: center;"><span style="color: #333399;">Thank You for submitting your Information</span></h1>
		<h2 style="text-align: center;"><span style="color: #333399;">We will contact you shortly</span></h2>
		<h2 style="text-align: center;"><span style="color: #333399;">You can also reach us on: <a href="tel: 58275795">5827-5795</a></span></h2></span></h2>
		</div>

		<meta http-equiv="refresh" content="3; url=#" />


		</body>

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




