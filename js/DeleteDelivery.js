deleteBtn = document.querySelectorAll(".delete-delivery")
deletePopUp = document.querySelector(".confirm-delete-delivery")
confirmD = document.querySelector(".confirm-delivery")
reject = document.querySelector(".reject-delivery")

getDelivery = () =>{
    $.ajax({
        url: "../admin_pages/getData/get-delivery.php",
        method: 'POST'
    }).done(function( data ) {
        $('#delivery-body').html(data);
    })
}
exitDeletePopup = () => {
    deletePopUp.style.display = "none"
    dashboard.style.display = "block"
    sideBar.style.display = "block"
}

deleteBtn.forEach(button => {
    button.addEventListener("click", () => {
        deletePopUp.style.display = "flex"
        dashboard.style.display = "none"
        sideBar.style.display = "none"
        reject.addEventListener("click",() => {
            exitDeletePopup()
        })
        confirmD.addEventListener("click",() =>{
            $.ajax({
                url: "../admin_pages/removeData/remove-delivery-from-database.php",
                type: "POST",
                data: {
                    id: button.dataset.id
                 },
                cache: false,
                success: function(){
                    getDelivery()
                    exitDeletePopup()
                    }
                })
        })
    })
})

