let shopCart = JSON.parse(localStorage.getItem('cart5'))
let userData = JSON.parse(localStorage.getItem('user-data'))

const supplierContainer = document.querySelector(".supplier")
const addressElement = document.querySelector(".address-data-element")
const paymentContainer = document.querySelector(".payment-data-element")
const shopCartContainer = document.querySelector(".shop-cart-container")
const totalCartValue = document.querySelector(".total-cart-value")
const deliveryValue = document.querySelector(".delivery-value")
const totalValue = document.querySelector(".total-value")


const getSupplier = (id) => {
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-delivery.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].Id_dostawcy == id){
                    supplierContainer.innerHTML = `<b>${database[i].Nazwa}</b></br>
                                                    <span>Kontakt: <a href="mailto:${database[i].Email}">${database[i].Email}</a></span>`
                } 
            }
    }}
}
const getAddressDetails = () => {
    addressElement.innerHTML = `
    <p>${userData.name}</p>
    <p>${userData.address}</p>
    <p>e-mail: ${userData.email}</p>
    <p>tel: ${userData.number}</p>
    `
}
const getPaymentDetails = (id) => {
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-payment.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].Id_platnosci == id){
                    paymentContainer.innerHTML = `<b>${database[i].firma}</b></br>
                                                    <span>Typ płatności: ${database[i].typ_platnosci} </span>`
                } 
            }
    }}
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
const getShopCart = async () => {
    for (const item of shopCart) {
        const div = document.createElement("div");
        div.setAttribute("class", "shop-cart-item");

        const tagName = await getTagsName(parseInt(item.size));
        const tagColor = await getTagsName(parseInt(item.color));

        div.innerHTML = `
            <div class="image" style="background-image: url(${item.URL})"></div>
            <div class="element-information">
                <p>${item.name}        <b> ${tagName} ${tagColor} </b></p>
                <div class="right-side">
                    <p><span class="amount">${item.quanity} szt.</span>   ${item.price} zł</p>
                </div>
            </div>
        `;

        shopCartContainer.appendChild(div);
    }
}

const getTotalCartValue = () => {
    let fullValue = 0
    shopCart.forEach(item => {
        fullValue = fullValue + parseInt(item.quanity) * parseFloat(item.price)
    });
    return fullValue
} 
const getDeliveryValue = (id) => {
    return new Promise((resolve,reject) => {
        const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-delivery.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].Id_dostawcy == id){
                    resolve(database[i].Cena)
                    return
                } 
            }
    }}
    })
}
const getTotalValue = async () => {
    let shopCartValue = getTotalCartValue()
    let supplierValue = await getDeliveryValue(parseInt(userData.idDelivery))

    totalCartValue.textContent = `${shopCartValue} zł`
    deliveryValue.textContent = `${supplierValue} zł`
    totalValue.textContent = `${parseFloat(shopCartValue) + parseFloat(supplierValue)} zł`
}


console.log(getTotalCartValue())
document.addEventListener("DOMContentLoaded",() => {
    getSupplier(parseInt(userData.idDelivery))
    getAddressDetails()
    getPaymentDetails(parseInt(userData.idPayment))
    getShopCart()
    getTotalValue()
})