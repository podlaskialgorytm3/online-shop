const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#password_confirmation")
const passwordError = document.querySelector(".password-error")
const confirmPasswordError = document.querySelector(".confirm-password-error")
const notMatchingError = document.querySelector(".not-matching")
const sendButton = document.querySelector(".send-code")
const token = document.querySelector("input[name=token]")

let validationStep = 0

sendButton.addEventListener("click", (e) => {
    e.preventDefault()
    let regex = /[A-Z]/g
    let numberRegex = /[0-9]/g
    if(password.value != ""){
        if(password.value.length > 7){
            if(regex.test(password.value)){
                if(numberRegex.test(password.value)){
                    passwordError.textContent = ""
                    validationStep++
                }
                else{
                    passwordError.textContent = "Hasło powinno mieć conajniej jedną cyfrę!"
                }
            }
            else{
                passwordError.textContent = "Hasło powinno mieć conajniej jedną dużą literę!"
            }
        }
        else{
            passwordError.textContent = "Hasło powinno mieć conajmniej 8 znaków!"
        }
    }
    else{
        passwordError.textContent = "Puste pole!"
    }
    let regexX = /[A-Z]/g
    let numberRegexX = /[0-9]/g
    if(confirmPassword.value != ""){
        if(confirmPassword.value.length > 7){
            if(regexX.test(confirmPassword.value)){
                if(numberRegexX.test(confirmPassword.value)){
                    confirmPasswordError.textContent = ""
                    validationStep++
                }
                else{
                    confirmPasswordError.textContent = "Hasło powinno mieć conajniej jedną cyfrę!"
                }
            }
            else{
                confirmPasswordError.textContent = "Hasło powinno mieć conajniej jedną dużą literę!"
            }
        }
        else{
            confirmPasswordError.textContent = "Hasło powinno mieć conajmniej 8 znaków!"
        }
    }
    else{
        confirmPasswordError.textContent = "Puste pole!"
    }
    if(validationStep == 2){
        if(confirmPassword.value == password.value){
            resetingPassword()
        }
        else{
            notMatchingError.textContent = "Hasła się nie zgadzają!"
        }
    }
    validationStep = 0
})



const resetingPassword = () => {
    $.ajax({
		url: "../process-reset-password.php",
		type: "POST",
		data: {
			password: password.value,
            token: token.value
		 },
		cache: false,
		success: function(){
            window.location.href = "redirecting/success-reset-password.php";
            }
	    })
}
