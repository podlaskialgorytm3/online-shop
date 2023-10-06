const addCategoryBtn = document.querySelector(".add-category")
const addCategoryPanel = document.querySelector(".add-category-panel")
const sideBar = document.querySelector(".side-panel")
const dashboard = document.querySelector(".dashboard")

const nameCategory = document.querySelector(".name-category")
const descriptionCategory = document.querySelector(".description-category")
const submit = document.querySelector(".category-submit")
const nameCategoryError = document.querySelector(".name-category-error")
const descriptionCategoryError = document.querySelector(".description-category-error")

const exit = document.querySelector(".exit-add-category")

const successAddCategory = document.querySelector(".success-add-category")

const successText = document.querySelector(".success-text")

addCategoryBtn.addEventListener("click",() => {
    addCategoryPanel.style.display = "flex"
    dashboard.style.display = "none"
    sideBar.style.display = "none"
})
exit.addEventListener("click",() => {
    exitHandling()
})

const exitHandling = () => {
    addCategoryPanel.style.display = "none"
    dashboard.style.display = "block"
    sideBar.style.display = "block"
}

submit.addEventListener("click",(e) => {
    e.preventDefault()
    stepValidation = 0
    if(nameCategory.value == ""){
        nameCategoryError.textContent = "Pole jest wymagane!"
    }
    else{
        stepValidation++
        nameCategoryError.textContent = ""
    }
    if(descriptionCategory.value == ""){
        descriptionCategoryError.textContent = "Pole jest wymagane!"
    }
    else{
        stepValidation++
        descriptionCategoryError.textContent = ""
    }
    if(stepValidation == 2){
        addData()
    }
})

function getCategory(){
    $.ajax({
        url: "../admin_pages/getData/get-category.php",
        method: 'POST'
    }).done(function( data ) {
        $('#category-body').html(data);
    })
}

addData = () => {
    $.ajax({
		url: "../admin_pages/pushData/add-category-to-database.php",
		type: "POST",
		data: {
			nazwa_kategorii: nameCategory.value,
            opis_kategorii: descriptionCategory.value
		 },
		cache: false,
		success: function(){
            exitHandling()
            getCategory()
            successAddCategory.style.opacity = "1"
            successText.textContent = "Udało się dodać kategorię!"
            setInterval(() => {
                successAddCategory.style.opacity = "0"
            },5000)
            }
	    })
}