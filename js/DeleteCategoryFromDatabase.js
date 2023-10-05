const deleteBtn = document.querySelectorAll(".delete-category")

deleteBtn.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.dataset.id)
    })
})