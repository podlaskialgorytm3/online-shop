editButton = document.querySelectorAll(".edit-category")

nameCategoryEdit = document.querySelector(".name-category-edit")
descriptionCategoryEdit = document.querySelector(".description-category-edit")
nameCategoryErrorEdit = document.querySelector(".name-category-error-edit")
descriptionCategoryErrorEdit = document.querySelector(".description-category-error-edit")
submitCategoryEdit = document.querySelector(".category-edit-submit")
exitEditCategory = document.querySelector(".exit-edit-category")
editCategoryPanel = document.querySelector(".edit-category-panel")

console.log(editButton)
editButton.forEach(button => {
    button.addEventListener("click", () => {
        editCategoryPanel.style.display = "flex"
        dashboard.style.display = "none"
        sideBar.style.display = "none"
        supplementingInput(button.dataset.id)
    })
})




const supplementingInput = (id) =>{
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