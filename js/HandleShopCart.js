const size = document.querySelector(".sizes")
const color = document.querySelector(".colors")
const buttonCard = document.querySelector(".add-to-card")

let nameValue = ""
let priceValue = ""
let cart = JSON.parse(localStorage.getItem('cart5')) || [];

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

buttonCard.addEventListener("click", () => {
    getProductInfo(buttonCard, color, size).then((productInfo) => {
        if (typeof Storage !== 'undefined') {
            let cart = JSON.parse(localStorage.getItem('cart5')) || [];
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

            localStorage.setItem('cart5', JSON.stringify(cart))
            console.log(cart)
            // Tworzenie nowego elementu w koszyku...
            let div = document.createElement("div")
            getTagsName(cart[cart.length -1].color).then(colorName => {
            getTagsName(cart[cart.length -1].size).then(sizeName => {
                div.innerHTML = `
                <div class="container">
                    <h2 class="product-name">${cart[cart.length -1].name}</h2>
                    <div class="center-container">
                        <div class="image" style="background-image: url(${cart[cart.length -1].URL})"></div>
                        <div class="infomration-container ic-scp">
                            <p><b>Cena: </b>${cart[cart.length -1].price} zł</p>
                            <p><b>Kolor: </b>${colorName}</p>
                            <p><b>Rozmiar: </b>${sizeName}</p>
                            <p><b>Ilość: </b><span class="quanity">${cart[cart.length - 1].quanity}</span></p>
                        </div>
                    </div>
                </div>
                `
                items.appendChild(div);
            });
        });
        } else {
            // Obsługa, gdy localStorage nie jest dostępne
        }
    }).catch((error) => {
        console.error("Wystąpił błąd: ", error);
    });
});

const successAdd = document.querySelector(".add-product-to-card")
const successText = document.querySelector(".success-text")

buttonCard.addEventListener("click", () => {
    successAdd.style.opacity = "1"
    successText.textContent = "Dodałeś produkt do koszyka!"
            setInterval(() => {
                successAdd.style.opacity = "0"
            },2000)
})