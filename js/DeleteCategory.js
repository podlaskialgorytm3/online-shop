deleteBtn = document.querySelectorAll(".delete-category")

deletePopUp = document.querySelector(".confirm-delete")

confirmCategory = document.querySelector(".confirm-category")
rejectCategory = document.querySelector(".reject-category")

function getCategory(){
    $.ajax({
        url: "../admin_pages/getData/get-category.php",
        method: 'POST'
    }).done(function( data ) {
        $('#category-body').html(data);
    })
}


deleteBtn.forEach(button => {
    button.addEventListener("click", () => {
        deletePopUp.style.display = "flex"
        dashboard.style.display = "none"
        sideBar.style.display = "none"
        rejectCategory.addEventListener("click",() => {
            exitDeletePopup()
        })
        confirmCategory.addEventListener("click",() =>{
            $.ajax({
                url: "../admin_pages/removeData/remove-category-from-database.php",
                type: "POST",
                data: {
                    id: button.dataset.id
                 },
                cache: false,
                success: function(){
                    getCategory()
                    exitDeletePopup()
                    }
                })
        })
    })
})

exitDeletePopup = () => {
    deletePopUp.style.display = "none"
    dashboard.style.display = "block"
    sideBar.style.display = "block"
}