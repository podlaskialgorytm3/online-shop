const productSelect = document.querySelector(".product")
const tagSelect = document.querySelector(".tag")
const categorySelect = document.querySelector(".category")
const productTable = document.querySelector(".product-table")
const tagTable = document.querySelector(".tag-table")
const categoryTable = document.querySelector(".category-table")

productSelect.addEventListener("click",() => {
    productTable.style.display = "block"
    productSelect.style.backgroundColor = "rgba(131, 197, 241, 0.582)"
    tagTable.style.display = "none"
    tagSelect.style.backgroundColor = "white"
    categoryTable.style.display = "none"
    categorySelect.style.backgroundColor = "white"
})
tagSelect.addEventListener("click",() => {
    productTable.style.display = "none"
    productSelect.style.backgroundColor = "white"
    tagTable.style.display = "block"
    tagSelect.style.backgroundColor = "rgba(131, 197, 241, 0.582)"
    categoryTable.style.display = "none"
    categorySelect.style.backgroundColor = "white"
})
categorySelect.addEventListener("click",() => {
    productTable.style.display = "none"
    productSelect.style.backgroundColor = "white"
    tagTable.style.display = "none"
    tagSelect.style.backgroundColor = "white"
    categoryTable.style.display = "block"
    categorySelect.style.backgroundColor = "rgba(131, 197, 241, 0.582)"
})
