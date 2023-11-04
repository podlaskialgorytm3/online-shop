deleteBtnProduct = document.querySelectorAll(".delete-product")

deletePopUpProduct = document.querySelector(".confirm-delete-product")

confirmProduct = document.querySelector(".confirm-product")
rejectProduct = document.querySelector(".reject-product")

function getProduct(){
    $.ajax({
        url: "../admin_pages/getData/get-product.php",
        method: 'POST'
    }).done(function( data ) {
        $('#product-body').html(data);
    })
}


deleteBtnProduct.forEach(button => {
    button.addEventListener("click", () => {
        deletePopUpProduct.style.display = "flex"
        dashboard.style.display = "none"
        sideBar.style.display = "none"
        rejectProduct.addEventListener("click",() => {
            exitDeletePopupProduct()
        })
        confirmProduct.addEventListener("click",() =>{
            console.log(
            $.ajax({
                url: "../admin_pages/removeData/remove-product-from-database.php",
                type: "POST",
                data: {
                    id: button.dataset.id
                 },
                cache: false,
                success: function(){
                    getProduct()
                    exitDeletePopupProduct()
                    }
                }))
        })
    })
})

exitDeletePopupProduct = () => {
    deletePopUpProduct.style.display = "none"
    dashboard.style.display = "block"
    sideBar.style.display = "block"
}