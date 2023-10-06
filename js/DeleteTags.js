deleteBtnTag = document.querySelectorAll(".delete-tag")

deletePopUpTag = document.querySelector(".confirm-delete-tag")

confirmTag = document.querySelector(".confirm-tag")
rejectTag = document.querySelector(".reject-tag")

function getTag(){
    $.ajax({
        url: "../admin_pages/getData/get-tags.php",
        method: 'POST'
    }).done(function( data ) {
        $('#tag-body').html(data);
    })
}


deleteBtnTag.forEach(button => {
    button.addEventListener("click", () => {
        deletePopUpTag.style.display = "flex"
        dashboard.style.display = "none"
        sideBar.style.display = "none"
        rejectTag.addEventListener("click",() => {
            exitDeletePopupTag()
        })
        confirmTag.addEventListener("click",() =>{
            $.ajax({
                url: "../admin_pages/removeData/remove-tag-from-database.php",
                type: "POST",
                data: {
                    id: button.dataset.id
                 },
                cache: false,
                success: function(){
                    getTag()
                    exitDeletePopupTag()
                    }
                })
        })
    })
})

exitDeletePopupTag = () => {
    deletePopUpTag.style.display = "none"
    dashboard.style.display = "block"
    sideBar.style.display = "block"
}