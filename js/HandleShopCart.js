const size = document.querySelector(".sizes")
const color = document.querySelector(".colors")
const buttonCard = document.querySelector(".add-to-card")

let nameValue = ""
let priceValue = ""
let cart = JSON.parse(localStorage.getItem('cart1')) || [];

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
                            URL: database[i].URL
                        };
                        resolve(productInformation);
                    }
                }
            }
        };
    });
};

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
        if(typeof Storage !== 'undifinded'){
            let cart = JSON.parse(localStorage.getItem('cart2')) || []
            cart.push(productInfo)
            localStorage.setItem('cart2', JSON.stringify(cart));
            console.log(cart)
            let div = document.createElement("div")
            getTagsName(cart[cart.length -1].color).then(colorName => {
            getTagsName(cart[cart.length -1].size).then(sizeName => {
                div.innerHTML = `
                <div class="container">
                    <h2 class="product-name">${cart[cart.length -1].name}</h2>
                    <div class="center-container">
                        <div class="image" style="background-image: url(${cart[cart.length -1].URL})"></div>
                        <div class="infomration-container">
                            <p><b>Cena: </b>${cart[cart.length -1].price} zł</p>
                            <p><b>Kolor: </b>${colorName}</p>
                            <p><b>Rozmiar: </b>${sizeName}</p>
                        </div>
                    </div>
                </div>
                `
                items.appendChild(div);
            });
        });
        }
        else{

        }
    }).catch((error) => {
        console.error("Wystąpił błąd: ", error);
    });
});