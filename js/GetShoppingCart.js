let cart2 = JSON.parse(localStorage.getItem('cart5')) || [];

const itemContainer = document.querySelector(".shop-cart-items")


console.log(cart2)

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
cart2.forEach(cartItem => {
    let div = document.createElement("div")
    getTagsName(cartItem.color).then(colorName => {
        getTagsName(cartItem.size).then(sizeName => {
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
                        <button style="margin-top: 20px; cursor: pointer;" class="delete-product"><img src="../images/delete.png" style="width: 50px"/></button>
                    </div>
                </div>
            </div>
            `
            itemContainer.appendChild(div);
        });
    });
});
