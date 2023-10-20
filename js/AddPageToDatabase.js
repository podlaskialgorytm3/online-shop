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

function getPages(){
    $.ajax({
        url: "../admin_pages/getData/get-page.php",
        method: 'POST'
    }).done(function( data ) {
        $('#page-body').html(data);
    })
}

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
const isEmpty = (text) => {
    return text == "" ? true : false
}
const validation = () => {
    let stepValidation = 0
    let textError = "Podane pole jest puste!"
    if(isEmpty(titlePage.value)){
        titleErrorPage.textContent = textError
    }
    else{
        titleErrorPage.textContent = ''
        stepValidation+=1
    }
    if(isEmpty(descriptionPage.value)){
        descriptionErrorPage.textContent = textError
    }
    else{
        descriptionErrorPage.textContent = ''
        stepValidation+=1
    }
    if(stepValidation == 2)
        addPages()
}
const addPages = () => {
    console.log(
    $.ajax({
        url: "../admin_pages/pushData/add-page-to-database.php",
        type: "POST",
        data: {
            tytul: titlePage.value,
            opis: descriptionPage.value,
            status: statusPage.value
        },
        cache: false,
        success: function(){
            exitPagePanel()
            getPages()
            successAdd.style.opacity = "1"
            successText.textContent = "Udało się dodać stronę!"
            setInterval(() => {
                successAdd.style.opacity = "0"
            },5000)
            }
        }))
}

addPage.addEventListener("click",() => {
    showPagePanel()

})
exitPanel.addEventListener("click",() => {
    exitPagePanel()
})
pageSubmit.addEventListener("click",(e) =>{
    e.preventDefault()
    validation()
})