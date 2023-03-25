
function SendMail(){

	var params = {
		from_name: document.getElementById("fullName").value,
		email_id: document.getElementById("email_id").value,
		message: document.getElementById("message").value
	}

	emailjs.send("service_uvdwsr6", "template_tsyfsu9", params).then(function(res){
		alert("Your message has been sent! Thank You! ");
	})

}