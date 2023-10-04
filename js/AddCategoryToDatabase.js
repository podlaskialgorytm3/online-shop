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


addCategoryBtn.addEventListener("click",() => {
    addCategoryPanel.style.display = "flex"
    dashboard.style.display = "none"
    sideBar.style.display = "none"
})
exit.addEventListener("click",() => {
    addCategoryPanel.style.display = "none"
    dashboard.style.display = "block"
    sideBar.style.display = "block"
})

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


addData = () => {

}