const addToFavourite = document.querySelector(".add-to-favourite")
const rejectInfo = document.querySelector(".reject-info")
const rejectText = document.querySelector(".reject-text")
const getID = () => {
    return new Promise((resolve, reject) => {
        let xmlhttp = new XMLHttpRequest();
        let url = "../user_pages/get_data/get-id.php";
        
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    let data = JSON.parse(this.responseText);
                    resolve(data);
                } else {
                    reject(new Error('Request failed with status ' + this.status));
                }
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    });
}
const isFavourite = async (id) => {
    try {
        let id_user = await getID();
        return new Promise((resolve, reject) => {
            const ajax = new XMLHttpRequest();
            ajax.open("GET", "../components/fetch-favourite-products.php", true);
            ajax.send();
            ajax.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let database = JSON.parse(this.responseText);
                    for (let i = 0; i < database.length; i++) {
                        if (database[i].Id_produktu == id && database[i].ID_USER == id_user) {
                            resolve(true);
                            return;
                        }
                    }
                    resolve(false);
                }
            };
        });
    } catch (error) {
        console.error("Wystąpił błąd: ", error);
        throw error;
    }
};

const productIsAlreadyFavourite = () => {
    rejectInfo.style.opacity = "1"
    rejectText.textContent = "Produkt jest już w ulubionych."
    setInterval(() => {
        rejectInfo.style.opacity = "0"
    },5000)
}
const successAddToFavourite = () => {
    successAdd.style.opacity = "1"
    successText.textContent = "Dodano produkt do ulubionych."
    setInterval(() => {
        successAdd.style.opacity = "0"
    },5000)
}
const addProductToFavourite = async () => {
    let id_user = await getID()
    $.ajax({
        url: "../user_pages/push_data/add-favourite-item.php",
        type: "POST",
        data: {
            Id_user: id_user,
            Id_product: addToFavourite.dataset.id
         },
        cache: false,
        success: function(){
            successAddToFavourite()
        }
     })
}

addToFavourite.addEventListener("click", async () => {
    try {
        const id = addToFavourite.dataset.id;
        const isFav = await isFavourite(id);
        if (isFav) {
            productIsAlreadyFavourite();
        } else {
            addProductToFavourite();
        }
    } catch (error) {
        console.error("Wystąpił błąd:", error);
    }
});