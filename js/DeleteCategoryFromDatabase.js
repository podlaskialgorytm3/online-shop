const deleteBtn = document.querySelectorAll(".delete-category")

const deletePopUp = document.querySelector(".confirm-delete")

const confirmCategory = document.querySelector(".confirm-category")
const rejectCategory = document.querySelector(".reject-category")

deleteBtn.forEach(button => {
    button.addEventListener("click", () => {
        deletePopUp.style.display = "flex"
        dashboard.style.display = "none"
        sideBar.style.display = "none"
        rejectCategory.addEventListener("click",() => {
            deletePopUp.style.display = "none"
            dashboard.style.display = "block"
            sideBar.style.display = "block"
        })
        confirmCategory.addEventListener("click",() =>{
            
        })
    })
})