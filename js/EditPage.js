exitPanelEdit  = document.querySelector(".exit-edit-page")
pageSubmitEdit = document.querySelector(".page-submit-edit")
editPagePanel = document.querySelector(".edit-page-panel")

titlePageEdit = document.querySelector(".title-page-edit")
descriptionPageEdit = document.querySelector(".description-page-edit")
statusPageEdit = document.querySelector(".status-pag-edit")

titleErrorPageEdit = document.querySelector(".title-page-error-edit")
descriptionErrorPageEdit = document.querySelector(".description-page-error-edit")

editPageBtn = document.querySelectorAll(".edit-page")

function getPages(){
    $.ajax({
        url: "../admin_pages/getData/get-page.php",
        method: 'POST'
    }).done(function( data ) {
        $('#page-body').html(data);
    })
}

showPagePanelEdit = () => {
    dashboard.style.display = "none"
    sideBar.style.display = "none"
    editPagePanel.style.display = "flex"
}
exitPagePanelEdit = () => {
    dashboard.style.display = "block"
    sideBar.style.display = "block"
    editPagePanel.style.display = "none"
}
isEmptyEdit = (text) => {
    return text == "" ? true : false
}
validationEdit = (id) => {
    let stepValidation = 0
    let textError = "Podane pole jest puste!"
    if(isEmptyEdit(titlePageEdit.value)){
        titleErrorPageEdit.textContent = textError
    }
    else{
        titleErrorPageEdit.textContent = ''
        stepValidation+=1
    }
    if(isEmptyEdit(descriptionPageEdit.value)){
        descriptionErrorPageEdit.textContent = textError
    }
    else{
        descriptionErrorPageEdit.textContent = ''
        stepValidation+=1
    }
    if(stepValidation == 2)
        console.log("Zwalidowano poprawnie")
}
const editPages = (id) => {
    console.log(
    $.ajax({
        url: "../admin_pages/pushData/edit-page-to-database.php",
        type: "POST",
        data: {
            id: id,
            tytul: titlePage.value,
            opis: descriptionPage.value,
            status: statusPage.value
        },
        cache: false,
        success: function(){
            exitPagePanelEdit()
            getPages()
            successAdd.style.opacity = "1"
            successText.textContent = "Udało się edytować stronę!"
            setInterval(() => {
                successAdd.style.opacity = "0"
            },5000)
            }
        }))
}

editPageBtn.forEach(button => {
    button.addEventListener("click",() => {
        showPagePanelEdit()
        pageSubmitEdit.addEventListener("click",(e) => {
            e.preventDefault()
            validationEdit(button.dataset.id)
        })
    })
})
