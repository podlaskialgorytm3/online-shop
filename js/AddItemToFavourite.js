const addToFavourite = document.querySelector(".add-to-favourite")


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
    let id_user = await getID()
    return new Promise((resolve,reject) => {
        const ajax = new XMLHttpRequest();
        ajax.open("GET","../components/fetch-favourite-products.php" , true);
        ajax.send();
        ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].Id_produktu == id && database[i].ID_USER == id_user){
                    resolve(true)
                }
                else{
                    resolve(false)
                }
            }
        }}
        
    })
}

addToFavourite.addEventListener("click", async () => {
    if(await isFavourite(addToFavourite.dataset.id)){
        console.log("Jest ulubione! Nie możesz dodać tego do ulubionego : (( (( ")
    }
})