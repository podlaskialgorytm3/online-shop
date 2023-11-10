let shopCart = JSON.parse(localStorage.getItem('cart5'))
let userData = JSON.parse(localStorage.getItem('user-data'))

const supplierContainer = document.querySelector(".supplier")
const addressElement = document.querySelector(".address-data-element")

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
document.addEventListener("DOMContentLoaded",() => {
    getSupplier(parseInt(userData.idDelivery))
    getAddressDetails()
})