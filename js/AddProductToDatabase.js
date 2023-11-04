const addProductBtn = document.querySelector(".add-product")
const addProductPanel = document.querySelector(".add-pro-panel")
const submitProduct = document.querySelector(".product-submit")



const nameProduct = document.querySelector(".name-product")
const descriptionProduct = document.querySelector(".description-product")
const categoryToProduct = document.querySelector(".category-to-product")
const tagToProduct = document.querySelector('.tag-to-product')
const priceProduct = document.querySelector(".price-product")
const stockProduct = document.querySelector(".stock-product")
const URL_Product = document.querySelector(".URL-product")


const nameProductError = document.querySelector(".name-product-error")
const descriptionProductError = document.querySelector(".description-product-error")
const priceProductError = document.querySelector(".price-product-error")
const stockProductError = document.querySelector(".stock-product-error")
const URL_ProductError = document.querySelector(".URL-product-error")



const exitProduct = document.querySelector(".exit-add-product")

const successAddProduct = document.querySelector(".success-add")

const successTextProduct = document.querySelector(".success-text")

let categories = []
let tags = []

addProductBtn.addEventListener("click",() => {
    addProductPanel.style.display = "flex"
    dashboard.style.display = "none"
    sideBar.style.display = "none"
})
exitProduct.addEventListener("click",() => {
    exitHandlingProduct()
})

const exitHandlingProduct = () => {
    addProductPanel.style.display = "none"
    dashboard.style.display = "block"
    sideBar.style.display = "block"
}




submitProduct.addEventListener("click",(e) => {
    e.preventDefault()
    stepValidation = 0
    optionsArray = Array.from(categoryToProduct.options);
    optionsArray.forEach(category => {
        if(category.selected)
            categories.push(parseInt(category.value))
    })
    optionsArray2 = Array.from(tagToProduct.options);
    optionsArray2.forEach(tag => {
        if(tag.selected)
            tags.push(parseInt(tag.value))
    })
    if(nameProduct.value == ""){
        nameProductError.textContent = "Podano puste pole!"
    }
    else{
        nameProductError.textContent = ""
        stepValidation++
    }
    if(priceProduct.value == ""){
        priceProductError.textContent = "Podano puste pole!"
    }
    else{
        if(priceProduct.value < 0){
            priceProductError.textContent = "Podano wartość ujemną dla ceny!"
        }
        else{
            priceProductError.textContent = ""
            stepValidation++
        }
    }
    if(stockProduct.value == ""){
        stockProductError.textContent = "Podano puste pole!"
    }
    else{
        if(stockProduct.value < 0){
            stockProductError.textContent = "Podano wartość ujemną dla stanu magazynowego!"
        }
        else{
            stockProductError.textContent = ""
            stepValidation++
        }
    }
    if(URL_Product.value == ""){
        URL_ProductError.textContent = "Podano puste pole!"
    }
    else{
        URL_ProductError.textContent = ""
        stepValidation++
    }
    if(descriptionProduct.value == ""){
        descriptionProductError.textContent = "Podano puste pole!"
    }
    else{
        descriptionProductError.textContent = ""
        stepValidation++
    }
    if(stepValidation == 5){
        addDataProduct()
    }
})

function getProduct(){
    $.ajax({
        url: "../admin_pages/getData/get-product.php",
        method: 'POST'
    }).done(function( data ) {
        $('#product-body').html(data);
    })
}
function getCategoryToProduct(){
    $.ajax({
        url: "../admin_pages/getData/get-category-to-product.php",
        method: 'POST'
    }).done(function( data ) {
        $('.category-to-product').html(data);
    })
}
function getTagToProduct(){
    $.ajax({
        url: "../admin_pages/getData/get-tag-to-product.php",
        method: 'POST'
    }).done(function( data ) {
        $('.tag-to-product').html(data);
    })
}

addDataProduct = () => {
    $.ajax({
		url: "../admin_pages/pushData/add-product-to-database.php",
		type: "POST",
		data: {
			nazwa_produktu: nameProduct.value,
            cena: priceProduct.value,
            stan_magazynowy: stockProduct.value,
            opis_produktu: descriptionProduct.value,
            URL: URL_Product.value
		 },
		cache: false,
		success: function(){
            exitHandlingProduct()
            getProduct()
            successAddProduct.style.opacity = "1"
            successTextProduct.textContent = "Udało się dodać produkt!"
            setInterval(() => {
                successAddProduct.style.opacity = "0"
            },5000)
            addCategoriesToProduct()
            addTagsToProduct()
            }
	    })
       const addCategoriesToProduct = () => {
        const ajax = new XMLHttpRequest();
        ajax.open("GET","../components/fetch-product.php" , true);
        ajax.send();
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let database = JSON.parse(this.responseText);
                console.log(database[database.length - 1].Id_produktu)
                categories.forEach(category => {
                    $.ajax({
                        url: "../admin_pages/pushData/add-product-category-to-database.php",
                        type: "POST",
                        data: {
                            Id_produktu: database[database.length-1].Id_produktu,
                            Id_kategorii: category
                         },
                        cache: false,
                        success: function(){
                            getProduct()
                        }
                     })
                })
        }}
       }
       const addTagsToProduct = () => {
        const ajax = new XMLHttpRequest();
        ajax.open("GET","../components/fetch-product.php" , true);
        ajax.send();
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let database = JSON.parse(this.responseText);
                console.log(database[database.length - 1].Id_produktu)
                tags.forEach(tag => {
                    $.ajax({
                        url: "../admin_pages/pushData/add-product-tag-to-database.php",
                        type: "POST",
                        data: {
                            Id_produktu: database[database.length-1].Id_produktu,
                            Id_parametru: tag
                         },
                        cache: false,
                        success: function(){
                            getProduct()
                        }
                     })
                })
        }}
       }
}

$(document).ready(function(){
    getCategoryToProduct()
    getTagToProduct()
});