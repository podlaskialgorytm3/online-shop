const addUserModal = document.querySelector(".add-user-panel")
const sidePanel = document.querySelector(".side-panel")

const addWorkerBtn = document.querySelector(".add-worker")
const exit = document.querySelector(".exit-add-user")
const userSubmitAdd = document.querySelector(".user-submit-add")

const username = document.querySelector(".username-add")
const name = document.querySelector(".name-add")
const lastname = document.querySelector(".lastname-add")
const address = document.querySelector(".address-add")
const email = document.querySelector(".email-add")
const type = document.querySelector(".type-add")
const note = document.querySelector(".note-add")


const usernameError = document.querySelector(".username-error-add")
const nameError = document.querySelector(".name-error-add")
const lastnameError = document.querySelector(".lastname-error-add")
const addressError = document.querySelector(".address-error-add")
const emailError = document.querySelector(".email-error-add")

const turnOnModal = () => {
    addUserModal.style.display = "flex"
    dashboard.style.display = "none"
    sidePanel.style.display = "none"
}
const turnOffModal = () => {
    addUserModal.style.display = "none"
    dashboard.style.display = "block"
    sidePanel.style.display = "block"
}
let emails = []
let currentEmail = ""
ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-data.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            database.forEach(element =>{
                emails.push(element['email'])
            })
    }
}
const validation = () => {
    let stepValidation = 0
    if(username.value == ""){
        usernameError.textContent = "Wprowadzono puste pole!"
    }
    else{
        usernameError.textContent = ""
        stepValidation++
    }
    if(name.value == ""){
        nameError.textContent = "Wprowadzono puste pole!"
    }
    else{
        nameError.textContent = ""
        stepValidation++
    }
    if(lastname.value == ""){
        lastnameError.textContent = "Wprowadzono puste pole!"
    }
    else{
        lastnameError.textContent = ""
        stepValidation++
    }
    if(address.value == ""){
        addressError.textContent = "Wprowadzono puste pole!"
    }
    else{
        addressError.textContent = ""
        stepValidation++
    }
    if(email.value == ""){
        console.log(email.value)
        emailError.textContent = "Wprowadzono puste pole!"
    }
    else{
        mailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.value.match(mailRegexp)){
            if(emails.includes(email.value) && currentEmail != email.value){
                emailError.textContent = "Podano już istniejący email!"
            }
            else{
                emailError.textContent = ""
                stepValidation++
            }
        }
        else{
            emailError.textContent = "Zły format e-mail!"
        }
    }
    if(stepValidation == 5){
        console.log("Poprawno zwalidowano!")
    }
}


addWorkerBtn.addEventListener("click",() => {
    turnOnModal()
})

exit.addEventListener("click",() => {
    turnOffModal()
})
userSubmitAdd.addEventListener("click",(e) => {
    e.preventDefault()
    validation()
})


