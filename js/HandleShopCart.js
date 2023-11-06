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

buttonCard.addEventListener("click", () => {
    getProductInfo(buttonCard, color, size).then((productInfo) => {
        if(typeof Storage !== 'undifinded'){
            let cart = JSON.parse(localStorage.getItem('cart1')) || []
            cart.push(productInfo)
            localStorage.setItem('cart1', JSON.stringify(cart));
        }
        else{

        }
    }).catch((error) => {
        console.error("Wystąpił błąd: ", error);
    });
});