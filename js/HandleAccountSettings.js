const mainContent = document.querySelector(".main-content")
const emailContent = document.querySelector(".email-content")

const username = document.querySelector(".username")
const firstName = document.querySelector(".first-name")
const lastName = document.querySelector(".last-name")
const address = document.querySelector(".address")

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

mainEdit.addEventListener("click",() => {
    showEditMainInfo()
})
exitMainInfo.addEventListener("click",() => {
    hideEditMainInfo()
})