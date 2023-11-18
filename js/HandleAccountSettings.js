const mainContent = document.querySelector(".main-content")
const emailContent = document.querySelector(".email-content")

const succcesAdd = document.querySelector(".success-add")
const successText = document.querySelector(".success-text")

const username = document.querySelector(".username")
const firstName = document.querySelector(".first-name")
const lastName = document.querySelector(".last-name")
const address = document.querySelector(".address")
const usernameError = document.querySelector(".username-error")
const firstNameError = document.querySelector(".first-name-error")
const lastNameError = document.querySelector(".last-name-error")
const addressError = document.querySelector(".address-error")
const submitEditMain = document.querySelector(".submit-edit-main")

const newEmail = document.querySelector(".new-email")
const confirmEmailPassword = document.querySelector(".confirm-email-password")
const errorNewEmail = document.querySelector(".error-new-email")
const errorConfirmEmailPassword = document.querySelector(".erorr-confirm-email-password")
const submitEditEmail = document.querySelector(".submit-edit-email")

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
const checkCorrectValue = async (text) => {
    let id = await getID()
    let password = CryptoJS.MD5(text).toString();
    return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-data.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].ID_USER == id){
                   if(database[i].haslo == password){
                    resolve(true)
                   }
                   else{
                    resolve(false)
                   }
                } 
            }
    }}})
}
const suplmenetingMainDataUser = async () =>{
    let id = await getID()
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-data.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].ID_USER == id){
                    mainContent.innerHTML = `
                    <p><b>Nick:</b> ${database[i].username}</p>
                    <p><b>Imię:</b> ${database[i].imie}</p>
                    <p><b>Nazwisko:</b> ${database[i].nazwisko}</p>
                    <p><b>Adres:</b> ${database[i].adres}</p>`
                    emailContent.innerHTML = `<p><b>Email:</b>  ${database[i].email}</p>`
                    username.value = database[i].username
                    firstName.value = database[i].imie
                    lastName.value = database[i].nazwisko
                    address.value = database[i].adres
                } 
            }
    }}
}
document.addEventListener("DOMContentLoaded",() => {
    suplmenetingMainDataUser()
})

const mainEdit = document.querySelector(".main-edit")
const emailEdit = document.querySelector(".email-edit")
const passwordEdit = document.querySelector(".password-edit")

const editMainInfo = document.querySelector(".edit-main-info")
const editEmailInfo = document.querySelector(".edit-email-info")
const editPasswordInfo = document.querySelector(".edit-password-info")

const exitMainInfo = document.querySelector(".exit-main")
const exitEmail = document.querySelector(".exit-email")
const exitPassword = document.querySelector(".exit-password")

const hideElements = () => {
    document.querySelector("#header").style.display = "none"
    document.querySelector(".side-panel").style.display = "none"
    document.querySelector(".client-dashboard").style.display = "none"
}
const showElements = () => {
    document.querySelector("#header").style.display = "flex"
    document.querySelector(".side-panel").style.display = "block"
    document.querySelector(".client-dashboard").style.display = "flex"
}
const showEditMainInfo = () => {
    hideElements()
    editMainInfo.style.display = "flex"
}
const hideEditMainInfo = () => {
    showElements()
    editMainInfo.style.display = "none"
}
const showEditEmail = () => {
    hideElements()
    editEmailInfo.style.display = "flex"
}
const hideEditEmail = () => {
    showElements()
    editEmailInfo.style.display = "none"
}
const isEmpty = (text) => {
    if(text == ""){
        return true
    }
    else{
        return false
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

const validationMainData = () => {
    let stepValidation = 0
    if(isEmpty(username.value)){
        usernameError.textContent = "Pseudonim jest pusty!"
    }
    else{
        usernameError.textContent = ""
        stepValidation++
    }
    if(isEmpty(firstName.value)){
        firstNameError.textContent = "Imię jest puste!"
    }
    else{
        firstNameError.textContent = ""
        stepValidation++
    }
    if(isEmpty(lastName.value)){
        lastNameError.textContent = "Nazwisko jest puste!"
    }
    else{
        lastNameError.textContent = ""
        stepValidation++
    }
    if(isEmpty(address.value)){
        addressError.textContent = "Adres jest pusty"
    }
    else{
        addressError.textContent = ""
        stepValidation++
    }
    if(stepValidation == 4){
        return true
    }
}
const editMainData = async () => {
    let id = await getID()
    $.ajax({
		url: "../user_pages/push_data/edit-user-info.php",
		type: "POST",
		data: {
            id: id,
            username: username.value,
            first_name: firstName.value,
            last_name: lastName.value,
            address: address.value
		 },
		cache: false,
		success: function(){
            suplmenetingMainDataUser()
            succcesAdd.style.opacity = "1"
            successText.textContent = "Udało się edytować twoje dane!"
            setInterval(() => {
                succcesAdd.style.opacity = "0"
            },5000)
            }
	    })
}



mainEdit.addEventListener("click",() => {
    showEditMainInfo()
})
exitMainInfo.addEventListener("click",() => {
    hideEditMainInfo()
})
emailEdit.addEventListener("click",() => {
    showEditEmail()
})
exitEmail.addEventListener("click",() => {
    hideEditEmail()
})
submitEditMain.addEventListener("click",() => {
    if(validationMainData()){
        editMainData()
        hideEditMainInfo()
    }
})