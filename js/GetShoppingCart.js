let cart2 = JSON.parse(localStorage.getItem('cart5')) || [];

const itemContainer = document.querySelector(".shop-cart-items")
const buttonArea = document.querySelector(".button-area")
const priceContainer = document.querySelector(".total-price")

let totalPrice = JSON.parse(localStorage.getItem('price')) || 0;


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
// Deklaracja tablicy do przechowania wszystkich obietnic
const promises = [];

cart2.forEach(item => {
    totalPrice = totalPrice + parseFloat(item.price) * parseInt(item.quanity)
})


const getShoppingCart = () => {
    while (itemContainer.firstChild) {
        itemContainer.removeChild(itemContainer.firstChild); // Usuń wszystkie dzieci rodzica
    }
    cart2.forEach((cartItem,index) => {
        let div = document.createElement("div");
        const colorPromise = getTagsName(cartItem.color);
        const sizePromise = getTagsName(cartItem.size);
        promises.push(Promise.all([colorPromise, sizePromise]).then(([colorName, sizeName]) => {
            div.innerHTML = `
            <div class="container" style="width: 1000px; height: 350px;">
                <h2 class="product-name product-name-scp">${cartItem.name}</h2>
                <div class="center-container">
                    <div class="image" style="background-image: url(${cartItem.URL}); height: 300px;"></div>
                    <div class="infomration-container">
                        <p><b>Cena: </b>${cartItem.price} zł</p>
                        <p><b>Kolor: </b>${colorName}</p>
                        <p><b>Rozmiar: </b>${sizeName}</p>
                        <p><b>Ilość: </b>${cartItem.quanity}</p>
                        <button data-id=${index} style="margin-top: 20px; cursor: pointer;" class="delete-product"><img src="../images/delete.png" style="width: 50px"/></button>
                    </div>
                </div>
            </div>
            `;
            itemContainer.appendChild(div);
        }));
    });
    Promise.all(promises).then(() => {
        const deleteButton = document.querySelectorAll(".delete-product");
        deleteButton.forEach(btn => {
            btn.addEventListener("click", () => {
                let index = btn.dataset.id
                let minus = parseFloat(cart2[index].price) * parseInt(cart2[index].quanity)
                totalPrice-=minus
                priceContainer.textContent = `Łączna kwota: ${totalPrice.toFixed(2)} zł`
                if (index !== -1) {
                console.log(cart2[index].price)
                 // Usuń produkt z koszyka
                cart2.splice(index, 1);
                console.log(cart2)
                // Zapisz zaktualizowany koszyk z powrotem do Local Storage
                localStorage.setItem('cart5', JSON.stringify(cart2));
                getShoppingCart()
                if(cart2){
                    if(cart2.length == 0){
                        buttonArea.removeChild(buttonArea.firstChild)
                        priceContainer.textContent = `Łączna kwota: 0 zł`
                    }
                    else{
                        buttonArea.innerHTML = `<a href="/waiting.php" class="go-to-delivery">Przejdź do dostawy!</a>`
                    }
            }
            }
            })
        })
    });
}



// Po zakończeniu wszystkich operacji asynchronicznych ustawiamy deleteButton


document.addEventListener("DOMContentLoaded",() => {
    getShoppingCart()
    priceContainer.textContent = `Łączna kwota: ${totalPrice.toFixed(2)} zł`
    if(cart2){
            if(cart2.length == 0){
                if(buttonArea.firstChild){
                    buttonArea.removeChild(buttonArea.firstChild)
                    priceContainer.textContent = `Łączna kwota: 0 zł`
                }
            }
            else{
                buttonArea.innerHTML = `<a href="/waiting.php" class="go-to-delivery">Przejdź do dostawy!</a>`
            }
    }
})