const addUserModal = document.querySelector(".add-user-panel")
const dashboard = document.querySelector(".dashboard")
const sidePanel = document.querySelector(".side-panel")

const addWorkerBtn = document.querySelector(".add-worker")
const exit = document.querySelector(".exit-add-user")

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

addWorkerBtn.addEventListener("click",() => {
    turnOnModal()
})

exit.addEventListener("click",() => {
    turnOffModal()
})