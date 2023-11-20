deleteItem = document.querySelectorAll(".delete-item")

deleteItem.forEach(button => {
    button.addEventListener("click",() => {
        deleteItemFormFavourites(button.dataset.id)
    })
});

deleteItemFormFavourites = (id) => {
    $.ajax({
        url: "../user_pages/remove_data/remove-item-from-favourites.php",
        type: "POST",
        data: {
            id: id
         },
        cache: false,
        success: function(){
            getFavouriteProducts()    
        }
    })
}