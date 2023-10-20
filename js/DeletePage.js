deleteBtnPage = document.querySelectorAll(".delete-page")
deletePopUpPage = document.querySelector(".confirm-delete-page")
confirmPage = document.querySelector(".confirm-page")
rejectPage = document.querySelector(".reject-page")

function getPages(){
    $.ajax({
        url: "../admin_pages/getData/get-page.php",
        method: 'POST'
    }).done(function( data ) {
        $('#page-body').html(data);
    })
}
showPopup = () => {
    dashboard.style.display = "none"
    sideBar.style.display = "none"
    deletePopUpPage.style.display = "flex"
}
exitPopup = () => {
    dashboard.style.display = "block"
    sideBar.style.display = "block"
    deletePopUpPage.style.display = "none"
}


deleteBtnPage.forEach(button => {
    button.addEventListener("click",() => {
        showPopup()
        rejectPage.addEventListener("click",() => {
            exitPopup()
        })
        confirmPage.addEventListener("click",() =>{
            $.ajax({
                url: "../admin_pages/removeData/remove-page-from-database.php",
                type: "POST",
                data: {
                    id: button.dataset.id
                 },
                cache: false,
                success: function(){
                    getPages()
                    exitPopup()
                    }
                })
        })
    })
})
