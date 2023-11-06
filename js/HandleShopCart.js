const size = document.querySelector(".sizes")
const color = document.querySelector(".colors")
const button = document.querySelector(".add-to-card")

let nameValue = ""
let priceValue = ""

const getProductInfo = (button, color, size) => {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.open("GET", "../components/fetch-product.php", true);
        ajax.send();
        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let database = JSON.parse(this.responseText);
                for (let i = 0; i < database.length; i++) {
                    if (database[i].Id_produktu == button.dataset.id) {
                        let productInformation = {
                            id: button.dataset.id,
                            name: database[i].nazwa_produktu,
                            price: database[i].cena,
                            color: color.value,
                            size: size.value,
                        };
                        resolve(productInformation);
                    }
                }
            }
        };
    });
};

button.addEventListener("click", () => {
    getProductInfo(button, color, size).then((productInfo) => {
        if(typeof Storage !== 'undifinded'){
            let cart = JSON.parse(localStorage.getItem('cart')) || []
            cart.push(productInfo)
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        else{

        }
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.forEach(function (cart_item) {
        console.log("Produkt: " + cart_item.name);
        console.log("Cena: " + cart_item.price);
        console.log("Color: " + cart_item.color);
        console.log("Rozmiar: " + cart_item.size);
});

    }).catch((error) => {
        console.error("Wystąpił błąd: ", error);
    });
});



