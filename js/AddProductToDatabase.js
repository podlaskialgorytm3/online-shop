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
    if(nameTag.value == ""){
        nameTagError.textContent = "Pole jest wymagane!"
    }
    else{
        stepValidation++
        nameTagError.textContent = ""
    }
    if(descriptionTag.value == ""){
        descriptionTagError.textContent = "Pole jest wymagane!"
    }
    else{
        stepValidation++
        descriptionTagError.textContent = ""
    }
    if(stepValidation == 2){
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
			nazwa_parametru: nameTag.value,
            opis_parametru: descriptionTag.value
		 },
		cache: false,
		success: function(){
            exitHandlingTag()
            getTag()
            successAddTag.style.opacity = "1"
            successTextTag.textContent = "Udało się dodać parametr!"
            setInterval(() => {
                successAddTag.style.opacity = "0"
            },5000)
            }
	    })
}

$(document).ready(function(){
    getCategoryToProduct()
    getTagToProduct()
});