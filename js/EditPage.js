exitPanelEdit  = document.querySelector(".exit-edit-page")
pageSubmitEdit = document.querySelector(".page-submit-edit")
editPagePanel = document.querySelector(".edit-page-panel")

titlePageEdit = document.querySelector(".title-page-edit")
descriptionPageEdit = document.querySelector(".description-page-edit")
statusPageEdit = document.querySelector(".status-page-edit")

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
        editPages(id)
}
editPages = (id) => {
    $.ajax({
        url: "../admin_pages/pushData/edit-page-to-database.php",
        type: "POST",
        data: {
            id: id,
            tytul: titlePageEdit.value,
            opis: descriptionPageEdit.value,
            status: statusPageEdit.value
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
        })
}
suplmenetingInput = (id) =>{
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-page.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].id_strony == id){
                    titlePageEdit.value = database[i].tytul
                    descriptionPageEdit.value = database[i].opis
                    statusPageEdit.value = database[i].status
                } 
            }
    }}
}
exitPanelEdit.addEventListener("click",() => {
    exitPagePanelEdit()
})

selectionButton = () => {
    for(let j = 0; j < editPageBtn.length; j++){
        editPageBtn[j].addEventListener("click",() => {
            showPagePanelEdit()
            suplmenetingInput(editPageBtn[j].dataset.id)
            let i = 0
            document.querySelector(".page-submit-edit").addEventListener("click",(e) => {
                if(i == 0){
                e.preventDefault()
                validationEdit(editPageBtn[j].dataset.id)
                }i++
            })
        })
    }
}

selectionButton()