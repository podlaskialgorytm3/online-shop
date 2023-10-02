const productSelect = document.querySelector(".product")
const tagSelect = document.querySelector(".tag")
const categorySelect = document.querySelector(".category")
const productTable = document.querySelector(".product-table")
const tagTable = document.querySelector(".tag-table")
const categoryTable = document.querySelector(".category-table")
const addProduct = document.querySelector(".add-product")
const addTag = document.querySelector(".add-tag")
const addCategory = document.querySelector(".add-category")


productSelect.addEventListener("click",() => {
    productTable.style.display = "block"
    productSelect.style.backgroundColor = "rgba(131, 197, 241, 0.582)"
    tagTable.style.display = "none"
    tagSelect.style.backgroundColor = "white"
    categoryTable.style.display = "none"
    categorySelect.style.backgroundColor = "white"

    addProduct.style.display = 'flex'
    addTag.style.display = 'none'
    addCategory.style.display = 'none'

})
tagSelect.addEventListener("click",() => {
    productTable.style.display = "none"
    productSelect.style.backgroundColor = "white"
    tagTable.style.display = "block"
    tagSelect.style.backgroundColor = "rgba(131, 197, 241, 0.582)"
    categoryTable.style.display = "none"
    categorySelect.style.backgroundColor = "white"

    addProduct.style.display = 'none'
    addTag.style.display = 'flex'
    addCategory.style.display = 'none'
})
categorySelect.addEventListener("click",() => {
    productTable.style.display = "none"
    productSelect.style.backgroundColor = "white"
    tagTable.style.display = "none"
    tagSelect.style.backgroundColor = "white"
    categoryTable.style.display = "block"
    categorySelect.style.backgroundColor = "rgba(131, 197, 241, 0.582)"

    addProduct.style.display = 'none'
    addTag.style.display = 'none'
    addCategory.style.display = 'flex'
})
