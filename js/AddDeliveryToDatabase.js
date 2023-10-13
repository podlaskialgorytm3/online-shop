const dashboard = document.querySelector(".dashboard")
const sideBar = document.querySelector(".side-panel")
const addDeliveryPanel = document.querySelector(".add-delivery-panel")

const nameDelivery = document.querySelector(".name-delivery")
const addressDelivery = document.querySelector(".address-delivery")
const emailDelivery = document.querySelector(".email-delivery")
const priceDelivery = document.querySelector(".price-delivery")

const nameDeliveryError = document.querySelector(".name-delivery-error")
const addressDeliveryError = document.querySelector(".address-delivery-error")
const emailDeliveryError = document.querySelector(".email-delivery-error")
const priceDeliveryError = document.querySelector(".price-delivery-error")

const deliverySubmit = document.querySelector(".delivery-submit")
const addDelivery = document.querySelector(".add-delivery")
const exitBtn = document.querySelector(".exit-add-delivery")

const successAdd = document.querySelector(".success-add")
const successText = document.querySelector(".success-text")

const exitHandle = () => {
    dashboard.style.display = "block"
    sideBar.style.display = "block"
    addDeliveryPanel.style.display = "none"
}
const ingoingHandle = () => {
    dashboard.style.display = "none"
    sideBar.style.display = "none"
    addDeliveryPanel.style.display = "flex"
}
const isEmpty = (text) => {
    if(text == "") 
        return true
    else
        return false
}
const lessThanZero = (number) => {
    if(number < 0)
        return true
    else
        return false
}
const isMail = (mail) => {
    let mailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return mail.match(mailRegexp) ? true :  false
}
const validationData = () => {
    let stepValidation = 0
    if(isEmpty(nameDelivery.value)){
        nameDeliveryError.textContent = "Podano puste pole!"
    }
    else{
        nameDeliveryError.textContent = ""
        stepValidation++
    }
    if(isEmpty(addressDelivery.value)){
        addressDeliveryError.textContent = "Podano puste pole!"
    }
    else{
        addressDeliveryError.textContent = ""
        stepValidation++
    }
    if(isEmpty(emailDelivery.value)){
        emailDeliveryError.textContent = "Podano puste pole!"
    }
    else{
        if(isMail(emailDelivery.value)){
            emailDeliveryError.textContent = ""
            stepValidation++    
        }
        else{
            emailDeliveryError.textContent = "Niepoprawny format email!"
        }
    }
    if(isEmpty(priceDelivery.value)){
        priceDeliveryError.textContent = "Podano puste pole!"
    }
    else{
        if(lessThanZero(priceDelivery.value)){
            priceDeliveryError.textContent = "Cena dostawy poniżej zera!"
        }
        else{
            stepValidation++
            priceDeliveryError.textContent = ""
        }
    }
    if(stepValidation == 4)console.log("super")
}


addDelivery.addEventListener("click",() => {
    ingoingHandle()
})
exitBtn.addEventListener("click",() => {
    exitHandle()
})
deliverySubmit.addEventListener("click", (e) => {
    e.preventDefault()
    validationData()
})