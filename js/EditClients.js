editUserPanel = document.querySelector(".edit-user-panel")
dashboard = document.querySelector(".dashboard")
sideBar = document.querySelector(".side-panel")

editUser = document.querySelectorAll(".edit-user")

exitEditUser = document.querySelector(".edit-exit-user")
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

successEditUser = document.querySelector(".success-add")

successTextEditUser = document.querySelector(".success-text")

editUser.forEach(button => {
    button.addEventListener("click", () => {
        editUserPanel.style.display = 'flex'
        dashboard.style.display = 'none'
        sideBar.style.display = 'none'
        sumplementingInput(button.dataset.id)
    })
})


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
                } 
            }
    }}
}


validationData = () => {

}

