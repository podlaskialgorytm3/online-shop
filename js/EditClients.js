editUserPanel = document.querySelector(".edit-user-panel")
dashboard = document.querySelector(".dashboard")
sideBar = document.querySelector(".side-panel")

editUser = document.querySelectorAll(".edit-user")

usernameEdit = document.querySelector(".username-edit")
usernameErrorEdit = document.querySelector(".username-error-edit")
nameEdit = document.querySelector(".name-edit")
nameErrorEdit = document.querySelector(".name-error-edit")
lastnameEdit = document.querySelector(".lastname-edit")
lastnameErrorEdit = document.querySelector(".lastname-error-edit")
addressEdit = document.querySelector(".address-edit")
addressErrorEdit = document.querySelector(".address-error-edit")
emailEdit = document.querySelector(".email-edit")
emailErrorEdit = document.querySelector(".email-error-edit")
typeEdit = document.querySelector('.type-edit')
noteEdit = document.querySelector(".note-edit")
noteErrorEdit = document.querySelector(".note-error-edit")

userSubmitEdit = document.querySelector(".user-submit-edit")

exitEditUser = document.querySelector(".exit-edit-user")

successEditUser = document.querySelector(".success-add")

successTextEditUser = document.querySelector(".success-text")

currentEmail = ""



editUser.forEach(button => {
    button.addEventListener("click", () => {
        editUserPanel.style.display = 'flex'
        dashboard.style.display = 'none'
        sideBar.style.display = 'none'
        sumplementingInput(button.dataset.id)
        validationData(button.dataset.id)
    })
})

exitEditPopup = () => {
    editUserPanel.style.display = 'none'
    dashboard.style.display = 'block'
    sideBar.style.display = 'block'
}
exitEditUser.addEventListener("click", () => {
    exitEditPopup()
})
emails = []
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

function getClients(){
    $.ajax({
        url: "../admin_pages/getData/get-clients.php",
        method: 'POST'
    }).done(function( data ) {
        $('#user-body').html(data);
    })
}



sumplementingInput = (id) => {
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-data.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].ID_USER == id){
                    usernameEdit.value = database[i].username
                    nameEdit.value = database[i].imie
                    lastnameEdit.value = database[i].nazwisko
                    addressEdit.value = database[i].adres
                    emailEdit.value = database[i].email
                    typeEdit.value = database[i].typ
                    noteEdit.value = database[i].notatka
                    currentEmail = database[i].email
                } 
            }
    }}
}

validationData = (id) => {
    //let i = 0
    userSubmitEdit.addEventListener("click",(e) => {
        e.preventDefault()
        stepValidation = 0
        console.log(usernameEdit.value)
        if(usernameEdit.value == ""){
            usernameErrorEdit.textContent = "Wprowadzono puste pole!"
        }
        else{
            usernameErrorEdit.textContent = ""
            stepValidation++
        }
        if(nameEdit.value == ""){
            nameErrorEdit.textContent = "Wprowadzono puste pole!"
        }
        else{
            nameErrorEdit.textContent = ""
            stepValidation++
        }
        if(lastnameEdit.value == ""){
            lastnameErrorEdit.textContent = "Wprowadzono puste pole!"
        }
        else{
            lastnameErrorEdit.textContent = ""
            stepValidation++
        }
        if(addressEdit.value == ""){
            addressErrorEdit.textContent = "Wprowadzono puste pole!"
        }
        else{
            addressErrorEdit.textContent = ""
            stepValidation++
        }
        if(emailEdit.value == ""){
            emailErrorEdit.textContent = "Wprowadzono puste pole!"
        }
        else{
            mailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(emailEdit.value.match(mailRegexp)){
                if(emails.includes(emailEdit.value) && currentEmail != emailEdit.value){
                    emailErrorEdit.textContent = "Podano już istniejący email!"
                }
                else{
                    emailErrorEdit.textContent = ""
                    stepValidation++
                }
            }
            else{
                emailErrorEdit.textContent = "Zły format e-mail!"
            }
        }
        if(stepValidation == 5){
            editUser(id)
        }
    })
}

editUser = (id) => {
    console.log(
    $.ajax({
		url: "../admin_pages/pushData/edit-user-to-database.php",
		type: "POST",
		data: {
            id: id,
            username: usernameEdit.value,
            imie: nameEdit.value,
            nazwisko: lastnameEdit.value,
            adres: addressEdit.value,
            email: emailEdit.value,
            typ: typeEdit.value,
            notatka: noteEdit.value
		 },
		cache: false,
		success: function(){
            getClients()
            exitEditPopup()
            successEditUser.style.opacity = "1"
            successTextEditUser.textContent = "Udało się edytować użytkownika!"
            setInterval(() => {
                successEditUser.style.opacity = "0"
            },5000)
            }
	    }))
}