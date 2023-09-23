// Pobieranie danych
const registerUsernameError = document.querySelector(".register-username-error")
const registerFirstNameError = document.querySelector(".register-firstName-error")
const registerLastNameError = document.querySelector(".register-lastName-error")
const registerAddressError = document.querySelector(".register-address-error")
const registerEmailError = document.querySelector(".register-email-error")
const registerPasswordError = document.querySelector(".register-password-error")
const registerConfirmPasswordError = document.querySelector(".register-confirmPassword-error")
const registerOtherPasswordError = document.querySelector(".other-password-error")
const submitButton = document.querySelector("input[type=submit]")

const username = document.querySelector("#username")
const firstName  = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const address = document.querySelector("#address")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmPassword")


submitButton.addEventListener("click",(e) =>{
    e.preventDefault()
    let regexp = /^[A-Za-ząęółśżźćń]+$/;
    let help = 0;
    if(username.value == ""){
        registerUsernameError.textContent = "Pole jest wymagane!"
    }
    else{
        help++
        registerUsernameError.textContent = ""
    }
    if(firstName.value == ""){
        registerFirstNameError.textContent = "Pole jest wymagane!"
    }
    else{
        if(regexp.test(firstName.value)){
            help++
            registerFirstNameError.textContent = ""
        }
        else{
            registerFirstNameError.textContent = "Pole zawiera błędne znaki!"
        }     
    }
    if(lastName.value == ""){
        registerLastNameError.textContent = "Pole jest wymagane!"
    }
    else{
        if(regexp.test(lastName.value)){
            help++
            registerLastNameError.textContent = ""
        }
        else{
            registerLastNameError.textContent = "Pole zawiera błędne znaki!"
        }     
    }
    if(address.value == ""){
        registerAddressError.textContent = "Pole jest wymagane!"
    }
    else{
        help++
        registerAddressError.textContent = ""
    }
    if(email.value == ""){
        registerEmailError.textContent = "Pole jest wymagane!"
    }
    else{
        let mailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.value.match(mailRegexp)){
            help++
            registerEmailError.textContent = ""
        }
        else{
            registerEmailError.textContent = "Niepoprawny format e-mail!"
        }
    }
    if(password.value == ""){
        registerPasswordError.textContent = "Pole jest wymagane!"
    }
    else{
        help++
        registerPasswordError.textContent = ""
    }
    if(confirmPassword.value == ""){
        registerConfirmPasswordError.textContent = "Pole jest wymagane!"
    }
    else{
        help++
        registerConfirmPasswordError.textContent = ""
    }
    if(confirmPassword.value != password.value && confirmPassword.value != "" && password.value != ""){
        registerOtherPasswordError.textContent = "Hasła się nie zgadzają!"
    }
    else{
        registerOtherPasswordError.textContent = ""
        help++
    }
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-data.php" , true);
    ajax.send();

    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            database.forEach(element =>{
                if(element['email'] == email.value){
                    registerEmailError.textContent = "Wpisany mail jest już zajęty!"
                }
                else{
                    registerEmailError.textContent = ""
                    help++
                }
            })
        }
    }
    if(help == 9){
        registerUser()
    }
})

const registerUser = () => {
    console.log("Poprawnie wporwadzone dane!")
    console.log(
    $.ajax({
		url: "registration.php",
		type: "POST",
		data: {
			username: username.value,
            imie: firstName.value,
            nazwisko: lastName.value,
            adres: address.value,
            email: email.value,
            haslo: password.value,	
		 },
		cache: false,
		success: function(){
            console.log("Poprawnie dodano do bazy danych!")
            window.location.href = "login.php";
            }
	    }) )
}
