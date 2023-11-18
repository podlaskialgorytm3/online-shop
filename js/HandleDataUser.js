const nameUser = document.querySelector(".name")
const address = document.querySelector(".address")
const email = document.querySelector(".email")
const number = document.querySelector(".number")

const nameError = document.querySelector(".name-error")
const addressError = document.querySelector(".address-error")
const emailError = document.querySelector(".email-error")
const numberError = document.querySelector(".number-error")

const submitButton = document.querySelector(".submit-data")

const successAdd = document.querySelector(".success-add")
const successText = document.querySelector(".success-text")

const getID = () => {
    return new Promise((resolve, reject) => {
        let xmlhttp = new XMLHttpRequest();
        let url = "../user_pages/get_data/get-id.php";
        
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    let data = JSON.parse(this.responseText);
                    resolve(data);
                } else {
                    reject(new Error('Request failed with status ' + this.status));
                }
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    });
}
const suplmenetingUserData = async () =>{
    let id = await getID()
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-user-data.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].ID_USER == id){
                    nameUser.value = `${database[i].imie_nazwisko}`
                    address.value = `${database[i].adres}`
                    email.value = `${database[i].email}`
                    number.value = `${database[i].numer_telefonu}`
                } 
            }
    }}
}
const isEmpty = (text) => {
    if(text == ""){
        return false
    }
    else{
        return true
    }
}
const isEmail = (text) => {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(regex.test(text)){
        return true
    }
    else{
        return false
    }
}
const isPhoneNumber = (text) => {
    let regex = /^[0-9]{9}$/;
    if(regex.test(text)){
        return true
    }
    else{
        return false
    }
    
}
const validation = () => {
    let stepValidation =  0
    if(isEmpty(nameUser.value)){
        nameError.textContent = ""
        stepValidation++
    }
    else{
        nameError.textContent = "Puste pole!"
    }
    if(isEmpty(address.value)){
        addressError.textContent = ""
        stepValidation++
    }
    else{
        addressError.textContent = "Puste pole!"
    }
    if(isEmpty(email.value)){
        if(isEmail(email.value)){
            emailError.textContent = ""
            stepValidation++
        }
        else{
            emailError.textContent = "Niepoprawny format e-mail!"
        }
    }
    else{
        emailError.textContent = "Puste pole!"
    }
    if(isEmpty(number.value)){
        if(isPhoneNumber(number.value)){
            numberError.textContent = ""
            stepValidation++
        }
        else{
            numberError.textContent = "Niepoprawny format numeru telefonu!"
        }
    }
    else{
        numberError.textContent = "Puste pole!"
    }
    if(stepValidation == 4){
        return true
    }
}
const editUserData = async () => {
    let id = await getID()
    $.ajax({
		url: "../user_pages/push_data/edit-user-data.php",
		type: "POST",
		data: {
            id: id,
			name: nameUser.value,
            address: address.value,
            email: email.value,
            number: number.value
		 },
		cache: false,
		success: function(){
            suplmenetingUserData()
            successAdd.style.opacity = "1"
            successText.textContent = "Udało się edytować dane!"
            setInterval(() => {
                successAdd.style.opacity = "0"
            },5000)
        }
	    })
}

document.addEventListener("DOMContentLoaded",() => {
    suplmenetingUserData()
})
submitButton.addEventListener("click",() => {
    if(validation()){
        editUserData()
    }
})