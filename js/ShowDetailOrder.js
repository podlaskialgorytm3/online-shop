dashboard = document.querySelector(".dashboard")
sideBar = document.querySelector(".side-panel")
showDeliveryPanel = document.querySelector(".show-delivery-panel")

showDeliveryButton = document.querySelectorAll(".show-delivery")
exitShowing = document.querySelector(".exit-showing")

detailBody = document.querySelector("#detail-body")



showPopup = () => {
    dashboard.style.display = "none"
    sideBar.style.display = "none"
    showDeliveryPanel.style.display = "flex"
}
exitPopup = () => {
    dashboard.style.display = "block"
    sideBar.style.display = "block"
    showDeliveryPanel.style.display = "none"
}
getDataToArray = (text) => {
    text = text.slice(0,-1)
    let arr = text.split(" ").map(function(str){
        return parseInt(str, 10)
    })
    return arr
}


exitShowing.addEventListener("click",() => {
    exitPopup()
    while (detailBody.firstChild) {
        detailBody.removeChild(detailBody.firstChild);
    }
})
showDeliveryButton.forEach(button => {
    button.addEventListener("click", async () => {

        idProduct = getDataToArray(button.dataset.id_p)
        idOrderProduct = getDataToArray(button.dataset.id_zp)
        let products = []
        let prices = []
        let amount = []

        await fetchData(idProduct, "../components/fetch-product.php", products, prices);
        await fetchDataAmount(idOrderProduct, "../components/fetch-order-product.php", amount);

        for(let i = 0; i < idProduct.length; i++){
            let tr = document.createElement("tr")
            let productColumn = document.createElement("td")
            let priceColumn = document.createElement("td")
            let amountColumn = document.createElement("td")
            let fullPriceColumn = document.createElement("td")
            productColumn.textContent = products[i]
            priceColumn.textContent = prices[i]
            amountColumn.textContent = amount[i]
            fullPriceColumn.textContent = (parseInt(amount[i]) * parseFloat(prices[i])).toFixed(2) + " zł"
            tr.appendChild(productColumn)
            tr.appendChild(priceColumn)
            tr.appendChild(amountColumn)
            tr.appendChild(fullPriceColumn)
            detailBody.appendChild(tr)
        }

        showPopup();
    })
});

// Funkcja do pobierania danych asynchronicznie
function fetchData(ids, url, ...arrays) {
    return new Promise((resolve) => {
        const promises = ids.map((id) => {
            return new Promise((innerResolve) => {
                const ajax = new XMLHttpRequest();
                ajax.open("GET", url, true);
                ajax.send();
                ajax.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        let database = JSON.parse(this.responseText);
                        for (let i = 0; i < database.length; i++) {
                            if (database[i].Id_produktu == id) {
                                arrays.forEach((arr, index) => {
                                    arr.push(index === 0 ? database[i].nazwa_produktu : database[i].cena);
                                });
                            }
                        }
                        innerResolve();
                    }
                };
            });
        });

        Promise.all(promises).then(resolve);
    });
}

function fetchDataAmount(ids, url, ...arrays) {
    return new Promise((resolve) => {
        const promises = ids.map((id) => {
            return new Promise((innerResolve) => {
                const ajax = new XMLHttpRequest();
                ajax.open("GET", url, true);
                ajax.send();
                ajax.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        let database = JSON.parse(this.responseText);
                        for (let i = 0; i < database.length; i++) {
                            if (database[i].id_zamowienie_produkt == id) {
                                arrays.forEach((arr) => {
                                    arr.push(database[i].ilość);
                                });
                            }
                        }
                        innerResolve();
                    }
                };
            });
        });

        Promise.all(promises).then(resolve);
    });
}