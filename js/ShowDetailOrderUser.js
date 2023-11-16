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

getTagsName = (id) => {
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



showDeliveryButton.forEach(button => {
    button.addEventListener("click", async () => {

        idProduct = getDataToArray(button.dataset.id_p)
        idOrderProduct = getDataToArray(button.dataset.id_zp)
        let products = []
        let prices = []
        let amount = []
        let sizes = []
        let colors = []

        await fetchData(idProduct, "../components/fetch-product.php", products, prices);
        await fetchDataAmount(idOrderProduct, "../components/fetch-order-product.php", amount,sizes,colors);

        for(let i = 0; i < idProduct.length; i++){
            sizeName = await getTagsName(parseInt(sizes[i]))
            colorName = await getTagsName(parseInt(colors[i]))
            let tr = document.createElement("tr")
            let productColumn = document.createElement("td")
            let sizeColumn = document.createElement("td")
            let colorColumn = document.createElement("td")
            let priceColumn = document.createElement("td")
            let amountColumn = document.createElement("td")
            let fullPriceColumn = document.createElement("td")
            productColumn.textContent = products[i]
            sizeColumn.textContent = sizeName
            colorColumn.textContent = colorName
            priceColumn.textContent = prices[i] + " zł"
            amountColumn.textContent = amount[i] + " szt."
            fullPriceColumn.textContent = (parseInt(amount[i]) * parseFloat(prices[i])).toFixed(2) + " zł"
            tr.appendChild(productColumn)
            tr.appendChild(sizeColumn)
            tr.appendChild(colorColumn)
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
                                arrays.forEach((arr, index) => {
                                    switch (index) {
                                        case 0:
                                            arr.push(database[i].ilość);
                                            break;
                                        case 1:
                                            arr.push(database[i].Id_rozmiaru);
                                            break;
                                        case 2:
                                            arr.push(database[i].Id_koloru);
                                            break;
                                        // Add more cases if needed
                                    }
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
