const sendButton = document.querySelector(".send-code")
const email = document.querySelector("#email")



sendButton.addEventListener("click",(e) => {
    e.preventDefault()
    sendEmail()
})

const sendEmail = () => {
    $.ajax({
		url: "../vendor/send-proccess.php",
		type: "POST",
		data: {
			email: email.value,
		 },
		cache: false,
		success: function(){
            window.location.href = "/vendor/send-password-reset.php";
            }
	    })
}