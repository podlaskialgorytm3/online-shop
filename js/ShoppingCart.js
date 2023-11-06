const exit = document.querySelector(".exit-shop-cart")
const entry = document.querySelector(".entry-shop-cart")
const shoppingCart = document.querySelector(".shopping-cart")

exit.addEventListener("click",() => {
    shoppingCart.style.display = "none"
})
entry.addEventListener("click",() => {
    shoppingCart.style.display = "flex"
})