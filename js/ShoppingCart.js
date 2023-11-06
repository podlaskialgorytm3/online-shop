const exit = document.querySelector(".exit-shop-cart")
const entry = document.querySelector(".entry-shop-cart")
const shoppingCart = document.querySelector(".shopping-cart")
const items = document.querySelector("#items")

exit.addEventListener("click",() => {
    shoppingCart.style.display = "none"
})
entry.addEventListener("click",() => {
    shoppingCart.style.display = "flex"
})
let cart1 = JSON.parse(localStorage.getItem('cart1')) || []

cart1.forEach(cartItem => {
    let div = document.createElement("div")
    div.innerHTML = `<div><p>${cartItem.name}</p><p>${cartItem.price} zł</p><p>${cartItem.color}</p><p>${cartItem.size}</p></div>`
    items.appendChild(div)
});