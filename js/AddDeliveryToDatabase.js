const dashboard = document.querySelector(".dashboard")
const sideBar = document.querySelector(".side-panel")
const addDeliveryPanel = document.querySelector(".add-delivery-panel")

const nameDelivery = document.querySelector("name-delivery")
const addressDelivery = document.querySelector(".address-delivery")
const emailDelivery = document.querySelector(".email-delivery")
const priceDelivery = document.querySelector(".price-delivery")

const nameDeliveryError = document.querySelector("name-delivery-error")
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

addDelivery.addEventListener("click",() => {
    ingoingHandle()
})
exitBtn.addEventListener("click",() => {
    exitHandle()
})