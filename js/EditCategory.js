editButton = document.querySelectorAll(".edit-category")

nameCategoryEdit = document.querySelector(".name-category-edit")
descriptionCategoryEdit = document.querySelector(".description-category-edit")
nameCategoryErrorEdit = document.querySelector(".name-category-error-edit")
descriptionCategoryErrorEdit = document.querySelector(".description-category-error-edit")
submitCategoryEdit = document.querySelector(".category-edit-submit")
exitEditCategory = document.querySelector(".exit-edit-category")
editCategoryPanel = document.querySelector(".edit-category-panel")

editButton.forEach(button => {
    button.addEventListener("click", () => {
        editCategoryPanel.style.display = "flex"
        dashboard.style.display = "none"
        sideBar.style.display = "none"
        supplementingInput(button.dataset.id)
        validation(button.dataset.id)
        
    })
})
exitEditCategory.addEventListener("click",() => {
    exitEditPanelHandler()
})


supplementingInput = (id) =>{
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-category.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].id_kategorii == id){
                    nameCategoryEdit.value = database[i].nazwa_kategorii
                    descriptionCategoryEdit.value = database[i].opis_kategorii
                } 
            }
    }}
}

function editData(id){
    $.ajax({
		url: "../admin_pages/pushData/edit-category-to-database.php",
		type: "POST",
		data: {
            id: id,
			nazwa_kategorii: nameCategoryEdit.value,
            opis_kategorii: descriptionCategoryEdit.value
		 },
		cache: false,
		success: function(){
            getCategory()
            successText.textContent = "Udało się zedytować kategorię!"
            nameCategoryEdit.value = ""
            descriptionCategoryEdit.value = ""
            exitEditPanelHandler()
            successAddCategory.style.opacity = "1"
            setInterval(() => {
                successAddCategory.style.opacity = "0"
            },5000)
            }
	    })
}

exitEditPanelHandler = () => {
    editCategoryPanel.style.display = "none"
    dashboard.style.display = "block"
    sideBar.style.display = "block"
}
validation = (id) => {
    let i = 0
    document.querySelector(".category-edit-submit").addEventListener("click",(e) => {
        e.preventDefault()
        if(i == 0){
        stepValidation = 0
        if(nameCategoryEdit.value == ""){
            nameCategoryErrorEdit.textContent = "Pole jest wymagane!"
        }
        else{
            stepValidation++
            nameCategoryErrorEdit.textContent = ""
        }
        if(descriptionCategoryEdit.value == ""){
            descriptionCategoryErrorEdit.textContent = "Pole jest wymagane!"
        }
        else{
            stepValidation++
            descriptionCategoryErrorEdit.textContent = ""
        }
        if(stepValidation == 2){
            editData(id)
        }}
        i++
    })
}

