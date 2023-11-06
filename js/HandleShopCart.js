const size = document.querySelector(".sizes")
const color = document.querySelector(".colors")
const buttonCard = document.querySelector(".add-to-card")

let nameValue = ""
let priceValue = ""
let cart = JSON.parse(localStorage.getItem('cart4')) || [];

const getProductInfo = (buttonCard, color, size) => {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.open("GET", "../components/fetch-product.php", true);
        ajax.send();
        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let database = JSON.parse(this.responseText);
                for (let i = 0; i < database.length; i++) {
                    if (database[i].Id_produktu == buttonCard.dataset.id) {
                        let productInformation = {
                            id: buttonCard.dataset.id,
                            name: database[i].nazwa_produktu,
                            price: database[i].cena,
                            color: color.value,
                            size: size.value,
                            URL: database[i].URL,
                            quanity: 1
                        };
                        resolve(productInformation)
                    }
                }
            }
        };
    });
};

function countSameProducts(cart, productInformation) {
    let count = 0;
    cart.forEach(item => {
        if (
            item.id === productInformation.id &&
            item.color === productInformation.color &&
            item.size === productInformation.size
        ) {
            count++;
        }
    });
    return count;
}

buttonCard.addEventListener("click", () => {
    getProductInfo(buttonCard, color, size).then((productInfo) => {
        if (typeof Storage !== 'undefined') {
            let cart = JSON.parse(localStorage.getItem('cart4')) || [];
            const count = countSameProducts(cart, productInfo);
            if (count > 0) {
                // Znaleziono produkty o tych samych parametrach
                // Aktualizuj ilość w pierwszym znalezionym elemencie
                for (let i = 0; i < cart.length; i++) {
                    if (
                        cart[i].id === productInfo.id &&
                        cart[i].color === productInfo.color &&
                        cart[i].size === productInfo.size
                    ) {
                        cart[i].quanity += 1;
                        break;
                    }
                }
            } else {
                // Nie znaleziono produktów o tych samych parametrach
                productInfo.quanity = 1;
                cart.push(productInfo);
            }

            localStorage.setItem('cart4', JSON.stringify(cart))
            console.log(cart)
            // Tworzenie nowego elementu w koszyku...
        } else {
            // Obsługa, gdy localStorage nie jest dostępne
        }
    }).catch((error) => {
        console.error("Wystąpił błąd: ", error);
    });
});
