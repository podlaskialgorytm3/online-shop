editProductBtn = document.querySelectorAll(".edit-product")
editProductPanel = document.querySelector(".edit-pro-panel")
submitProductEdit = document.querySelector(".product-submit-edit")



nameProductEdit = document.querySelector(".name-product-edit")
descriptionProductEdit = document.querySelector(".description-product-edit")
categoryToProductEdit = document.querySelector(".category-to-product-edit")
tagToProductEdit = document.querySelector('.tag-to-product-edit')
priceProductEdit = document.querySelector(".price-product-edit")
stockProductEdit = document.querySelector(".stock-product-edit")
URL_ProductEdit = document.querySelector(".URL-product-edit")


nameProductErrorEdit = document.querySelector(".name-product-error-edit")
descriptionProductErrorEdit = document.querySelector(".description-product-error-edit")
priceProductErrorEdit = document.querySelector(".price-product-error-edit")
stockProductErrorEdit = document.querySelector(".stock-product-error-edit")
URL_ProductErrorEdit = document.querySelector(".URL-product-error-edit")



exitProductEdit = document.querySelector(".exit-edit-product")

successEditProduct = document.querySelector(".success-add")

successTextProductEdit = document.querySelector(".success-text")

editProductBtn.forEach(button => {
    button.addEventListener("click",() => {
        editProductPanel.style.display = "flex"
        dashboard.style.display = "none"
        sideBar.style.display = "none"
        suplementingProduct(button.dataset.id)
        submitCategoryToProduct(button.dataset.id)
        validationProduct(button.dataset.id)
    })
})




exitProductEdit.addEventListener("click",() => {
    exitHandlingProductEdit()
    for(let j = 0; j <= categoryToProductEdit.options.length - 1; j++){
        categoryToProductEdit.options[j].selected = false
    }
})

exitHandlingProductEdit = () => {
    editProductPanel.style.display = "none"
    dashboard.style.display = "block"
    sideBar.style.display = "block"
}
suplementingProduct = (id) => {
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-product.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].Id_produktu == id){
                    nameProductEdit.value = database[i].nazwa_produktu
                    tagToProductEdit.value = database[i].id_parametru
                    priceProductEdit.value = database[i].cena
                    stockProductEdit.value = database[i].stan_magazynowy
                    descriptionProductEdit.value = database[i].opis_produktu
                    URL_ProductEdit.value = database[i].URL
                } 
            }
    }} 
}
submitCategoryToProduct = (id) => {
    optionsArray = Array.from(categoryToProductEdit.options);
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-product-category.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].Id_produktu == id){
                    for(let j = 0; j <= categoryToProductEdit.options.length - 1; j++){
                        if(categoryToProductEdit.options[j].value == database[i].id_kategorii){
                            categoryToProductEdit.options[j].selected = true
                        }
                    }
                } 
            }
    }}
}

validationProduct = (id) => {
    let i = 0
    submitProductEdit.addEventListener("click",(e) => {
        e.preventDefault()
        stepValidation = 0
        if(i == 0){
        if(nameProductEdit.value == ""){
            nameProductErrorEdit.textContent = "Podano puste pole!"
        }
        else{
            nameProductErrorEdit.textContent = ""
            stepValidation++
        }
        if(priceProductEdit.value == ""){
            priceProductErrorEdit.textContent = "Podano puste pole!"
        }
        else{
            if(priceProductEdit.value < 0){
                priceProductErrorEdit.textContent = "Podano wartość ujemną dla ceny!"
            }
            else{
                priceProductErrorEdit.textContent = ""
                stepValidation++
            }
        }
        if(stockProductEdit.value == ""){
            stockProductErrorEdit.textContent = "Podano puste pole!"
        }
        else{
            if(stockProductEdit.value < 0){
                stockProductErrorEdit.textContent = "Podano wartość ujemną dla stanu magazynowego!"
            }
            else{
                stockProductErrorEdit.textContent = ""
                stepValidation++
            }
        }
        if(URL_ProductEdit.value == ""){
            URL_ProductErrorEdit.textContent = "Podano puste pole!"
        }
        else{
            URL_ProductErrorEdit.textContent = ""
            stepValidation++
        }
        if(descriptionProductEdit.value == ""){
            descriptionProductErrorEdit.textContent = "Podano puste pole!"
        }
        else{
            descriptionProductErrorEdit.textContent = ""
            stepValidation++
        }
        if(stepValidation == 5){
            editDataProduct(id)
        }}i++
    })
}



function getProductEdit(){
    $.ajax({
        url: "../admin_pages/getData/get-product.php",
        method: 'POST'
    }).done(function( data ) {
        $('#product-body').html(data);
    })
}
function getCategoryToProductEdit(){
    $.ajax({
        url: "../admin_pages/getData/get-category-to-product.php",
        method: 'POST'
    }).done(function( data ) {
        $('.category-to-product-edit').html(data);
    })
}
function getTagToProductEdit(){
    $.ajax({
        url: "../admin_pages/getData/get-tag-to-product.php",
        method: 'POST'
    }).done(function( data ) {
        $('.tag-to-product-edit').html(data);
    })
}

editDataProduct = (id) => {
    $.ajax({
		url: "../admin_pages/pushData/edit-product-to-database.php",
		type: "POST",
		data: {
            id: id,
			nazwa_produktu: nameProductEdit.value,
            id_kategorii: categoryToProductEdit.value,
            id_parametru: tagToProductEdit.value,
            cena: priceProductEdit.value,
            stan_magazynowy: stockProductEdit.value,
            opis_produktu: descriptionProductEdit.value,
            URL: URL_ProductEdit.value
		 },
		cache: false,
		success: function(){
            exitHandlingProductEdit()
            getProductEdit()
            successEditProduct.style.opacity = "1"
            successTextProductEdit.textContent = "Udało się edytować produkt!"
            setInterval(() => {
                successEditProduct.style.opacity = "0"
            },5000)
            }
	    })
}

$(document).ready(function(){
    getCategoryToProductEdit()
    getTagToProductEdit()
});