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
let cart1 = JSON.parse(localStorage.getItem('cart2')) || []

const addItemToShopCart = () => {
    while (items.firstChild) {
        items.removeChild(items.firstChild);
    }
    const getTagsName = (id) => {
        return new Promise((resolve, reject) => {
            const ajax = new XMLHttpRequest();
            ajax.open("GET", "../components/fetch-tag.php", true);
            ajax.send();
            ajax.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let database = JSON.parse(this.responseText);
                    for (let i = 0; i < database.length; i++) {
                        if (database[i].id_parametru == id) {
                            resolve(database[i].wartosc_parametru);
                            return;
                        }
                    }
                    resolve("Brak parametru.");
                }
            };
        });
    }
    cart1.forEach(cartItem => {
        let div = document.createElement("div")
        getTagsName(cartItem.color).then(colorName => {
            getTagsName(cartItem.size).then(sizeName => {
                div.innerHTML = `
                <div class="container">
                    <h2 class="product-name">${cartItem.name}</h2>
                    <div class="center-container">
                        <div class="image" style="background-image: url(${cartItem.URL})"></div>
                        <div class="infomration-container">
                            <p><b>Cena: </b>${cartItem.price} zł</p>
                            <p><b>Kolor: </b>${colorName}</p>
                            <p><b>Rozmiar: </b>${sizeName}</p>
                        </div>
                    </div>
                </div>
                `
                items.appendChild(div);
            });
        });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    addItemToShopCart()
})