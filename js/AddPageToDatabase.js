const dashboard = document.querySelector(".dashboard")
const sideBar = document.querySelector(".side-panel")
const addPage = document.querySelector(".add-page")
const exitPanel  = document.querySelector(".exit-add-page")
const pageSubmit = document.querySelector(".page-submit")
const addPagePanel = document.querySelector(".add-page-panel")

const titlePage = document.querySelector(".title-page")
const descriptionPage = document.querySelector(".description-page")
const statusPage = document.querySelector(".status-page")

const titleErrorPage = document.querySelector(".title-page-error")
const descriptionErrorPage = document.querySelector(".description-page-error")

const successAdd = document.querySelector(".success-add")
const successText = document.querySelector(".success-text")


const showPagePanel = () => {
    dashboard.style.display = "none"
    sideBar.style.display = "none"
    addPagePanel.style.display = "flex"
}
const exitPagePanel = () => {
    dashboard.style.display = "block"
    sideBar.style.display = "block"
    addPagePanel.style.display = "none"
}
addPage.addEventListener("click",() => {
    showPagePanel()

})
exitPanel.addEventListener("click",() => {
    exitPagePanel()
})